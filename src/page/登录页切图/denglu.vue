<template>
  <div class=".box">
    <div class="top">
      <mt-header class="text" title="登录">
        <router-link to="/" slot="left">
          <mt-button>
           <img class="img" src="./fanhui@2x.png" alt />
          </mt-button>
        </router-link>
      </mt-header>
    </div>
    <div class="foot">
      <p>登录</p>
      <div class="box1">
        <img src="./shouji@2x.png" />
        <span>+86</span>
        <input id="ipt1" type="text" placeholder="请输入手机号" v-model="phone" name="phone"/>
      </div>
      <div class="box2">
        <img src="./yanzhengma@2x.png" />
        <input type="text" placeholder="请输入验证码" v-model="value2"/>
        <span id="btn" @click="btn">获取验证码</span>
      </div>
      <p>
        <router-link to="/pass"> <span id="p_">用密码登录</span> </router-link>  <router-link to="/pass"><span id="span" style="display:none">密码登陆</span></router-link>
      </p>
      <!-- <router-link to="/city"> -->
      <button class="btn"  @click="axios_">登录</button>
      <!-- </router-link> -->
      <p>
        <!-- :disabled='active' -->
        登录即已同意
        <span>《服务协议》</span>和
        <span>《服务协议及补充协议》</span>
      </p>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import jsonp from 'jsonp'
export default {
  data() {
    return {
        timer:1,
        phone:'',
        value2:'',
        yanzheng:'',
        active:true
    }
  },
  methods: {
    axios_(){
      if(this.value2==''){
        return false
    }
    else if(this.value2==this.yanzheng){
      this.$router.push('/home/china')
    }
    else{
      
      Dialog.alert({
            message: '验证码错误！！！'
          }).then(() => {
            // on close
          });
          return false
    }
      // this.$axios.get('http://v.juhe.cn/sms/send?mobile=18848870980&tpl_id=短信模板ID&tpl_value=%23code%23%3D654654&key=2192f0036c60393639df82aad576aec9').then((data)=>{
      //   console.log(data)
      // }).catch((err)=>{console.log(err)})


        //jsonp请求数据
        // headers('content-type:text/html;charset=utf-8');
  
        // var val='#code#=1234&#company#=pingjia'
        // var key='2192f0036c60393639df82aad576aec9'
        // var moban='173881'
        // var keyword = this.value1;
        // var baseUrl = "http://v.juhe.cn/sms/send";
        // var _url = baseUrl + '?mobile='+ keyword + '&tpl_id='+moban +'&tpl_value=' + val +'&key='+ 'key'+'&cb=callback';
      //  var _url='http://v.juhe.cn/sms/send?mobile=18848870980&tpl_id=159690&tpl_value=urlencode&key=2192f0036c60393639df82aad576aec9'
       
    //    jsonp('http://172.25.1.42:8080/register/send?phone=18595646418',(res)=>{
    //         callback(res);
    //     })

    // //注意:callback需挂载到window下
    //     window.callback = function(data){
    //         console.log(data)
    //     }
    },
    
    right(){
      
    },
      btn(){
        var inp1=document.getElementById('ipt1')
        var inp2=document.getElementById('ipt2');
        var phone_reg = /^1[3-9]\d{9}$/;
        var phone_ = inp1.value;
        if(!(phone_reg.test(phone_))){
            Dialog.alert({
            message: '手机号格式错误'
          }).then(() => {
            // on close
          });
          return false
        }
          if(this.timer==1){
              this.timer=2
              var b=document.getElementById('btn')
              var span=document.getElementById('span')
          var p_=document.getElementById('p_')
           var num=15;
        var time=null;
           jsonp('http://172.25.1.42:8080/register/send?phone='+this.phone,(res)=>{
            callback(res);
        })

    //注意:callback需挂载到window下
        window.callback=(res)=>{
            // console.log(data)
    //         jsonp('http://172.25.1.42:8080/register/send?phone=phone&callback=__jp0',(res)=>{
    //         callback1(res);
    //         // console.log(res.auth)
    //     })

    // //注意:callback需挂载到window下
    //     window.callback = function(data){
    //         // console.log(data)
    //         console.log(data)
            
    //     }
     
        },
        this.axios.get('http://172.25.1.42:8080/register/send?phone='+this.phone+'&callback=__jp0').then((res)=>{
      console.log(res.data.auth)
      this.yanzheng=res.data.auth
    })
       
        time=setInterval( ()=>{
            num--;
            if(num<=0){
                clearInterval(time);
                b.innerHTML='重发验证码';
                num=6;
                p_.innerHTML='没有收到验证码?';
                span.style.display='inline'
                console.log(this.timer);
                this.timer=1;
                console.log(this.timer);
            }
            else{
                b.innerHTML=num+'秒后获取';
            } 
    },1000);
   
      }

      }
  },
  updated(){ 
    var btn =document.getElementsByClassName('btn')[0]
    if(this.value1!==''&& this.value2!==''){
     
      btn.style.background='#FFCC00'
    }
    else if(this.value1==''|| this.value2==''){
      btn.style.background='#E5E5E5'
    }
  },
  components: {

  },
  // mounted(){
  //   this.right();
  // }
}
</script>

<style scoped lang='less'>
.mint-header{
   background-color: #f6f6f6;
}
.box {
  display: flex;
  height: 100%;
}
input{
    background-color:#f6f6f6 ;
    &::placeholder{
        color: #CFCFCF
      }
}
.top {
  background-color: #f6f6f6;
  overflow: hidden;
  // height: .46rem;
  .text {
    font-size: 0.16rem;
  }
  .mint-header {
    color: #222;
  }
  .img {
    // width: .22rem;
    height: 0.22rem;
  }
}
.foot {
  font-size: 0.15rem;
  padding: 0.52rem 0.44rem 0 0.47rem;
  flex: 1;
  p:nth-child(1) {
    font-size: 0.23rem;
    color: #222222;
    padding-bottom: 0.38rem;
  }
  p:nth-child(4) {
    font-size: 0.13rem;
    padding: 0.21rem 0;
    color: #596d92;
    a {
      color: #596d92;
    }
  }
  .box1,
  .box2 {
    display: flex;
    padding-bottom: 0.15rem;
    border-bottom: 1px solid #ccc;
    //    input{
    //         font-size: .15rem;
    //    }
    img {
      width: 0.16rem;
      height: 0.22rem;
    }
    span {
      padding: 0 0.11rem;
    }
  }
  .box2 {
    padding: 0.22rem 0 0.18rem 0;
    overflow: hidden;
    input {
      padding-left: 0.1rem;
      background-color: none;
      &::placeholder{
        color: #CFCFCF
      }
    }
    span {
      display: inline-block;
      flex: 1;
      text-align: right;
      display: flex;
      white-space: nowrap;
      color: #CFCFCF;
      justify-content: flex-start;
      padding-right: 0;
    }
  }
  .btn {
    width: 100%;
    height: 0.4rem;
    border-radius: 0.075rem;
    color: #ffff;
    background-color: #E5E5E5;
    font-size: 0.18rem;
  }
  p:nth-child(6) {
    font-size: 0.12rem;
    padding-bottom: 0.25rem;
    display: flex;
    white-space: nowrap;
    padding: 2.35rem 0 0 0;
    span {
      color: #0099ff;
    }
  }
}
#span{
  float: right;
}
</style>
