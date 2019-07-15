<template>
    <svg class="g-icon">
      <!-- 使用v-bind绑定样式 -->
      <!-- 下面的写法绑定属性 -->
      <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>
<script>
import './svg.js'
export default {
  name:'Cj-Icon',
  props:['name']
}
</script>
<style lang='scss'>
.g-icon {
  width: 1em;
  height: 1em;
  margin-right: 0.3em;
  }
</style>

