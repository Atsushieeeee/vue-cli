import Vue from "vue"

Vue.filter('number_format', function (value) {
  if(!value) return '0'
  return value.toString().replace( /([0-9]+?)(?=(?:[0-9]{3})+$)/g,'$1,')
});