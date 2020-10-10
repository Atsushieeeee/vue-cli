<template>
  <div class="math">
    <h1>This is an Math2 page</h1>
    <form action="" name="form">
      <input type="tel" class="risoku" v-model.number="answer">
    </form>
    <button class="mbtn" @click="testNum">計算</button>
    <button class="mbtn" @click="clear">クリア</button>
    <p style="color:red" v-show="show">結果1:{{num1 | number_format}}</p>
    <p style="color:blue" v-show="show">結果2:{{num2 | number_format}}</p>
    <p style="color:green" v-show="show">結果3:{{num3 | number_format}}</p>
    <p style="color:orange" v-show="show">結果4:{{num4 | number_format}}</p>


    <p></p>
  </div>
</template>


<script>
export default {
  data (){
    return{
      answer: '',
      num1:'',
      num2:'',
      num3:'',
      num4:'',
      show:false
    }
  },
  filters:{
    addComma(value){
      return value.toString().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g,'$1,')
    }
  },
  methods:{
    testNum:function(){
      var val1 = Math.floor(this.answer / 0.84685 * 0.15315)
      var val2 = Math.ceil(val1 * 315/15315 - 0.5)
        this.num1 = val1 + this.answer
        this.num2 = val1 - val2
        this.num3 = val2
        this.num4 = val2 + this.num2
        this.show = true
    },
    clear:function(){
      this.show = false
      this.answer = ''
    }
  }
}
</script>

