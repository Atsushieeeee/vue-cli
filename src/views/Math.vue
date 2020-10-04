<template>
  <div class="math">
    <h1>This is an Math page</h1>
    <form action="" name="form">
      <input type="tel" class="risoku" v-model.number="answer">
    </form>
    <button class="mbtn" @click="testNum">計算</button>
    <!-- <p>{{answer | addComma}}</p>
    <p style="color:purple">{{resultNum | addComma}}</p>
    <p style="color:skyblue">{{num | addComma}}</p>
    <p style="color:green">{{num2 | addComma}}</p>
    <p style="color:blue">{{answer | number_format}}</p> -->
    <p style="color:red" v-show="show">結果1:{{num2 | number_format}}</p>

    <p></p>
  </div>
</template>


<script>
export default {
  data (){
    return{
      answer: '',
      num2:'',
      show:false
    }
  },
  filters:{
    addComma(value){
      return value.toString().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g,'$1,')
    }
  },
  // computed:{
  //   resultNum:function(){
  //     return this.answer / 2
  //   }
  // },
  methods:{
    testNum:function(){
        this.num2 = this.answer / 2
        this.show = true
    }
  }
}
</script>

