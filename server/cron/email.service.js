const nodemailer = require('nodemailer');
const { SMTP_PROVIDER, gmail, smtp, SMTP_USER } = require('./smtp.config');
const emailTemplate = require('./email.templates');


const transport = nodemailer.createTransport(SMTP_PROVIDER ? gmail : smtp);

transport
.verify()
.then(() => console.info('Connected to email server'))
.catch(() => console.warn('Unable to connect to email server. Make sure you have configured the SMTP options in .env'));

/**
 * Send an email
 * @param {string} to
 * @param {string} subject
 * @param {string} text
 * @returns {Promise}
 */
const sendEmail = async (to, subject, text) => {
    const msg = { from: SMTP_USER, to, subject, text };
    try {
      await transport.sendMail(msg);
    } catch (err) {
      return {};
    }
  };

  const successEmail = async (email, goalName, message, date) => {
      try {
    await sendEmail(
      email,
      message,
      emailTemplate.success(goalName, message, date)
    );
      } catch (successError) { console.log({successError}) }
  };


  const failureEmail = async (email, goalName, message, date) => {
      try {
    await sendEmail(
      email,
      message,
      emailTemplate.failure(goalName, message, date)
    );
      } catch (failureError) { console.log({failureError}) }
  };

  module.exports = {
    transport,
    sendEmail,
    successEmail,
    failureEmail
};
  