import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, organisation, email, message } = body;

    await resend.emails.send({
      from: "FuelControl <contact@fuelcontrol.app>",
      to: ["contact@fuelcontrol.app"],
      subject: "Nouvelle demande FuelControl",
      html: `
        <div style="font-family: Arial; padding: 20px;">
          <h2>Nouvelle demande reçue</h2>

          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Organisation :</strong> ${organisation}</p>
          <p><strong>Email :</strong> ${email}</p>

          <p><strong>Message :</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return Response.json({
      success: true,
    });

  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}