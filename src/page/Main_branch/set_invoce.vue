<template>
  <div class="set_invoce">
 <ul class="set_list" >
        <li >
            <span>{{arr}}</span>
             <img src="./img/fanhui-2@2x.png" class="rightImg2"  />
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  props:['arr'],
  methods: {

  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.set_invoce{
   border-bottom:1px solid #DFDFDF;
    .set_list{
        font-size: .13rem;
        color:#444;
        background: #fff;
        
        li{
            overflow: hidden;
            padding:.16rem .15rem .16rem .16rem;
           
            .rightImg2{
                float: right;
                width: .08rem;
                height: .13rem;
            }
        }
       
    }
}
</style>

