import tpl from './<%= name %>.jade'
import './<%= name %>.scss'
import { angular, ionic } from 'library'

export default angular.module('<%= name %>',[ionic])
    .config(function ($stateProvider) {
        "ngInject"
        $stateProvider
            .state('<%= name %>', {
                url: '/<%= name %>',
                controllerAs: 'vm',
                controller: <%= upCaseName %>Controller,
                template: tpl()
            })
    });


class <%= upCaseName %>Controller {
    constructor () {
        "ngInject"
        this.name = '<%= name %>'
    }
}