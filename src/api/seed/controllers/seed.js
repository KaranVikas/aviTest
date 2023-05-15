'use strict';

const axios = require('axios')

/**
 * A set of functions called "actions" for `seed`
 */

module.exports = {
  populate: async (ctx, next) => {
    try {
      let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: 'https://api.escuelajs.co/api/v1/products',
        headers: { }
      };
      
      const data = await axios.request(config)
      
      ctx.body = data.data
      
    } catch (err) {
      ctx.send("error")
      ctx.body = err;
    }
  }
};
