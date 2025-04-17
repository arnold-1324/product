import emailjs from '@emailjs/browser';

export function sendCustomerQueryMail({ name, email, message }) {
  const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const templateParams = { name, email, message };

  console.log('→ Sending email with params:', templateParams);

  return emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(() => {
      console.log('✅ Mail sent!');
    })
    .catch(err => {
      console.error('❌ Mail error:', err);
    });
}
