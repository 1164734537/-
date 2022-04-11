/* 
 * Vuex 状态管理
*/
import { createStore } from 'vuex'
import mutations from './mutations'
import storage from '../utils/storage'

const state = {
    menuName: ""
}

export default createStore({
    state,
    mutations
})