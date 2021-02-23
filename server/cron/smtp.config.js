module.exports = {
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      gmail: {
        service: process.env.SMTP_PROVIDER,
        host: 'smtp.gmail.com',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      },
    SMTP_PROVIDER: process.env.SMTP_PROVIDER,
    SMTP_USER: process.env.SMTP_USER
}