<template>
  <button class="cj-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
    <g-icon class="loading icon" v-if='loading' name="loading"></g-icon>
    <g-icon class="icon" :name="icon" v-if="icon&& !loading"></g-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
import Icon from "@/components/icon.vue";
export default {
  name: "Cj-button",
  components: {
    "g-icon": Icon
  },
  props: {
    icon: {},
    loading: {
      type: Boolean,
      default: false
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(value) {
        return value === "left" || value === "right";
      }
    }
  }
};
</script>
<style lang='scss' scoped >
@import "@/assets/main.scss";
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 1s infinite linear;
}
.cj-button {
  font-size: $font-size;
  height: $button-height;
  padding: 0.3em 1em;
  border-radius: $border-radius;
  border: 1px solid $border-color;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: $button-bg;
  &:hover {
    border-color: $border-color-hover;
  }
  &:active {
    background-color: $button-active-bg;
  }
  &:focus {
    outline: none;
  }
  > .content {
    order: 2;
  }
  > .icon {
    order: 1;
    margin-right: 0.1em;
  }
  &.icon-right {
    > .icon {
      order: 2;
      margin-left: 0.3em;
      margin-right: 0;
    }
    > .content {
      order: 1;
    }
  }
}
</style>


