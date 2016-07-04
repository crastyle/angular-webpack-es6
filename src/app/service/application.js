/**
 * Created by apple on 16/6/18.
 */

import {angular,ionic} from 'library'
export default function(storedb){
    'ngInject'
    return {
        'imgHost':'http://h5admin.pubar.me/public/images/pic/',
        'headHost':'http://api.pubar.me/Uploads/png/',

        'assets':'http://h5.pubar.me/lib/images/',
        'userId':10005,
        'getMyCity':function(){
            var st = storedb.key('city').find();
            if(st){
                return st[0]['cityName'];
            }else{
                return '广州'
            }
        }
    }
}