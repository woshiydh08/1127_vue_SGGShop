import {
  RECEIVE_SHOPS,
  RECEIVE_CATEGORYS,
  RECEIVE_ADDRESS,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_INFO,
  RECEIVE_RATINGS,
  RECEIVE_GOODS,
} from './mutations-type'

import {
  reqShops,
  reqFoodCategorys,
  reqAddress,
  reqUser,
  reqLogout,
  reqGoods,
  reqRatings,
  reqInfo
} from '../api'

export default {

  // 获取商家列表
  async getShops({commit,state}){
    const {longitude, latitude} = state;
    const result = await reqShops(longitude, latitude)
    if(result.code === 0){
      const shops = result.data;
      commit(RECEIVE_SHOPS, {shops})
    }
  },
  // 获取食品分类列表
  async getCategorys({commit}){
    const result = await reqFoodCategorys();
    if(result.code === 0){
      const categorys = result.data;
      commit(RECEIVE_CATEGORYS, {categorys})
    }
  },

  // 获取信息地址
  async getAddress({commit,state}){
    const {longitude, latitude} = state;
    const result = await reqAddress(longitude, latitude);
    if(result.code === 0){
      const address = result.data;
      commit(RECEIVE_ADDRESS, {address})
    }
  },

  //保存用户登录信息
  saveUser({commit},user){
    commit(RECEIVE_USER,{user})
  },
  async getUser({commit}){
    const result = await reqUser()
    if(result.code === 0){
      const user = result.data
      commit(RECEIVE_USER,{user})
    }
  },
  async logout({commit}){
    const result = await reqLogout()
    if(result.code ===0){
      commit(RESET_USER)
    }
  },
  async getShopInfo({commit}){
    const result =  await reqInfo()
    if(result.code === 0){
      const info = result.data;
      info.score = 3.5;
      commit(RECEIVE_INFO,{info})
    }
  },
  // 异步获取商家评价列表
  async getShopRatings({commit}) {
    const result = await reqRatings()
    if(result.code===0) {
      const ratings = result.data
      commit(RECEIVE_RATINGS, {ratings})
    }
  },

// 异步获取商家商品列表
  async getShopGoods({commit}) {
    const result = await reqGoods()
    if(result.code===0) {
      const goods = result.data
      commit(RECEIVE_GOODS, {goods})
    }
  },

}
