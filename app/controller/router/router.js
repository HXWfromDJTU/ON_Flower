
module.exports = app => {

  return class RouterController extends app.Controller {

    async index() {
      const { ctx } = this;
      await ctx.render('community/community.js', { message: 'vue server side render!' });
    }

  };
};