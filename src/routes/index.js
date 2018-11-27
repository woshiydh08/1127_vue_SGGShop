import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/login/login'

export default[
  {path: '/msite', component: MSite, meta:{isShow: true}},
  {path: '/order', component: Order, meta:{isShow: true}},
  {path: '/profile', component: Profile,  meta:{isShow: true}},
  {path: '/search', component: Search,  meta:{isShow: true}},
  {path: '/login', component: Login },
  { path: '/', redirect: '/msite' }
]
