// Business standard stunning HTML email template for query form
function getBusinessEmailTemplate({ name, email, message }) {
  return `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; background: #f4f8f6; padding: 40px;">
      <table style="max-width: 600px; margin: auto; background: #fff; border-radius: 18px; box-shadow: 0 4px 24px rgba(46,139,87,0.10); overflow: hidden;">
        <tr>
          <td style="background: linear-gradient(90deg, #e0f7fa 0%, #e8f5e9 100%); padding: 32px 0; text-align: center;">
            <h1 style="margin: 0; color: #2e8b57; font-size: 2rem; letter-spacing: 1px;">New Customer Query</h1>
          </td>
        </tr>
        <tr>
          <td style="padding: 32px;">
            <p style="font-size: 1.1rem; color: #333; margin-bottom: 24px;">You have received a new query from your website:</p>
            <table style="width: 100%; font-size: 1rem; color: #2e8b57;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
                <td style="padding: 8px 0; color: #222;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0; color: #222;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 8px 0; color: #222; white-space: pre-line;">${message}</td>
              </tr>
            </table>
            <div style="margin-top: 32px; text-align: center;">
              <a href="mailto:${email}" style="display: inline-block; background: #2e8b57; color: #fff; padding: 12px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; letter-spacing: 1px;">Reply to Customer</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background: #e8f5e9; color: #2e8b57; text-align: center; padding: 18px; font-size: 0.95rem; border-top: 1px solid #d0e6db;">
            &copy; 2025 Vino Herballife. All rights reserved.
          </td>
        </tr>
      </table>
    </div>
  `;
}

module.exports = { getBusinessEmailTemplate };
