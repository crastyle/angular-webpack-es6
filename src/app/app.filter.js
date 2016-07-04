/**
 * Created by wj on 2016/5/28.
 */
import { angular, ionic } from "library"
import img from './filter/img.filter'

export default angular.module('app.filter', [ionic])
    .filter('img',img)