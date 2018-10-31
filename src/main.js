// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint no-unused-vars: "off" */
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import { Toast, Swipe, SwipeItem } from 'mint-ui';
import app from './App';
import routes from './route';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
    base: __dirname,
    routes
});
/* eslint indent: "off" */
/* eslint new-cap: "off" */
/* eslint no-undef: "off" */
Vue.http.interceptors.push((params, next) => { // 请求拦截器
    console.log(params);
    console.log(next);
});
window.Public = {
    isBack: false,
    onBack: null,
    transitionName: ''
};
window.addEventListener('popstate', (e) => {
    Public.isBack = true;
    console.log(e);
}, false);
const vm = new Vue({ // eslint-disable-line
    el: '#app',
    render: h => h(app),
    showLoading: false,
    router,
    store,
    methods: {},
    created() {
        const that = this;
        /* eslint no-undef: "off" */
        window.backButtonEvent = () => {
            if (Public.onBack) {
                Public.onBack();
            } else {
                this.$router.back();
            }
        };
        /* let indexScrollTop = 0;
        let routeStr = '/home&';
        router.beforeEach((route, redirect, next) => {
            // console.log('router.beforeEach');
            // console.log(route.path);
            if (routeStr === '') {
                routeStr += `${route.path}&`;
                Public.transitionName = 'slide-left';
                console.log(`前进1==${routeStr}`);
            } else if (routeStr.indexOf(route.path) < 0) {
                routeStr += `${route.path}&`;
                Public.transitionName = 'slide-left';
                console.log(`前进2==${routeStr}`);
            } else {
                // console.log(redirect.path);
                console.log(`返回前==${routeStr}`);
                const s1 = routeStr.lastIndexOf(`${redirect.path}&`);
                routeStr = routeStr.substr(0, s1);
                Public.transitionName = 'slide-right';
                if (routeStr === '') {
                    routeStr = '/home&';
                }
                console.log(`返回后==${routeStr}`);
            }
            console.log(`main.js---Public.transitionName==${Public.transitionName}`);
            if (route.path !== '/') {
                indexScrollTop = document.body.scrollTop;
            }
            Public.onBack = null;
            next();
        });

        router.afterEach((route) => {
            // console.log('router.afterEach');
            if (route.path !== '/') {
                document.body.scrollTop = 0;
            } else {
                Vue.nextTick(() => {
                    document.body.scrollTop = indexScrollTop;
                });
            }
        }); */
    }
});
