import { Resend } from "resend";
import nodemailer from "nodemailer";

const useResend = false; // Configure based on preference

export async function sendEmail(
  data,
  emailType = "enquiry",
  extraContent = null
) {
  // console.log(process.env.RESEND_API);
  // console.log(process.env.SendtoEmail);
  // console.log(process.env.fromEmail);

  const templates = {
    enquiry: `
      <h1>Request for Demo Session</h1>
      <p>Hello MY TALENT Admin,</p>
      <p>You have received a new query regarding the Demo Session. Here are the details:</p>
      <p class="user-info">User Name: ${data.name}</p>
      <p class="user-info">User Designation: ${data.designation}</p>
      <p class="user-info">User Phone Number: ${data.phone}</p>
      <p class="user-info">User School Name: ${data.schoolName}</p>
      <p class="user-info">User Email Id: ${data.email}</p>
      <p><strong>Query: ${data.description}</strong></p>
      ${extraContent || ""}
      <p>Best regards,<br>The Course Support Team</p>
    `,
    registrationSuccess: `
      <h1>Registration Update - A new User Registered</h1>
      <p>Hello Admin</p>
      <p>A user has registerd through payment</p>
      <p class="user-info">Parent Id: ${data?.parentId}</p>
      <p class="user-info">User Id: ${data?.userId}</p>
      <p class="user-info">Registration Status: ${data?.status}</p>
     
      // <p>Best regards,<br>The Course Support Team</p>
    `,
    registrationFaliure: `
      <h1>Registration Update - Unable to register user</h1>
      <p>Hello Admin</p>
      <p>A user Tries to registerd through payment but the server is unable to register him view vercel logs to see the full details</p>
      <p class="user-info">Parent: ${data?.parentId}</p>
      <p class="user-info">User: ${data?.userId}</p>
      <p class="user-info">Registration Status: ${data?.status}</p>
      <p class="user-info">Registration Error: ${data?.message}</p>
     
      // <p>Best regards,<br>The Course Support Team</p>
    `,
  };

  const emailHtml = templates[emailType] || "<p>No email template found.</p>";

  if (useResend) {
    const resend = new Resend(process.env.RESEND_API);

    try {
      await resend.emails.send({
        from: process.env.fromEmail,
        to: emailType === "registration" ? data.email : process.env.SendtoEmail,
        subject:
          emailType === "enquiry" ? "MY TALENT Enquiry" : "Registration Update",
        html: emailHtml,
      });

      console.log("Email sent using Resend");
      return {
        status: true,
        message: "Email sent successfully.",
      };
    } catch (error) {
      console.error("Error sending email with Resend:", error);
      return {
        status: false,
        message: "Failed to send email.",
        error: error.message,
      };
    }
  } else {
    try {
      const transporter = nodemailer.createTransport({
        pool: true,
        host: "smtp.resend.com",
        port: 465,
        secure: true,
        auth: {
          user: "resend",
          pass: process.env.RESEND_API,
        },
      });

      await transporter.verify();
      const mailConfig = {
        from: process.env.fromEmail,
        to: emailType === "registration" ? data.email : process.env.SendtoEmail,
        subject:
          emailType === "enquiry" ? "MY TALENT Enquiry" : "Registration Update",
        html: emailHtml,
      };

      await transporter.sendMail(mailConfig);

      console.log("Email sent using Nodemailer");
      return {
        status: true,
        message: "Email sent successfully.",
      };
    } catch (error) {
      console.error("Error sending email with Nodemailer:", error);
      return {
        status: false,
        message: "Failed to send email.",
        error: error.message,
      };
    }
  }
}
