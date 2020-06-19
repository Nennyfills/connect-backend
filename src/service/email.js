import { config as getEnv } from 'dotenv';
import sgMail from '@sendgrid/mail';

getEnv();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const templates = {
  resetPassword: process.env.PASSWORD_RESET_TEMPLATE,
  verifyEmail: process.env.EMAIL_VERIFY_TEMPLATE,
};

const sendGrid = async (user, template, url) => {
  const sendGridMessage = {
    to: user.email,
    from: 'inenyedike@gmail.com',
    templateId: templates[template],
    dynamic_template_data: {
      userName: user.userName,
      url
    }
  };
  sgMail.send(sendGridMessage);
  return {
    status: 'success',
    message: `An email has been sent to ${user.email} with further information`
  };
};


export default sendGrid;
