'use strict';
const Controller = require('egg').Controller;
class AboutController extends Controller {
  async index() {
    await this.ctx.render('me/me.js', { message: 'vue server side render!' });
  }
}

module.exports = AboutController;