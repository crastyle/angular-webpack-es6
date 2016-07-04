/**
 * Created by wj on 2016/6/6.
 * happy everyday!
 */
'use strict'

import { angular,ionic } from "library"
import resource from './service/resource'
import resourcePool from  './service/resourcePool'
import app from './service/application'

export default angular.module('app.service',['ionic'])
    .service('resource',resource)
    .factory('resourcePool',resourcePool)
    .factory('application',app)