/**
 * Created by wj on 2016/6/7.
 * happy everyday!
 */
'use strict'
// 建议接口添加顺序严格按照rap的顺序来
/**
 * 资源池 管理所有的接口
 * @param resource
 * @returns {{addBarFriend: *, getBarInfo: *, getBarList: *, getBarFriendList: *, getCities: *, getDrinkInfo: *, getDrinkList: *, getDrinkCate: *, getSmsCode: *, register: *, login: *, postOrder: *, getOrderList: *, getOrderPayList: *, getOrderDetail: *, getPartyUserInfo: *, getPartyInfo: *, getPartyList: *}}
 */
export default function(resource){
    'ngInject'
    return {
        // bar
        'addBarFriend':resource.bar('barfriend_add'),
        'getBarInfo':resource.bar('bar_info'),
        'getBarList':resource.bar('bar_list'),
        'getBarFriendList':resource.bar('barfriend_list'),
        'getBarFollow':resource.bar('bar_follow'),
        'cancelBarFollow':resource.bar('up_bar_follow'),
        'addBarFollow':resource.bar('add_bar_follow'),
        // city
        'getCities':resource.city('get_city'),
        // drink
        'getDrinkInfo':resource.drink('drink_info'),
        'getDrinkList':resource.drink('drink_list'),
        'getDrinkCate':resource.drink('drink_cate'),
        // meb
        'getSmsCode':resource.Meb('regsms'),
        'register':resource.Meb('reg'),
        'login':resource.Meb('login'),
        // order
        'postOrder':resource.order('order_sub'),
        'getOrderList':resource.order('order_list'),
        'getOrderPayList':resource.order('order_paylist'),
        'getOrderDetail':resource.order('order_info'),
        // party
        'getPartyUser':resource.party('get_party_user'),
        'getPartyInfo':resource.party('get_party_info'),
        'getPartyList':resource.party('party_list'),
        'createParty':resource.party('create_party'),
        //weixin

        //friend
        'rejectFriend':resource.friend('un_friend'),
        'friendFollow':resource.friend('friend_follow'),
        'addFriend':resource.friend('add_friendreg'),
        'getFriendList':resource.friend('get_friends'),
        'getFriendReg':resource.friend('get_friendreg_list'),
        'getBlackFriend':resource.friend('black_friend'),
        'receiveFreind':resource.friend('add_friend'),

        //user
        'getUserInfo':resource.user('user_info'),
        'userEdit':resource.user('user_edit'),
        'uploadHeadIcon':resource.user('upload_headIcon'),
        //msg
        'getMsgList':resource.msg('msg_list'),

        //wallet
        'getWalletInfo':resource.wallet('wellet_info'),
        'getWalletList':resource.wallet('wellet_list')


    }
}