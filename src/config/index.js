/**
 * 环境配置封装
 */
const env = import.meta.env.MODE || "prod";
const EnvConfig = {
  development: {
    //开发环境
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/29a83cfd56681806766cdc65b1b5df47/api",
  },
  test: {
    //测试环境
    baseApi: "/",
    mockApi:
      "https://www.fastmock.site/mock/29a83cfd56681806766cdc65b1b5df47/api",
  },
  prod: {
    //线上环境
    baseApi: "/",
    mockApi: "",
  },
};
export default {
  env,
  mock: true,
  namespace:'manager',
  ...EnvConfig[env],
};
