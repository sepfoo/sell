import Vue from 'vue'
import VueRouter from 'vue-router'
import ComSeller from '@/components/Seller'
import ComGoods from '@/components/Goods'
import ComRatings from '@/components/Ratings'

Vue.use(VueRouter)

const routes = [{
  path: '/'
},
{
  path: '/seller',
  component: ComSeller
},
{
  path: '/goods',
  component: ComGoods
},
{
  path: '/ratings',
  component: ComRatings
}
]
const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
})
export default router