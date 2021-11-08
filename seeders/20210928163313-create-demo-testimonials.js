'use strict';

const testimonials = [{
  name: 'Roksolana Zasiadko',
  image: 'https://picsum.photos/id/1027/300/300',
  content: `Me siento feliz de pertencer a esta gran familia que es la fundación , que ya son parte de mi vida.
  La magia que irradian los niños y los integrantes día a día son una caricia al alma. Gracias por dejarme ser parte de esto y por enseñarme que con tan poco se puede hacer algo tan grande!!!`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
},{
  name: 'Doug Robichaud',
  image: 'https://picsum.photos/id/633/300/300',
  content: `El trabajo significó una de las mejores vivencias en los últimos tiempos ya que no sólo me permitió hacer lo que me gusta de alma que es trabajar con chicos, sino que me aportó un gigantesco bagaje de emociones y retribuciones por parte de los chicos y de los padres. Siento que ofrecí mi compañía y mi cariño, lo que me generó una alegría inmensa. Desde que pertenezco a este grupo siento que crecí interiormente. Para mi la Fundación pasó a formar parte de mi mundo. Tengo un gran lugar de pertenencia.`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
},{
  name: 'Alexandra Shustov',
  image: 'https://picsum.photos/id/64/300/300',
  content: `Antes que nada quiero agradecerles por dejarme ser parte de esa maravillosa Fundación y por escuchar mis inquietudes e ideas miércoles tras miércoles. Desde que empecé crecí mucho y puedo ver muchas cosas desde otro punto de vista, más humano y más maduro. Gracias a personas como ustedes y al resto de las voluntarias, gracias por todo el apoyo y la dedicación, las penas se comparten y las alegrías se festejan el doble.`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
},{
  name: 'Maria Reyes',
  image: 'https://picsum.photos/id/978/300/300',
  content: `En la Fundación aprendí cosas pequeñas que tiene la vida y que antes no valoraba. Es mi deseo seguir formando parte de la Fundación por siempre y que todos sientan la alegría que yo siento los días que estoy acá. Las supervisiones me enseñan muchísimo y me ayudan a mejorar en mi trabajo. El grupo de voluntarios es un gran apoyo, además tengo con quien charlar y compartir experiencias. Para mi la Fundación es vida, alegría que me llena el alma.`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
},{
  name: 'Léa Dubedout',
  image: 'https://picsum.photos/id/996/300/300',
  content: `El trabajo resignificó mi vida, no la concibo sin el voluntariado que da sentido al resto de mis días. Siento que ofrecí mi tiempo al estar presente en Casa Cuna. Aprendí a ser más humilde, menos omnipotente y a reír cuando hay que reír. Para mi la Fundación es parte indisoluble de mi vida y de mi futuro`,
  createdAt: new Date,
  updatedAt: new Date,
  deletedAt: null
}]

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Testimonials', testimonials, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Testimonials', null, {});
  }
};
