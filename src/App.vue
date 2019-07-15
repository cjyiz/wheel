<template>
  <div id="app">
  <g-button class='btn' icon-position='right'  icon='left'>这是基础按钮</g-button>
<g-icon name=left>图标</g-icon>
  </div>
</template>

<script>
import Button from '@/components/button'
import Icon from '@/components/icon'
export default{
  components:{
      'g-button':Button,
      'g-icon':Icon
  }
}
</script>
<style lang='scss' scoped>

</style>
