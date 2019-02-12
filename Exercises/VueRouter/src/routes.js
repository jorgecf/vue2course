import Home from './components/Home.vue'
import User from './components/user/User.vue'
import Start from './components/user/UserStart.vue'
import Detail from './components/user/UserDetail.vue'
import Edit from './components/user/UserEdit.vue'

// es6 export
export const routes = [ // order marks the priority
    // mypage.com/
    { path: '', component: Home }, 

    // mypage.com/user/someid with child routes
    { path: '/user', component: User, children: [
        { path: '', component: Start}, // user
        { path: ':id', component: Detail }, // user/id
        { path: ':id/edit', component: Edit, name: 'edit' } // user/id/edit
    ] },
    
    // redirection
    { path: '/redirect-me', redirect: 'user'},
    
    // other
    { path: '*', redirect: '/' }
];