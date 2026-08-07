import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return null;
  }

  return new Resend(apiKey);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all fields." },
        { status: 400 }
      );
    }

    const recipient = process.env.CONTACT_TO_EMAIL || "ghimirerahul554@gmail.com";
    const resend = getResendClient();

    if (!resend) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is not configured yet. Set RESEND_API_KEY in your hosting environment to enable delivery.",
        },
        { status: 500 }
      );
    }

    const sender = process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `New contact message from ${name || "Anonymous"}`,
      html: `
        <h2>New portfolio contact message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Something went wrong. Please try again later.",
      },
      { status: 500 }
    );
  }
}
