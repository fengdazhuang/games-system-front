/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || 'prod';
const EnvConfig = {
    development: {
        baseApi: 'http://localhost:8001',
        mockApi: 'https://www.fastmock.site/mock/34c961fb7d37955137b2f7e30cabc377/api'
    },
    test: {
        baseApi: '//test.futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
    },
    prod: {
        baseApi: '//futurefe.com/api',
        mockApi: 'https://www.fastmock.site/mock/c1c302e8baed9894c48c17e4738c092e/api'
    }
}

export default {
    namespace: 'hzag',
    env,
    mock: false,
    ...EnvConfig[env]
}