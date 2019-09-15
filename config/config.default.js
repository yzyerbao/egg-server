/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1568454637770_8142';

    // add your middleware config here
    config.middleware = ['errorHandler'];

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };
    config.swaggerdoc = {
        dirScanner: './app/controller',
        apiInfo: {
            title: 'egg-server 接口文档',
            description: '接口文档 swagger-ui for egg',
            version: '1.0.0',
        },
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        enableSecurity: false,
        // enableValidate: true,
        routerMap: true,
        enable: true,
    };
    // config.sequelize = {
    //     dialect:'mysql',
    //     host:'127.0.0.1',
    //     port:3306,
    //     database:''
    // }
    config.mongoose = {
        url: 'mongodb://127.0.0.1:27017/egg_server',
        options: {
            // useMongoClient: true,
            autoReconnect: true,
            reconnectTries: Number.MAX_VALUE,
            bufferMaxEntries: 0,
        },
    };
    config.jwt = {
        secret: 'kan sha kan ?',
        enable: true, // default is false
        match: /^\/api/, // optional
    };
    return {
        ...config,
        ...userConfig,
    };
};
