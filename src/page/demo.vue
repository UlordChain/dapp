<template>
    <div>   

            <p>将1uos交易给 {{toAccount}}</p>
            <p>
            <van-button class="btn-auction small" type="info" @click="tras" >交易</van-button>
            </p>

            <p>{{fromAccount}} 抵押1uos</p>
            <p>
            <van-button class="btn-auction" type="info" @click="ps" >抵押</van-button>
            </p>
            <p>{{fromAccount}} 取消抵押1uos</p>
            <p>
            <van-button class="btn-auction" type="info" @click="unps" >取消抵押</van-button>
            </p>
            <p>{{fromAccount}} 持有{{mn}}uos</p>
            <p>
            <van-button class="btn-auction" type="info" @click="blanc" >查询余额</van-button>
            </p>
            <p>{{fromAccount}} 投票1uos</p>
            <p>
            <van-button class="btn-auction" type="info" @click="vote" >投票</van-button>
            </p>
            <p>{{fromAccount}} 取消投票1uos</p>
            <p>
            <van-button class="btn-auction" type="info" @click="canvote" >取消投票</van-button>
            </p>
    </div>
</template>

<script>
// windows.pe = pefun()
    export default {
        name: "demo",
        data(){
            return {
                fromAccount:"jssdktester1",
                toAccount:"jssdktester2",
                user:{},
                mn:"",
            }
        },
        mounted(){
            if(this.$UOS){
                this.user = this.$UOS.getAccount();
                this.fromAccount=this.user.name
            }
            /*
            this.user = {
                "publicKey": "UOSxxxxxxx",
                "name": "tangwei11111",
                "authority": "owner",
                "blockchain": "uos"
                }
            
            */
        },
        methods:{
            async tras(){//交易
                let result = await this.$UOS.transfer({
                    amount:"1.0000 UOS",
                    accountName:this.toAccount,
                    memo:"备注信息"
                }).catch((err)=>{
                    console.error(err);
                    this.$toast('转账失败');
                }).then(res=>{
                    this.$toast('转账成功!');
                });

                return true;
            },
            async ps(){//抵押
                let result = await this.$UOS.delegatebw({
                    FromAccount:this.fromAccount,
                    Receiver:this.fromAccount,
                    stake_net_quantity:"1.0000 UOS",
                    stake_cpu_quantity:"0.0000 UOS",
                }).catch((err)=>{
                    console.error(err);
                    this.$toast('抵押失败');
                }).then(res=>{
                    this.$toast('抵押成功!');
                });
                return true;
            },
            async unps(){//取消抵押
                let result = await this.$UOS.undelegatebw({
                    FromAccount:this.fromAccount,
                    Receiver:this.fromAccount,
                    stake_net_quantity:"1.0000 UOS",
                    stake_cpu_quantity:"0.0000 UOS",
                }).catch((err)=>{
                    console.error(err);
                    this.$toast('抵押失败');
                }).then(res=>{
                    this.$toast('抵押成功!');
                });
                return true;
            },
            async vote(){//投票
                let result = await this.$UOS.vote({
                    amount: "1.0000 UOS",
                    fromAccount: this.fromAccount,
                    producers: ["uosvegasjack"]
                }).catch((err)=>{
                    console.error(err);
                    this.$toast('投票失败');
                }).then(res=>{
                    this.$toast('投票成功!');
                });
                return true;
            },
            async blanc(){//查询
                let accountInfo = await this.$UOS.getAccountInfo(this.fromAccount);
                if (accountInfo) {
                    console.log(data)
                    return true
                }
                console.log("没有数据!")
                return false;
            },
            async canvote(){//取消投票
                let result = await this.$UOS.cancelVote({
                    fromAccount: this.fromAccount,
                    quantity: "1.0000 UOS",
                    producers: ["uosvegasjack"]
                }).catch((err)=>{
                    console.error(err);
                    this.$toast('取消投票失败');
                }).then(res=>{
                    this.$toast('取消投票成功!');
                });
                return true;
            }, 
        }
    }
</script>

<style scoped>
    p {
        text-align: center;
        padding: 10px;
    }
    .btn-auction{
        width: 80%;
    }
    span{
        padding: 5px;
        margin-bottom: 5px;
    }
</style>
