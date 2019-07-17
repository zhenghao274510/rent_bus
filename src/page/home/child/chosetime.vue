<template>
   <div class="choosetime">
     <mt-datetime-picker
    ref="picker"
    type="time"
    v-model="pickerValue">
  </mt-datetime-picker>
   </div>
</template>

<script>
  export default {
    data(){
       return {
           pickerValue:''
       }
    },
    methods: {
      openPicker() {
        this.$refs.picker.open();
      }
    }
  };
</script>
<style spcode>
 .choosetime{
   position: fixed;
   bottom: 0;
   left: 0;
   width: 100%;
 }
</style>

