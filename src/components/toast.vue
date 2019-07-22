<template>
    <div class='wrapper'>
        <div class='toast'>
            <div class='message'>
                <slot></slot>
                <div></div>
            </div>
            <div class='line' ref='line'></div>
            <span class='close' v-if="closeButton" @click="onClickClose">{{closeButton.text}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'GuluToast',
    props:{
        autoClose:{
            type:[Boolean,Number],
            default:false,
            validator(value){
                return value===false||typeof value==='number'
            }
        }
    },
    closeButton:{
        type:Object,
        default(){
            return{
                text:'关闭',callback:undefined
            }
        }
    },
    enableHtml:{
        type:Boolean,
        default:false
    },
    position:{
        type:String,
        default:'top',
        validator(value){
            return ['top','bottom','middle'].indexOf(value)>=0
        }
    },
    mounted(){
        this.updateStyles()
        this.execAutoClose()
    },
    computed:{
        toastClassed(){
            return {
                [`position-${this.position}`]:true
            }
        }
    },
    methods:{
        updateStyles(){
            this.$nextTick(()=>{
                this.$refs.line.style.height=`${this.$refs.toast,getBoundingClientRect().height}px`
            })
        }
    }
}
</script>

