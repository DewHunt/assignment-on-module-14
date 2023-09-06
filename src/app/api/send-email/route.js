import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request, response) {
  const requestData = await request.json();
  const toEmail = requestData["email"];
  const mailSubject = requestData["mailSubject"];
  const mailText = requestData["mailText"];

  let transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: { user: "info@teamrabbil.com", pass: "~sR4[bhaC[Qs" },
    tls: { rejectUnauthorized: false },
  });

  let mailOptions = {
    from: "Test Email Verification From NEXT.js Application <info@teamrabbil.com>",
    to: toEmail,
    subject: mailSubject,
    text: mailText,
  };

  try {
    let result = await transporter.sendMail(mailOptions);
    return NextResponse.json({
      status: true,
      message: "Email send Successful",
      result: result,
    });
  } catch (error) {
    return NextResponse.json({
      status: false,
      message: "Email send Unsuccessful",
    });
  }
}
