// Base modules
import Home from './components/Home.vue'
import Header from './components/Header.vue'

// import User from './components/user/User.vue'
// import Start from './components/user/UserStart.vue'
// import Detail from './components/user/UserDetail.vue'
// import Edit from './components/user/UserEdit.vue'
const User = resolve => {
    require.ensure( ['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    })
};

// es6 export
export const routes = [ // order marks the priority
    // mypage.com/
    {
        path: '', name: 'home', components: {
            default: Home,
            'header-top': Header // put header in the router-view named after that
        }
    },

    // mypage.com/user/someid with child routes
    {
        path: '/user', components: {
            default: User,
            'header-top': Header
        }, children: [
            { path: '', component: Start }, // user
            { path: ':id', component: Detail, beforeEnter: (to, from, next) => { console.log("before detail"); next(); } }, // user/id
            { path: ':id/edit', component: Edit, name: 'edit' } // user/id/edit
        ]
    },

    // redirection
    { path: '/redirect-me', redirect: 'user' },

    // other
    { path: '*', redirect: '/' }
];