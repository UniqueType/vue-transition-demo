import NavConfig from './nav.config.json'; // 导入 路由数组

/* eslint no-undef: "off" */
console.log('【route.js】');
const registerRoute = (config) => { // 返回包含路由对象
    const route = []; // 路由名称数组
    /* eslint array-callback-return: "off" */
    config.map(nav => // Es6 里的[].map() 映射方法，类似forEach
        nav.list.map((page) => { // 映射每一个路由 page
            const component = page.component ? `/${page.component}` : page.path;
            route.push({
                name: page.name,
                path: page.path,
                component: require(`./pages${component}`),
                meta: {
                    title: page.title || '',
                    eventId: page.eventId || '',
                    description: page.description
                }
            });
        })
    );

    return { route, navs: config };
};

const route = registerRoute(NavConfig); // 将路由映射成对象

route.route.push({
    path: '/',
    redirect: '/home'
});
export const navs = route.navs;
export default route.route;
