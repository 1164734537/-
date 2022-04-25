/* 
* 环境配置封装
*/
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    dev:{
        baseApi:'/api',
        mockApi:'http://127.0.0.1:4523/mock/838930/api/'
    },
    test:{
        baseApi:'//hangbb.cn/api',
        mockApi:'http://127.0.0.1:4523/mock/838930/api/'
    },
    prod:{
        baseApi:'//hangbb.cn/api',
        mockApi:'http://127.0.0.1:4523/mock/838930/api/'
    }
}

export default{
    env,
    mock:false,
    ...EnvConfig[env],
    namespace:"navigation"
}