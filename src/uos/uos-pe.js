import Config from '../assets/js/config'
import axios from 'axios'

/*
* H5端UOS接口调用工具类
* */
class PhoneUosUtils {
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
        let account = await this.getAccount();
        
        const opts = {
            "voter": account.name,
            "quantity": amount,
            "proxy": "uosvegasjack",
            "producers": producers
        };
        console.log("投票",JSON.stringify(opts))
        return window.pe.pushActions({
            transfer_contract: TRANSFER_CONTRACT, // 合约名
            action: 'voteproducer', // 合约方法
            options: opts, // 合约方法参数
            authorization: [ account.name + '@' + account.authority ] // 授权
        });
    }

    /*
    * 撤销投票
    * */
    async cancelVote ({ fromAccount, quantity, producers }) {
        const TRANSFER_CONTRACT = "uosio";
        let account = await this.getAccount();
        const opts = {
            "voter": account.name,
            "quantity": quantity,
            // "proxy": account.name,
            "producers": producers
        };
        return window.pe.pushActions({
            transfer_contract: TRANSFER_CONTRACT, // 合约名
            action: 'cancelvote', // 合约方法
            options: opts, // 合约方法参数
            authorization: [ account.name + '@' + account.authority ] // 授权
        });
    }

    /*
    * 获取usmart当前账户
    * */
    async getAccount() {
        return new Promise(async(resolve, reject) => {
            let account = await window.pe.getUosAccount().catch((err)=>{
                console.log(err);
                reject(err);
            });
            console.log(JSON.stringify(account));
            if (!account) {
                alert('请先配置UOS钱包');
                reject(new Error('请先配置UOS钱包'));
                return false;
            }
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
    * 请求签名
    * 此方法仅供H5使用
    * @params -- 交易原始数据
    * */
    async requestSignature (params) {
        return window.pe.requestSignature(params);
    }

    /*
    * 请求交易签名
    * */
    async requestTransferSign ({ to, quantity, memo }) {
        let account = await this.getAccount();
        let authorization = [ account.name + '@' + account.authority ];
        return window.pe.requestSignature({
            transfer_contract: "uosio.token", // 合约名
            action: 'transfer', // 合约方法
            options: {
                "from": account.name,
                "to": to,
                "quantity": quantity,
                "memo": memo
            }, // 合约方法参数
            authorization: authorization, // 授权
            serialNumber: 'serialNumber' + (new Date().getTime() + parseInt(Math.random() * 100000000000))
        });
    }

    /*
    * 原生应用跳转至交易详情页面
    * */
    turnToTxPage ({ block_num, transaction_id }) {
        return window.pe.turnToTxPage({
            block_num, transaction_id
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
        // const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);
        const opts = {
            bidder: account.name, // 当前的操作账户
            newname: newname, // 竞拍的账户名
            bid: amount // 竞拍价格
        };
        return window.pe.pushActions({
            transfer_contract: TRANSFER_CONTRACT, // 合约名
            action: 'bidname', // 合约方法
            options: opts, // 合约方法参数
            authorization: [ account.name + '@' + account.authority ], // 授权
            serialNumber: 'serialNumber' + (new Date().getTime() + parseInt(Math.random() * 100000000000))
        });

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
        let options={
                from: account.name, // 发款账户
                to: accountName, // 收款账户
                memo: memo, // 转账备注
                quantity: amount
        }
        const usmartUOS = usmart.uos(this.net, Uos, options, this.net.protocol);
        return  window.pe.pushActions({
            transfer_contract: TRANSFER_CONTRACT, // 合约名
            action: 'transfer', // 合约方法
            options: options, // 合约方法参数
            authorization: [ account.name + '@' + account.authority ], // 授权
            serialNumber: 'serialNumber' + (new Date().getTime() + parseInt(Math.random() * 100000000000))
        })
        // return  window.pe.pushTransfer({
        //     from: account.name, // 发款账户
        //     to: accountName, // 收款账户
        //     memo: memo, // 转账备注
        //     quantity: amount
        // });

    }


        /*
    * 抵押
    * @Params
    * FromAccount -- 转账数目
    * ToAccount -- 收款人账户名
    * stake_net_quantity -- 交易抵押网络
    * stake_cpu_quantity --  抵押cpu
    * */
    async delegatebw({FromAccount,Receiver,stake_net_quantity,stake_cpu_quantity}){
        const TRANSFER_CONTRACT = "uosio";
        let account = await this.getAccount();
        const opts = {
                from:account.name,
                receiver:Receiver,
                stake_net_quantity:stake_net_quantity, //"1.0000 UOS"
                stake_cpu_quantity:stake_cpu_quantity,
                transfer:false,
        };
        return window.pe.pushActions({
            "transfer_contract": TRANSFER_CONTRACT, // 合约名
            "action": 'delegatebw', // 合约方法
            "options": opts, // 合约方法参数
            "authorization": [ account.name + '@' + account.authority ] // 授权
        });
    }

        /*
    * 取消抵押
    * @Params
    * FromAccount -- 转账数目
    * ToAccount -- 收款人账户名
    * stake_net_quantity -- 交易抵押网络
    * stake_cpu_quantity --  抵押cpu
    * */
    async undelegatebw({FromAccount,Receiver,stake_net_quantity,stake_cpu_quantity}){
            const TRANSFER_CONTRACT = "uosio";
            let account = await this.getAccount();
            const opts = {
                from:Receiver,
                receiver:account.name, 
                unstake_net_quantity:stake_net_quantity, //"1.0000 UOS"
                unstake_cpu_quantity:stake_cpu_quantity,
            }
            return window.pe.pushActions({
                transfer_contract: TRANSFER_CONTRACT, // 合约名
                action: 'undelegatebw', // 合约方法
                options: opts, // 合约方法参数
                authorization: [ account.name + '@' + account.authority ] // 授权
            });
    }
}

export default PhoneUosUtils;
