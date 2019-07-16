<template>
  <div id="app">
    <div class='group'>
     <span>按钮</span> 
    <cj-button class="btn" icon="left" :loading='loading1' @click='loading1=!loading1'>这是基础按钮</cj-button>
    <cj-button class="btn" icon="shezhi" :loading='loading2' @click='loading2=!loading2'>这是基础按钮</cj-button>
    <cj-button class="btn" icon="right" :loading='loading3' @click='loading3=!loading3'>这是基础按钮</cj-button>
    </div>
  <div class='group'>
    <span>按钮组</span>
    <cj-button-group>
      <cj-button class="btn" icon="down" :loading='loading4' @click='loading4=!loading4' >这是组内按钮1</cj-button>
      <cj-button class="btn" icon="up" :loading='loading5' @click='loading5=!loading5'>这是组内按钮2</cj-button>
    </cj-button-group>

  </div>
  <div class='group'>
    <span>图标</span>
    <cj-icon name="error">图标</cj-icon>

  </div>
    
    <cj-footer></cj-footer>
  </div>
</template>

<script>
import Button from "@/components/button";
import Icon from "@/components/icon";
import ButtonGroup from "@/components/buttonGroup.vue";
import Footer from "@/components/footer";
export default {
  data(){
    return{
    loading1:false,
    loading2:true,
    loading3:false,
    loading4:false,
    loading5:false
    }
  },
  components: {
    "cj-button": Button,
    "cj-icon": Icon,
    "cj-button-group": ButtonGroup,
    "cj-footer": Footer
  }
};
</script>

<style lang='scss' scoped>
.group{
  margin: 30px auto;
  padding-left:30px;
  >span{
    margin-right:20px;
  }
}
</style>