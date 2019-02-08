import Home from './components/Home.vue'
import User from './components/user/User.vue'

// es6 export
export const routes = [
    { path: '', component: Home }, // mypage.com/
    { path: '/user', component: User } // mypage.com/user
];