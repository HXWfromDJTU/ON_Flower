import VueRouter from 'vue-router';
import subcribe from '../../../page/community/subscribe';
import recommend from '../../../page/community/recommend';
const routes = [{
    path: '/',
    component: recommend
}, {
    path: '/community/subcribe',
    component: subcribe,
}, {
    path: '/community/recommend',
    component: recommend
}];
export default new VueRouter({
    routes
});