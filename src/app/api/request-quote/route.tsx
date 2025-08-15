import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    // Parse FormData since a file may be uploaded
    const formData = await req.formData();

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const service = formData.get("service") as string;
    const description = formData.get("description") as string;
    const budget = formData.get("budget") as string;
    const timeline = formData.get("timeline") as string;
    const company = (formData.get("company") as string) || "";
    const contactMethod = formData.get("contactMethod") as string;
    const file = formData.get("file") as File | null;

    // Format phone with dashes if needed
    const formatPhoneNumber = (value: string) => {
      const digits = value.replace(/\D/g, "");
      if (digits.length <= 3) return digits;
      if (digits.length <= 6) return `${digits.slice(0, 3)}-${digits.slice(3)}`;
      return `${digits.slice(0, 3)}-${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
    };
    const formattedPhone = formatPhoneNumber(phone);

    // Prepare attachments array if a file exists
    const attachments = [];
    if (file) {
      const arrayBuffer = await file.arrayBuffer();
      const base64 = Buffer.from(arrayBuffer).toString("base64");

      attachments.push({
        filename: file.name,
        content: base64,
        contentType: file.type,
      });
    }

    // Send email to admin
    await resend.emails.send({
      from: "Tech-hike <onboarding@resend.dev>",
      to: "cnwigwe525@gmail.com",
      subject: "New Quote Request",
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${formattedPhone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Budget:</strong> ${budget}</p>
        <p><strong>Timeline:</strong> ${timeline}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Preferred Contact Method:</strong> ${contactMethod}</p>
      `,
      attachments, // attach file if exists
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Tech-hike <onboarding@resend.dev>",
      to: email,
      subject: "Quote Request Received",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;"> 
          <h2 style="color: #0D47A1;">Quote Request Received</h2>
          <p>Dear ${name},</p>
          <p>We have received your request for a quote regarding <strong>${service}</strong>. 
          Our team is reviewing your submission and will provide a detailed response within 24-48 hours.</p> 
          <p>Your inquiry is important to us, and we are committed to delivering timely and professional service.</p>
          <p>Sincerely, <br/><strong>Tech-hike Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
