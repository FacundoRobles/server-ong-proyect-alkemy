module.exports.getTemplateWelcome = (firstName) => {
    const subject = 'Bienvenido a Somos Más';
    const text= `Hola ${firstName} gracias por haberse registrado en nuestra página, esperemos la disfrute. Que tenga un buen día.
      Email: somosfundacionmas@gmail.com - Tel:1160112988 - Instagram: SomosMás - Facebook: Somos_Más`;
    const html= `<h2>Hola ${firstName} gracias por haberse registrado en nuestra página, esperemos la disfrute y tenga un buen día.</h2>
      <strong> Email: somosfundacionmas@gmail.com - Tel:1160112988 - Instagram: SomosMás - Facebook: Somos_Más </strong>`;
    
    return {subject, text, html};
};