import Config from '../assets/js/config'
import axios from 'axios'

/*
* PC端UOS Usmart调用工具类
* */
class UosUtils {
    constructor () {
        this.blockchain = "uos";
        this.host = Config.UOS.RPC_HOST;
        this.port = Config.UOS.RPC_PORT;
        this.protocol = Config.UOS.RPC_PROTO;
        this.chainId = Config.UOS.CHAINID;
        this.HTTPRPC = Config.UOS.RPC_PROTO + "://" +  Config.UOS.RPC_HOST + ":" + Config.UOS.RPC_PORT;
        this.net = this.get_new_work();
    }

    // 获取配置的RPC网络接口
    get_new_work() {
        return {
            blockchain: this.blockchain,
            host: this.host,
            port: this.port,
            protocol: this.protocol,
            chainId: this.chainId
        }
    }

    // 获取查询选项
    get_query_options(){
        return {
            httpEndpoint   : this.HTTPRPC,
            expireInSeconds: 60,
            broadcast      : true,
            debug          : false,
            sign           : false
        }
    }

    // 将uos数量转成"xxx.xxxx UOS"
    numValid (num) {
        if (typeof(num) == "string") {
            return parseFloat(num).toFixed(4) + " UOS";
        } else if (typeof(num) == "number") {
            return parseFloat(num).toFixed(4) + " UOS"
        } else {
            throw new Error("type error");
        }
    }

    /*
    * 投票
    * @Params
    * amount: 投票的UOS数量
    * FromAccount: 投票的发起账户
    * producers: 投票账户数组
    * */
    async vote ({ amount, fromAccount, producers }){
        const TRANSFER_CONTRACT = "uosio";
        let account = fromAccount || await this.getAccount();
        let options = {
            authorization: account.name + '@' + account.authority,
            broadcast: true,
            sign: true,
        };
        const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);
        const opts = {
            "voter": account.name,
            "quantity": amount,
            "proxy": account.name,
            "producers": producers
        };
        // const opts = { authorization:[account.name+'@'+account.authority] };
        return usmartUOS.contract(TRANSFER_CONTRACT).then(actions => {       // actions变量名
            return actions.voteproducer(opts, {                     // voteproducer--合约方法, opts合约参数
                authorization:[ account.name + '@' + account.authority ] // 合约的用户
            }).then(result => {
                return(result)
            }).catch((err)=>{
                throw err;
            })
        }).catch((err)=>{
            throw err;
        })
    }

    /*
    * 撤销投票
    * */
    async cancelVote ({ fromAccount, quantity, producers }) {
        const TRANSFER_CONTRACT = "uosio";
        let account = fromAccount || await this.getAccount();
        let options = {
            authorization: account.name + '@' + account.authority,
            broadcast: true,
            sign: true,
        };
        const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);
        const opts = {
            "voter": account.name,
            "quantity": quantity,
            "proxy": account.name,
            "producers": producers
        };
        // const opts = { authorization:[account.name+'@'+account.authority] };
        return usmartUOS.contract(TRANSFER_CONTRACT).then(actions => {       // actions变量名
            return actions.cancelvote(opts, {                     // cancelvote--合约方法, opts合约参数
                authorization:[ account.name + '@' + account.authority ] // 合约的用户
            }).then(result => {
                return(result)
            }).catch((err)=>{
                throw err;
            })
        }).catch((err)=>{
            throw err;
        })
    }

    /*
    * 获取usmart当前账户
    * */
    async getAccount() {
        return new Promise(async(resolve, reject) => {
            let identity = await window.usmart.getIdentity({ accounts: [this.net] }).catch(err => {
                reject(err);
            });
            if (!identity) {
                alert('请先配置UOS钱包或解锁usmart');
                reject(new Error('请先配置UOS钱包或解锁usmart'));
                return false;
            }

            identity.accounts = identity.accounts || [];
            let account = identity.accounts.find((acc)=> {
                return acc.blockchain === "uos"
            });
            // console.log(account);
            resolve (account)
        })
    }

    /*
    * 查询某个账户详情信息
    * */
    async getAccountInfo (accountName) {
        return axios({
            url: '/api/v1/chain/get_account',
            method: 'POST',
            data: {
                account_name: accountName
            }
        })
    }

    /*
    * 短号竞拍
    * @Params
    * newname -- 竞拍账户名
    * amount -- UOS竞拍价格
    * */
    async auctionAccount ({ newname, amount }) {
        const TRANSFER_CONTRACT = "uosio";
        let account = await this.getAccount();
        let options = {
            authorization: account.name + '@' + account.authority,
            broadcast: true,
            sign: true,
        };
        const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);
        const opts = {
            bidder: account.name, // 当前的操作账户
            newname: newname, // 竞拍的账户名
            bid: amount // 竞拍价格
        };
        // const opts = { authorization:[account.name+'@'+account.authority] };
        return usmartUOS.contract(TRANSFER_CONTRACT).then(actions => {       // actions变量名
            return actions.bidname(opts, {                     // bidname--合约方法, opts合约参数
                authorization:[ account.name + '@' + account.authority ] // 合约的用户
            }).then(result => {
                return(result)
            }).catch((err)=>{
                throw err;
            })
        }).catch((err)=>{
            throw err;
        })
    }

    /*
    * 测试竞拍
    * */
    async testContract () {
        const TRANSFER_CONTRACT = "uosio";
        let account = await this.getAccount();
        console.log(account);
        let options = {
            authorization: account.name + '@' + account.authority,
            broadcast: true,
            sign: true,
        };
        const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);
        const opts = { authorization:[account.name+'@'+account.authority] };
        usmartUOS.contract(TRANSFER_CONTRACT).then(actions => {       // actions变量名
            actions.bidname({
                bidder: account.name, // 当前的操作账户
                newname: "jin", // 竞拍的账户名
                bid: "12.0000 UOS"
            }, {                     // test是方法名, 'hello'是该actions合约test方法的参数
                authorization:[ account.name + '@' + account.authority ] // 合约的用户
            }).then(result => {
                console.log(result);
            });
        })
    }

    /*
    * 转账交易
    * @Params
    * amount -- 转账数目
    * accountName -- 收款人账户名
    * memo -- 交易备注
    * */
    async transfer ({ amount, accountName, memo }) {
        const TRANSFER_CONTRACT = "uosio.token";
        let account = await this.getAccount();
        console.log(account);
        // let net = this.$Uos.net;
        let options = {
            authorization: account.name + '@' + account.authority,
            broadcast: true,
            sign: true
        };
        const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);

        return usmartUOS.contract(TRANSFER_CONTRACT,{accounts:[this.net]}).then(contract => {
            const opts = { authorization:[account.name+'@'+account.authority] };
            return contract.transfer(account.name, accountName, amount, memo);
        }).catch((err)=>{
            console.log(err);
            throw (err)
        })

    }

}

export default UosUtils;
