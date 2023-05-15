module.exports = {
  routes: [
    {
     method: 'POST',
     path: '/seed',
     handler: 'seed.populate',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
