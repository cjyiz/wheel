<template>
  <div id="app">
    <div class="group">
      <span>按钮</span>
      <cj-button class="btn" icon="left" :loading="loading1" @click="loading1=!loading1">这是基础按钮</cj-button>
      <cj-button class="btn" icon="shezhi" :loading="loading2" @click="loading2=!loading2">这是基础按钮</cj-button>
      <cj-button class="btn" icon="right" :loading="loading3" @click="loading3=!loading3">这是基础按钮</cj-button>
    </div>
    <div class="group">
      <span>按钮组</span>
      <cj-button-group>
        <cj-button class="btn" icon="down" :loading="loading4" @click="loading4=!loading4">这是组内按钮1</cj-button>
        <cj-button class="btn" icon="up" :loading="loading5" @click="loading5=!loading5">这是组内按钮2</cj-button>
      </cj-button-group>
    </div>
    <div class="group">
      <span>图标</span>
      <cj-icon name="error">图标</cj-icon>
    </div>
    <div class="group">
      <cj-input disabled value="我是第一"></cj-input>
      <cj-input readonly value="我是第二"></cj-input>
      <cj-input value="我是第三"></cj-input>
      <cj-input value="我是第四" error="姓名不能超过2个字"></cj-input>
    </div>
    <div class="group">
      <cj-popover>弹出框效果</cj-popover>
    </div>
    <div class="group">
      <cj-col>
        <cj-row>行1</cj-row>
        <cj-row>行2</cj-row>
        <cj-row>行3</cj-row>
      </cj-col>
      <cj-col>
        <cj-row>行1</cj-row>
        <cj-row>行2</cj-row>
        <cj-row>行3</cj-row>
      </cj-col>
      <cj-col>
        <cj-row>行1</cj-row>
        <cj-row>行2</cj-row>
        <cj-row>行3</cj-row>
      </cj-col>
      <cj-col>
        <cj-row>行1</cj-row>
        <cj-row>行2</cj-row>
        <cj-row>行3</cj-row>
      </cj-col>
    </div>
    <div class="group">
      <cj-sider>滑动</cj-sider>
    </div>


    <div class='group'>
      <cj-layout>网格布局</cj-layout>
    </div>
    <cj-footer></cj-footer>
  </div>
</template>

<script>
import Button from "@/components/button";
import Icon from "@/components/icon";
import ButtonGroup from "@/components/buttonGroup.vue";
import Footer from "@/components/footer";
import Input from "@/components/input";
import Popover from "@/components/popover";
import Row from "@/components/row";
import Col from "@/components/col";
import Sider from "@/components/sider";
import Layout from "@/components/layout";
export default {
  data() {
    return {
      loading1: false,
      loading2: true,
      loading3: false,
      loading4: false,
      loading5: false
    };
  },
  components: {
    "cj-button": Button,
    "cj-icon": Icon,
    "cj-button-group": ButtonGroup,
    "cj-footer": Footer,
    "cj-input": Input,
    "cj-popover": Popover,
    "cj-row": Row,
    "cj-sider": Sider,
    "cj-col": Col,
    "cj-layout":Layout
  }
};
</script>

<style lang='scss' scoped>
.group {
  margin: 30px auto;
  padding-left: 30px;
  > span {
    margin-right: 20px;
  }
}
</style>