import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import Home from "./views/Home.vue";
import Add from "./views/Add.vue";
import Community from "./views/Community.vue";
import Message from "./views/Message.vue";
import Mine from "./views/Mine.vue";
import GoodDetail from './views/GoodDetail'
import FootBar from './components/FootBar'
import Payment from './views/Payment'
// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        name:'home',
        components: {
            default:Home,
            'foot-bar':FootBar
        }
    },
    {
        path: "/add",
        name:'add',
        component: Add
    },
    {
        path:'/community',
        name:'community',
        components: {
            default:Community,
            'foot-bar':FootBar
        }
    },
    {
        path: "/message",
        name:'message',
        components: {
            default:Message,
            'foot-bar':FootBar
        }
    },
    {
        path: "/mine",
        name:'mine',
        components: {
            default:Mine,
            'foot-bar':FootBar
        }
    },
    {
        path: "/goodDetail/:goodId",
        name:'good-detail',
        components: {
            default:GoodDetail,  
        }
    },
    {
        path:"/payment/:goodId",
        name:'payment',
        components:{
            default:Payment
        }
    }
]

var router =  new VueRouter({
    routes
})
export default router;