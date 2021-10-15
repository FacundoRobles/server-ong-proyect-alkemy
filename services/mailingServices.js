'use strict';
const { SENDGRID_API_KEY, SENDGRID_SENDER, NODE_ENV } = process.env;

const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(SENDGRID_API_KEY)

module.exports.welcomeMail = async (email, firstName) =>{
    let msg = {
      to: email,
      from: {
          name:'Somos Más',
          email:SENDGRID_SENDER,
      },
      subject: 'Bienvenido a Somos Más',
      text: `
      Hola ${firstName} gracias por haberse registrado en nuestra página, esperemos la disfrute. Que tenga un buen día.
      Email: somosfundacionmas@gmail.com - Tel:1160112988 - Instagram: SomosMás - Facebook: Somos_Más`,
      html: `
      <h2>Hola ${firstName} gracias por haberse registrado en nuestra página, esperemos la disfrute y tenga un buen día.</h2>
      <strong> Email: somosfundacionmas@gmail.com - Tel:1160112988 - Instagram: SomosMás - Facebook: Somos_Más </strong>`,
      mail_settings:{
          sandbox_mode:{
              enable:true
          }
      }
    }

    if(NODE_ENV === 'production'){
        msg.mail_settings.sandbox_mode.enable = false
    }
    return await sgMail
      .send(msg)
      .then((data) => ({
        success:true,
        data
      }))
      .catch((error) => {
        throw Error({success: false, data: error})
      })
};

