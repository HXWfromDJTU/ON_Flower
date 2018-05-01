
module.exports = app => {

  return class TestController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('shop/shop.js', { title: 'error test', message: 'vue server side render!' });
    }

  };
};