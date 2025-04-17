
// Securely send mail using RapidAPI, credentials from .env, and a stunning HTML template
export async function sendRapidMail({ name, email, message }) {
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
  const apiHost = import.meta.env.VITE_RAPIDAPI_HOST;
  const sendTo = import.meta.env.VITE_RAPIDAPI_SENDTO;
  const replyTo = import.meta.env.VITE_RAPIDAPI_REPLYTO;


  const htmlBody = `
    <div style="background:linear-gradient(135deg,#e0f7fa,#e8f5e9);padding:40px 0;font-family:'Segoe UI',Arial,sans-serif;">
      <table style="max-width:520px;margin:auto;background:#fff;border-radius:18px;box-shadow:0 4px 24px rgba(46,139,87,0.10);overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(90deg,#2e8b57 0%,#a8e063 100%);padding:32px 0;text-align:center;">
            <img src='cid:logo' alt='Vino Herballife' style='width:60px;height:60px;border-radius:50%;box-shadow:0 2px 8px #2e8b5740;margin-bottom:10px;'/>
            <h1 style="margin:0;color:#fff;font-size:2rem;letter-spacing:1px;">New Customer Query</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <p style="font-size:1.1rem;color:#333;margin-bottom:24px;">You have received a new query from your website:</p>
            <div style="background:#f4f8f6;border-radius:10px;padding:18px 24px;margin-bottom:24px;">
              <p style="margin:0 0 8px 0;"><b style='color:#2e8b57'>Name:</b> <span style='color:#222'>${name}</span></p>
              <p style="margin:0 0 8px 0;"><b style='color:#2e8b57'>Email:</b> <span style='color:#222'>${email}</span></p>
              <p style="margin:0;"><b style='color:#2e8b57'>Message:</b><br/><span style='color:#222;white-space:pre-line;'>${message}</span></p>
            </div>
            <div style="text-align:center;margin-top:24px;">
              <a href="mailto:${email}" style="display:inline-block;background:#2e8b57;color:#fff;padding:12px 32px;border-radius:8px;text-decoration:none;font-weight:bold;letter-spacing:1px;box-shadow:0 2px 8px #2e8b5740;">Reply to Customer</a>
            </div>
          </td>
        </tr>
        <tr>
          <td style="background:#e8f5e9;color:#2e8b57;text-align:center;padding:18px;font-size:0.95rem;border-top:1px solid #d0e6db;">
            &copy; 2025 Vino Herballife. All rights reserved.
          </td>
        </tr>
      </table>
    </div>
  `;

  const data = JSON.stringify({
    sendto: sendTo,
    name: name,
    replyTo: replyTo,
    ishtml: 'true',
    title: 'Customer Query from Vino Herballife',
    body: htmlBody,
  });

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        if (this.status >= 200 && this.status < 300) {
          resolve(this.responseText);
        } else {
          reject(this.responseText);
        }
      }
    });
    xhr.open('POST', 'https://mail-sender-api1.p.rapidapi.com/');
    xhr.setRequestHeader('x-rapidapi-key', apiKey);
    xhr.setRequestHeader('x-rapidapi-host', apiHost);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(data);
  });
}
