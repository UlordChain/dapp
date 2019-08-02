# ulord-dapp 
### uos dapp demo

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```


#  实现功能
* 转账
* 抵押/取消抵押
* 投票/取消投票
* 查询账户金额


##  转账 

>### **param:**  
> &emsp;&emsp;&emsp;&emsp; amount         &emsp;&emsp;&emsp;    string 金额  
> &emsp;&emsp;&emsp;&emsp; accountName    &nbsp; string 接收人   
> &emsp;&emsp;&emsp;&emsp; memo           &emsp;&emsp;&emsp;&nbsp;&nbsp;     string 备注  

```
详情见 demo.vue  tras()

```

## 查询
> ### **param:**  
> &emsp;&emsp;&emsp;&emsp; accountName    &nbsp; string  查询账户名   

```
详情见 demo.vue  blanc()

```

## 抵押/取消抵押

> * 抵押  
> ### **param:**  
> &emsp;&emsp;&emsp;&emsp; FromAccount         &emsp;&nbsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  string 金额  
> &emsp;&emsp;&emsp;&emsp; Receiver    &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp; string 投票人   
> &emsp;&emsp;&emsp;&emsp; stake_net_quantity           &emsp;&nbsp;&nbsp;     string 抵押网络  
> &emsp;&emsp;&emsp;&emsp; stake_cpu_quantity           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     string 抵押cpu 
### **return:**  
&emsp;&emsp;&emsp;&emsp; xxx         &emsp;&emsp;&emsp;    string xxx  
> * 取消抵押
> ### **param:**  
> &emsp;&emsp;&emsp;&emsp; FromAccount         &emsp;&emsp;&emsp;&nbsp;&nbsp;    string 金额  
> &emsp;&emsp;&emsp;&emsp; Receiver    &emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp; string 投票人   
> &emsp;&emsp;&emsp;&emsp; stake_net_quantity           &emsp;&nbsp;    string 抵押网络  
> &emsp;&emsp;&emsp;&emsp; stake_cpu_quantity          &emsp;&nbsp;    string 抵押cpu  


```
详情见 demo.vue  ps()  unps()
```


## 投票/取消投票

* 投票 
> ### **param:**  
> &emsp;&emsp;&emsp;&emsp; amount         &emsp;&emsp;&nbsp;&nbsp;    string 金额  
> &emsp;&emsp;&emsp;&emsp; fromAccount    &nbsp; string 投票人   
> &emsp;&emsp;&emsp;&emsp; producers      &emsp;&nbsp;&nbsp;     string[] 投票人列表  


* 取消投票
> ### **param:**  
> &emsp;&emsp;&emsp;&emsp; fromAccount  &nbsp;    string 金额  
> &emsp;&emsp;&emsp;&emsp; quantity     &nbsp;&emsp;&emsp; string 投票人   
> &emsp;&emsp;&emsp;&emsp; producers    &emsp;&nbsp;&nbsp;     string[] 投票人列表 


```
详情见 demo.vue  vote()  canvote()
```

## 获取钱包的当前账户信息
> ### **param:**  
> &emsp;&emsp;&emsp;&emsp;None
```
详情见 demo.vue  mounted()
this.user = this.$UOS.getAccount();

返回结果  
{
    "publicKey": "UOSxxxxxxx",
    "name": "tangwei11111",
    "authority": "owner",
    "blockchain": "uos"
}


```