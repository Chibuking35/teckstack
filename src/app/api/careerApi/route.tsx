import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const position = formData.get("position") as string;
    const portfolio = formData.get("portfolio") as string | null;
    const motivation = formData.get("motivation") as string | null;
    const resume = formData.get("resume") as File | null;

    // ✅ Convert resume file to Base64 for email attachment
    const attachments: {
      filename: string;
      content: string;
      encoding: string;
    }[] = [];
    if (resume) {
      const buffer = Buffer.from(await resume.arrayBuffer());
      attachments.push({
        filename: resume.name,
        content: buffer.toString("base64"),
        encoding: "base64", // ✅ required
      });
    }

    // ✅ Send email with attachment
    const data = await resend.emails.send({
      from: "Tech-hike <onboarding@resend.dev>",
      to: "cnwigwe525@gmail.com",
      subject: `New Application for ${position}`,
      html: `
        <h2>New Application Received</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Portfolio:</strong> ${portfolio || "N/A"}</p>
        <p><strong>Motivation:</strong> ${motivation || "N/A"}</p>
      `,
      attachments,
    });

    // Send confirmation email to user
    await resend.emails.send({
      from: "Tech-hike <onboarding@resend.dev>",
      to: email,
      subject: "Quote Request Received",
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1a1a1a;"> 
  <h2 style="color: #0D47A1;">Application Received</h2>
  <p>Dear ${fullName},</p>
  
  <p>Thank you for applying to join our <strong>Tech Team</strong> for the role of <strong>${position}</strong>. 
  We have successfully received your application and our recruitment team is currently reviewing your submission.</p> 
  
  <p>We will get back to you within 5-7 business days regarding the next steps in the selection process. 
  Please note that only shortlisted candidates will be contacted for interviews.</p>
  
  <p>We truly appreciate your interest in being part of our team and look forward to the possibility of working together.</p>
  
  <p>Sincerely, <br/><strong>Tech-hike Team</strong></p>
</div>

      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
