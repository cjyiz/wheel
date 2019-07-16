<template>
  <div class="wrapper">
    <input
      type="text"
      :value="value"
      :disabled="disabled"
      :readonly='readonly'
      @change="$emit('change',$event.target.value)"
      @input="$emit('input',$event.target.value)"
      @focus="$emit('focus',$event.target.value)"
      @blur="$emit('blur',$event.target.value)"
    />
    <!-- 想多加一个但是容器，但是又不想加div，可以使用template -->
     <template v-if='error'>
            <icon name='error' class='icon-error'></icon>
            <span class='error-message'>{{error}}</span>    
        </template>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  components:{Icon},
  name: "CjInput",
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style  lang='scss' scoped>
@import "@/assets/main.scss";
.wrapper {
  display: inline-block;
  > input {
    margin: 10px;
    border: 2px solid rgb(112, 53, 221);
    height: 2em;
    border-radius: 4px;
    padding: 0 8px;
    &:hover {
      border-color: rgb(112, 53, 221);
    }
    &:focus {
      box-shadow: inset 0 1px 3px rgb(112, 53, 221);
      border-color: rgb(112, 53, 221);
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    > input {
      border-color: salmon;
      :focus {
        border-color: salmon;
        box-shadow: inset 0 1px 3px salmon;
      }
    }

    .icon-error {
      fill: red;
    }
    .error-message {
      color: red;
    }
  }
}
</style>
