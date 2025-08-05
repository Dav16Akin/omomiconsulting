import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  // console.log("API Key exists:", !!process.env.RESEND_API_KEY);
  // console.log(
  //   "Attempting to send emails to:",
  //   email,
  //   "and info@omomiconsulting.com"
  // );

  try {
    const userEmailResult = await resend.emails.send({
      from: "Omomi Consulting <info@omomiconsulting.com>",
      to: email,
      subject: "Confirmation Email",
      html: `<p>Hi ${name} 👋<br />Thanks for contacting Omomi Consulting. We'll be in touch shortly!</p>`,
    });

    // console.log("User email result:", userEmailResult);

    const companyEmailResult = await resend.emails.send({
      from: "Website Contact <info@omomiconsulting.com>",
      to: "info@omomiconsulting.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Message from Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    // console.log("Company email result:", companyEmailResult);

    return NextResponse.json({
      success: true,
      userEmailId: userEmailResult.data?.id,
      companyEmailId: companyEmailResult.data?.id,
    });
  } catch (error) {
    // console.error("Email sending failed:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Unknown error occurred",
      },
      { status: 500 }
    );
  }
}
