<template>
  <div
    class="col"
    :class="colClass"
    :style="colStyle"
  >
  <div style='border:1px solid green; height:100px;'>
       <slot></slot>
  </div>
  </div>
</template>
<script>
let validator=(value)=>{
  let keys=Object.keys(value)
  let valid=true
  keys.forEach(key=>{
    if(!['sapn','offset'].includes(key)){
      valid=false
    }
  })
  return valid
}
export default {
  name: "GuluCol",
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    // phone:{
    //   type:Object,
    //   validator(value){
    //     keys=Object.keys(value)
    //    let valid=true
    //    keys.forEach(key=>{
    //      if(!['span','offset'].includes(key)){
    //        valid=false
    //      }
    //    })
    //    return valid
    //   }
    // } 
  },
  methods:{
   createClasses(obj,str=''){
            if(!obj){return []}
            let array=[]
            if(obj.span){
              array.push(`col-${str}${obj.span}`)
            }
            if(obj.offset){
              array.push(`offset-${str}${obj.offset}`)
            }
            return array
          }
  },
  computed:{
      colStyle(){
          return {
            paddingLeft:this.gutter/2+'px',
            paddingRight:this.gutter/2+'px'
          }
      },
      colClass(){
          let {span,offset,ipad,narrowPc,pc,widePc}=this
        let createClasses=this.createClasses
          return [
            ...createClasses({span,offset}),
            ...createClasses(ipad,'ipad-'),
            ...createClasses(narrowPc,'narrow-pc-'),
            ...createClasses(pc,'pc-'),
            ...createClasses(widePc,'wide-pc-')

          ]
  }
  },
  data() {
    return {
      gutter: 0
    }
  }
  }
</script>
<style lang="scss" scoped>
.col {
  height: 100px;
padding:0 10px;
  width: 50%;

  $class: col-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

@media (max-width: 576px){
    $class: col-phone-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-phone-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
// 可以只设置最小宽度
@media (min-width: 577px) and (max-width: 576px){
    $class: col-ipad-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-ipad-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

@media (min-width: 769px)  and (max-width:992px){
    $class: col-narrow-pc-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-narrow-pc-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

@media (min-width: 993px)  and (max-width:1200px){
    $class: col-pc-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-pc-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}

@media (min-width:1200px){
    $class: col-wide-pc-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }
  $class: offset-wide-pc-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
}
}
</style>


