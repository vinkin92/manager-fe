/**
 * Vuex 状态管理
 */
import {createStore} from 'vuex'
import mutation from './mutations'
import storage from './../utils/storage'
const state = {
    userInfo:""||storage.getItem("userInfo") // 获取用户信息
}
export default createStore({
    state,
    mutation
});