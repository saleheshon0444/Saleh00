export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app:{
    head:{
      title:'Nuxt Dojo',
      link:[
        {rel:'stylesheet',href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
      ]
    }
  }
});


