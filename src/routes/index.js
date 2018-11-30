import MSite from '../pages/MSite/MSite'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/login/login'
import Shop from '../pages/Shop/Shop'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../pages/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings'

export default[
  {path: '/msite', component: MSite, meta:{isShow: true}},
  {path: '/order', component: Order, meta:{isShow: true}},
  {path: '/profile', component: Profile,  meta:{isShow: true}},
  {path: '/search', component: Search,  meta:{isShow: true}},
  {path: '/shop', component: Shop,
    children: [
      {
        path:'/shop/goods',
        component: ShopGoods
      },
      {
        path:'/shop/info',
        component: ShopInfo
      },
      {
        path:'/shop/ratings',
        component: ShopRatings
      },
    ]
  },
  {path: '/login', component: Login },
  { path: '/', redirect: '/profile' }
]
