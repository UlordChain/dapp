import { Toast } from 'vant'
// 验证1-7位靓号
function validStr(str) {
    return /^[a-z1-5.]{1,7}$/.test(str);
}

// 验证短号
function validSmallAccount(account) {
    return /^[a-z1-5.]{1,11}$/.test(account);
}

// 验证公钥
function validPublicKey(key) {
    return /^UOS[A-Za-z0-9]{48,58}$/.test(key);
}

// 将小数转化成四位百分比
function percentTransform(num) {
    return (num * 100).toFixed(2) + '%';
}

// 校验4位小数
function numValid(num) {
    return num.split(".").length>2
}

// 将eos数量转成4位小数+' UOS';
function uosTransform(num) {
    if (typeof(num) == "string") {
        num = parseFloat(num);
        num = Math.floor(num*10000)/10000 // 往下取4位小数
        return num.toFixed(4) + " UOS";
    } else if (typeof(num) == "number") {
        num = parseFloat(num);
        num = Math.floor(num*10000)/10000 // 往下取4位小数
        return num.toFixed(4) + " UOS"
    } else {
        throw new Error("type error");
    }
}

// 将vue arrayList转成普字符串数组
function transformArray (array) {
    let arr = [];
    if (array instanceof Array) {
        for (let i in array) {
            arr[i] = array[i];
        }
        return arr;
    } else {
        throw new TypeError("only array");
    }
}

// 判断是否为优壹号内嵌H5
function validUlordPlatform() {
    return navigator.userAgent === 'UlordUosiOS' || navigator.userAgent === 'UlordUosAndroid';
}

function arrayToString(array) {
    let arr = "";
    if (array instanceof Array) {
        for (let i in array) {
            arr[i] = array[i];
        }
        return arr;
    } else {
        throw new TypeError("only array");
    }
}

function showToast(content) {
    setTimeout(()=>{
        Toast(content);
    }, 0)
}

const Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        let t = "";
        let n, r, i, s, o, u, a;
        let f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        let t = "";
        let n, r, i;
        let s, o, u, a;
        let f = 0;
        e=e.replace(/[^A-Za-z0-9+/=]/g,"");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        let t = "";
        for (let n = 0; n < e.length; n++) {
            let r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        let t = "";
        let n = 0;
        let r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
};

// 判断是否为优壹号ios或者ios设备
function validIos() {
    var u = navigator.userAgent;
    var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
    var ulordIos = (u === "UlordUosiOS");
    return isIOS || ulordIos;
}

// 判断是否为合法4位小数以内的数字
function validAmount(amount) {
    if (!/^\d+(\.\d+)?$/.test(amount)) return false;
    if (amount.toString().indexOf(".")>0) {
        let remain = amount.toString().split(".")[1];
        if (remain.length > 4) return false;
    }
    return true;
}


export default {
    validStr: validStr,
    validPublicKey: validPublicKey,
    percentTransform: percentTransform,
    uosTransform: uosTransform,
    transformArray: transformArray,
    validSmallAccount: validSmallAccount,
    Base64: Base64,
    validUlordPlatform: validUlordPlatform,
    showToast: showToast,
    validIos: validIos,
    validAmount: validAmount
}
