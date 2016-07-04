/**
 * Created by wj on 2016/6/7.
 * happy everyday!
 */
'use strict'
import {angular, ionic} from "library"
import token from './service/token'


export default angular.module('app.config', [ionic])
    .config(function ($httpProvider) {
        'ngInject'
        /**
         * 拦截器配置
         */
        $httpProvider.interceptors.push(function ($q) {
            'ngInject'
            function executeLogin(res) {
                let url = res.config.url;
                if (url.indexOf('login') === -1) return;
                let userId = res.data.info.id;
                let loginToken = res.data.info.token;
                token.loginAfter(userId, loginToken)
            }

            function executeToken(req) {
                const module = req.url.split('/')[2];
                return Object.assign(req.params, token.getToken(module))
            }

            return {
                // optional method
                'request': function (config) {
                    executeToken(config);
                    return config;
                },

                // optional method
                'requestError': function (rejection) {
                    // do something on error
                    return $q.reject(rejection);
                },


                // optional method
                'response': function (response) {
                    // 如果是登陆接口，处理好token service 的userId和loginToken
                    // if(apiName === 'login' && res && res.info && res.info.id){
                    //     this.token.loginAfter(res.info.id,res.info.token)
                    // }
                    //
                    try {//将userid和logintoken保存进tokenService
                        executeLogin(response)
                    } catch (e) {//如果服务参数错误，将reject这个请求
                        console.log(e);
                        return $q.reject(e)
                    }
                    return response;
                },

                // optional method
                'responseError': function (rejection) {
                    // do something on error
                    return $q.reject(rejection);
                }
            }
        })
    })
    .constant('global', {
        version: Date.now()
    })
    .run(function (global, $ionicLoading) {
        'ngInject'
        global.loading = $ionicLoading
    })
    .config(function ($httpProvider, global) {
        'ngInject'
        let count = 0
        let loading = false
        // global loading start
        $httpProvider.defaults.transformRequest.push(function (data) {
            count += 1
            if (!loading) {
                window.setTimeout(function () {
                    if (!loading && count > 0) {
                        loading = true
                        global.loading.show({
                            template: '<ion-spinner></ion-spinner>'
                        })
                    }
                }, 500) // if no response in 1000ms, begin loading
            }
            return data;
        });
        // global loading end
        $httpProvider.defaults.transformResponse.push(function (data) {
            count -= 1;
            if (loading && count === 0) {
                global.loading.hide()
            }
            return data;
        });

    })