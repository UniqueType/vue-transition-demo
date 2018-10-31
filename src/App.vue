<template>
    <div id="app">
        <transition :name='transitionName'>
            <keep-alive>
                <router-view class='child-view'></router-view>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
/* eslint no-undef: "off" */
/* eslint object-shorthand: "off" */
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route';

Vue.use(VueRouter);

const router = new VueRouter({
    base: __dirname,
    routes
});

export default {
    name: 'app',
    router,
    data() {
        return {
            transitionName: ''
        };
    },
    created() {
        // const that = this;
        // const obj = {
        //     transitionName: this.transitionName
        // };
        // Object.defineProperty(obj, 'transitionName', {
        //     value: window.Public.transitionName,
        //     writable: true
        // });
        /* let transitionName = window.Public.transitionName;
        Object.defineProperty(window.Public, 'transitionName', {
            get() {
                // console.log('get---');
                // that.transitionName = window.Public.transitionName;
                return transitionName;
            },
            set(value) {
                // console.log('set---');
                that.transitionName = window.Public.transitionName || 'slide-left';
                console.log(`this.transitionName==${that.transitionName}`);
                transitionName = value;
            }
        }); */
        let indexScrollTop = 0;
        let routeStr = '/home&';
        router.beforeEach((route, redirect, next) => {
            // console.log('router.beforeEach');
            // console.log(redirect.path);
            console.log(routeStr.substr(routeStr.lastIndexOf('/')));
            console.log(routeStr);
            if (routeStr === '') {
                routeStr += `${route.path}&`;
                this.transitionName = 'slide-left';
                // console.log(`前进1==${routeStr}`);
            } else if (routeStr.indexOf(route.path) < 0 || !Public.isBack) {
                routeStr += `${route.path}&`;
                this.transitionName = 'slide-left';
                console.log(`前进2==${routeStr}`);
            } else {
                // console.log(redirect.path);
                // console.log(`返回前==${routeStr}`);
                const s1 = routeStr.lastIndexOf(`${redirect.path}&`);
                routeStr = routeStr.substr(0, s1);
                this.transitionName = 'slide-right';
                if (routeStr === '') {
                    routeStr = '/home&';
                }
                // console.log(`返回后==${routeStr}`);
            }
            if (route.path !== '/') {
                indexScrollTop = document.body.scrollTop;
            }
            Public.isBack = false;
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
        });
    }
};

</script>
<style>
html,
body {
    height: 100%;
    width: 100%;
    background-color: #fff;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
}

#app {
    height: 100%;
}

a {
    color: inherit;

    &:hover {
        text-decoration: none;
    }
}

.page-back {
    display: inline-block;
    position: absolute 12px * * 10px;
    width: 40px;
    height: 40px;
    text-align: center;

    i {
        font-size: 24px;
        line-height: 40px;
    }
}


.child-view {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    transition: all .5s;
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    transform: translate(100%, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    transform: translate(-100%, 0);
}

@import './common/css/common.css';

</style>
