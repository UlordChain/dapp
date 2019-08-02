// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Meta from 'vue-meta'
import FastClick from 'fastclick'
import moment from 'moment'

import Button from 'vant/lib/button';
import 'vant/lib/button/style/less';

import Toast from 'vant/lib/toast';
import 'vant/lib/toast/style/less'

import Tab from 'vant/lib/tab';
import 'vant/lib/tab/style/less'

import Tabs from 'vant/lib/tabs';
import 'vant/lib/tabs/style/less'

import Checkbox from 'vant/lib/checkbox'
import 'vant/lib/checkbox/style/less'

import CheckboxGroup from 'vant/lib/checkbox-group'
import 'vant/lib/checkbox-group/style/less'

import PullRefresh from 'vant/lib/pull-refresh'
import 'vant/lib/pull-refresh/style/less'

import Dialog from 'vant/lib/dialog'
import 'vant/lib/dialog/style/less'

import Popup from 'vant/lib/popup'
import 'vant/lib/popup/style/less'

import Notify from "vant/lib/notify"
import 'vant/lib/notify/style/less'

import UosUtils from './uos/uos'
import PhoneUosUtils from './uos/uos-pe'

require("@/uos/index.js");

Vue.use(Tab).use(Tabs);
Vue.use(Checkbox).use(CheckboxGroup);
Vue.use(PullRefresh);
Vue.use(Dialog);
Vue.use(Popup);
Vue.use(Notify);

import './assets/style/main.less'
import Config from './assets/js/config'
import Utils from './assets/js/utils'
import axios from 'axios'

Vue.use(Button);
Vue.use(Toast);

Vue.use(Meta);
Vue.config.productionTip = false;
Vue.prototype.$Moment = moment;
Vue.prototype.$Config = Config;
Vue.prototype.$Utils = Utils;
Vue.prototype.$Axios = axios;
// Vue.prototype.$UOS = uosUtils;
FastClick.attach(document.body);

// 货币单位
Vue.prototype.$COIN_UNIT = 'UOS';
Vue.filter('formatTime', function (val) {
    return moment(val).format('YYYY-MM-DD HH:mm:ss')
});

Vue.filter('formatStrTime', function (str) {
    if (Utils.validIos()) {
        // ios设备将-替换成/
        str = str.replace(/-/g,"/");
    }
    var time = new Date(str).getTime();
    return moment(time).format('YYYY-MM-DD HH:mm:ss')
});

Vue.filter('formatChainTime', function (val) {
    return moment(parseInt(val)/1000).format('YYYY-MM-DD HH:mm:ss')
});
// 求取倒计时时间
Vue.filter('formatRemainTime', function (timestamp) {
    let now = new Date();
    let time = new Date(timestamp + 24 * 60 * 60 * 1000);
    let remainTime = time.getTime() - now.getTime();
    if (remainTime < 0) return '竞拍成功';
    // 求取小时
    let hour = parseInt(remainTime /1000 / 60 / 60 % 24);
    if (hour < 10) hour = '0' + hour;
    // 求分钟
    let min = parseInt(remainTime / 1000 / 60 % 60);
    if (min < 10) min = '0' + min;
    // 求秒钟
    let sec = parseInt(remainTime / 1000 % 60);
    if (sec < 10) sec = '0' + sec;
    return hour + ":" + min + ":" + sec;
});

//uos对象
Vue.prototype.$UOS = null;


// 手机端
document.addEventListener('ulordLoaded', async(Extension) => {
    // 优壹号钱包初始化成功
    usmart = window.usmart;
    let uosUtils = new PhoneUosUtils();
    window.uosItem = {};
    Vue.prototype.$UOS = uosUtils;
    Object.defineProperty(window.uosItem, "$UOS",{
        get: function (){},
        set: function (value){
            if (window.setUOSItem) {
                window.setUOSItem(value);
            }
        },
        configurable: true,
        enumerable: true
    });
    window.uosItem.$UOS = uosUtils;
    await uosUtils.getAccount();
    if(usmart == null){
        this.$toast("请先配置优壹号UOS钱包!");
        return false;
    }
});

// 初始化eos-ecc
window.ecc.initialize();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


