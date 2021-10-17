'use strict';
const sgMail = require('@sendgrid/mail');
const { getTemplateWelcome } = require('../helpers/mailingTemplates');

const { SENDGRID_API_KEY, SENDGRID_SENDER, NODE_ENV } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY)

let msg = {
  from: {
      name:'Somos Más',
      email:SENDGRID_SENDER,
  },
  mail_settings:{
      sandbox_mode:{
          enable: NODE_ENV !== 'production' ? true : false
      }
  }
};

module.exports.getTemplate = async (email, firstName, type) =>{
    switch (type) {
      case 'welcome':
        msg = {to: email, ...msg, ...getTemplateWelcome(firstName)};
        return sendMail(msg);
    
      default:
        return msg;
    }
  };

const sendMail = async function(msg) {
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

