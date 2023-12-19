import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import { data as dynamicRoutes } from './router.json'
import toTree, { list } from '../utils'

// import { data as dynamicRoutes_qiantao } from './a.json'
// console.log(dynamicRoutes);
// createRouter创建一个适配Vue.use的router实例，
// createWebHashHistory()表示hash模式
// createWebHistory()表示历史模式
const routes = [{
        path: '/',
        name: 'home1',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/home',
        name: 'home',
        // 组件的语法糖
        component: () =>
            import ('../views/home.vue')
    },
    {
        path: '/pinia',
        name: 'pinia',
        component: () =>
            import ('../views/pinia.vue')
    },
    {
        path: '/drawer',
        name: 'drawer',
        component: () =>
            import ('../views/drawer.vue')
    },
    {
        // 动态路由传参，必须精准匹配，必须写全
        // 动态路由(params)参数，传name和id
        // 两种方式 ：①path ② name+params 
        path: '/mine/:name/:id',
        name: 'mine',
        component: () =>
            import ('../views/mine.vue')
    },
    {
        path: '/menu',
        name: 'menu',
        component: () =>
            import ('../views/menu.vue')
    },
    {
        path: '/tree',
        name: 'tree',
        component: () =>
            import ('../views/tree.vue')
    },
    {
        // button
        path: '/button',
        name: 'button',
        component: () =>
            import ('../views/button.vue')
    },
    {
        // card
        path: '/card',
        name: 'card',
        component: () =>
            import ('../views/card.vue')
    },
    {
        // checkbox
        path: '/checkbox',
        name: 'checkbox',
        component: () =>
            import ('../views/checkbox&checkbox-group.vue.vue')
    },
]

// 在传递params参数的时候 一定要在路径上配置动态路由
// router.push(/path/参数1/参数2)
// router.push({path:'/path/参数1/参数2'})
// router.push({name:路由名称，pramse:{参数1，参数2}})

// query传参
// router.push({path: '/mine', query: {name: '张三', id: 100}})
// router.push({name: 'mine', query: {name: '张三', id: 100}})
// router.push('/home/?id=123')

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

toTree(list).forEach((route) => router.addRoute(route));
console.log(toTree(list));
// dynamicRoutes.data[0].component => "/a.vue"
// dynamicRoutes.data[0].component = () =>
//     import ("../views" + dynamicRoutes.data[0].component);
// router.addRoute(dynamicRoutes.data[0])
// const componentPath = "a.vue";
// const dynamicRoutes = [{
//         path: '/a',
//         name: 'a',
//         component: "a.vue"
//     },
//     {
//         path: '/b',
//         name: 'b',
//         component: "b.vue"
//     }
// ];
// dynamicRoutes.map((route) => {
//         const path = route.component;
//         // import语法中拼接的变量一定只是一个单纯的变量 就是一个字符串 而不需要进行额外的数据处理（属性取值）
//         // 错误演示
//         // × ()=> import (`../views/${route.component}`);
//         // 正确演示
//         // √ const path = route.component;
//         // √ () => import (`../views/${path}`);
//         route.component = () =>
//             import (`../views/${path}`);
//         return route;
//     })
//     .forEach((route) => router.addRoute(route));

// 用递归完成
// const path1;
// dynamicRoutes_qiantao


// const dynamicRoutes_qiantao = routes => {
//     routes.map((route1) => {
//         const path1 = route1.component;
//         route1.component = () =>
//             import (`../views/${path1}`);
//         if (route1.children) {
//             dynamicRoutes_qiantao(route1.children)
//         }
//         return route1;
//     }).
//     forEach((route) => router.addRoute(route));
// }



// 动态添加路由
// router.addRoute({
//     path: '/a',
//     name: 'a',
//     // 在使用模糊导入模块时 import的参数路径不能知识 一个变量 而是要把路径的前面一部分拆分出来，通过字符串拼接的方式表达
//     // 例如：× () => import(componentPath)
//     // √ () => import (`../views/${componentPath}`)
//     // 动态导入文件
//     component: () =>
//         import (`../views/${componentPath}`)
// })

window.router = router
    //导出的路由实例 
export default router