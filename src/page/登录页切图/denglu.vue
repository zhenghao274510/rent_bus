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
        <input id="ipt1" type="text" placeholder="请输入手机号" v-model="value1"/>
      </div>
      <div class="box2">
        <img src="./yanzhengma@2x.png" />
        <input type="text" placeholder="请输入验证码" v-model="value2"/>
        <span id="btn" @click="btn">获取验证码</span>
      </div>
      <p>
        <router-link to="/pass"> <span id="p_">用密码登录</span> </router-link>  <router-link to="/pass"><span id="span" style="display:none">密码登陆</span></router-link>
      </p>
      <router-link to="/city">
      <button class="btn" :disabled='active' >登录</button></router-link>
      <p>
        登录即已同意
        <span>《服务协议》</span>和
        <span>《服务协议及补充协议》</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        timer:1,
        value1:'',
        value2:'',
        active:true
    }
  },
  methods: {
    right(){
      
    },
      btn(){
        var inp1=document.getElementById('ipt1').val
        var inp2=document.getElementById('ipt2');
        if(inp1==''){

        }
          if(this.timer==1){
              this.timer=2
              var b=document.getElementById('btn')
              var span=document.getElementById('span')
          var p_=document.getElementById('p_')
           var num=3;
        var time=null;
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
    if(this.value1!==''&& this.value2!==''){
      this.active = false
    }
  },
  components: {

  },
  mounted(){
    this.right();
  }
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
    background-color: yellow;
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
