
module.exports = app => {
  app.get('/', app.controller.home.home.index);
  //默认跳转
  app.get('/index', app.controller.index.index.index);
  //首页跳转
  app.get('/home', app.controller.home.home.index);

  //社区板块的跳转
  app.get('/community', app.controller.community.community.index);
  //商店板块跳转
  app.get('/shop', app.controller.shop.shop.index);
  //个人信息板块跳转
  app.get('/me', app.controller.me.me.index);

};
