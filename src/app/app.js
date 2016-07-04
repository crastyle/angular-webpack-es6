'use strict';
import { angular, ionic } from 'library'
import appComponent from './app.component'
import pagesModule from './pages/app.pages'
import appFilter from './app.filter'
// import appServer from './app.service'
// import appConfig from './app.config'
import appStoreDB from './app.storedb'
angular
    .module('pubarApp', [
        ionic,
        pagesModule.name,
        appComponent.name,
        appFilter.name,
        appServer.name,
        appConfig.name,
        appStoreDB.name,
        'angular-img-cropper'
    ])
    .config(($locationProvider, $urlRouterProvider,$ionicConfigProvider) => {
        "ngInject";
        $ionicConfigProvider.platform.ios.tabs.style('standard');
        $ionicConfigProvider.platform.ios.tabs.position('bottom');
        $ionicConfigProvider.platform.android.tabs.style('standard');
        $ionicConfigProvider.platform.android.tabs.position('standard');
        $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
        $ionicConfigProvider.platform.android.navBar.alignTitle('left');
        $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
        $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');
        $ionicConfigProvider.platform.ios.views.transition('ios');
        $ionicConfigProvider.platform.android.views.transition('android');
        $urlRouterProvider.otherwise('/index');
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .directive('navTipBar',function(){
        return {
            restrict:'E',
            replace:true,
            scope:{
                title:'@title'
            },
            template:'<div class="nav-tip-bar">{{title}}</div>'
        }
    })

    .directive('hideTabs', function($rootScope) {
        'ngInject';
        return {

            restrict: 'A',
            link: function (scope, element, attributes) {
                scope.$watch(attributes.hideTabs, function (value) {
                    $rootScope.hideTabs = value;
                });

                scope.$on('$destroy', function () {
                    $rootScope.hideTabs = false;
                });
            }
        }
    })

