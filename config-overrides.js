/*
 * @Author: your name
 * @Date: 2021-03-10 20:25:45
 * @LastEditTime: 2021-03-11 17:21:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /qiankun-study/app/config-overrides.js
 */
module.exports = {
  webpack: function (config, env) {
    config.output.library = "reactApp";
    config.output.libraryTarget = "umd";
    return config;
  },
  devServer: function (configFunction) {
    // Return the replacement function for create-react-app to use to generate the Webpack
    // Development Server config. "configFunction" is the function that would normally have
    // been used to generate the Webpack Development server config - you can use it to create
    // a starting configuration to then modify instead of having to create a config from scratch.
    return function (proxy, allowedHost) {
      // Create the default config by calling configFunction with the proxy/allowedHost parameters
      const config = configFunction(proxy, allowedHost);
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};
