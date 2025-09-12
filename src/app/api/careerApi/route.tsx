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

    if (!fullName || !email || !position) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Convert resume file to Base64 for email attachment
    const attachments: { filename: string; content: string; encoding: string }[] = [];
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
      from: "Your Name <careers@yourdomain.com>", // ⚠️ must be a verified domain in Resend
      to: "cnwigwe525@gmail.com", // test recipient
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

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email", details: String(error) },
      { status: 500 }
    );
  }
}
