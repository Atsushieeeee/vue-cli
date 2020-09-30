<template>
  <div class="math">
    <h1>This is an Math page</h1>
    <form action="" name="form">
      <input type="tel" class="risoku" v-model.number="answer">
    </form>
    <button class="mbtn">計算</button>
    <p>{{answer | addComma}}</p>
    <p>{{resultNum | addComma}}</p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>


<script>
export default {
  data (){
    return{
      answer: '',
    }
  },
  filters:{
    addComma(value){
      return value.toString().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g,'$1,')
    }
  },
  computed:{
    resultNum:function(){
      return this.answer / 2
    }
  }
}
</script>

