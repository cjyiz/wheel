<template>
  <div>
      <div class='tabBar'>
          <div v-for='(item,index) in navList' 
          :key='index' 
          class='navItem' 
          :class="{current:tabCurrentIndex===index}"
          @click='tabClick(index)'>{{item.text}}</div>
          </div>  
          <div class='list' 
          v-for='(item,index) in navList' 
       :key="index"
       v-if="tabCurrentIndex === index">
        
    <div>距离上次洗澡第{{ item.state }}天</div>
    <div>距离上次驱虫第{{ item.state }}天</div>
    <div>距离上次疫苗第{{ item.state }}天</div>
   
    </div>
    
  </div>
</template>

<script>
export default {
data(){
    return {
        navList: [{
						state: 0,
						text: '全部',
						orderList: []
					},
					{
						state: 1,
						text: '西西',
						orderList: []
					},
					{
						state: 2,
						text: '花花',
						orderList: []
					},
					{
						state: 3,
						text: '兰兰',
						orderList: []
					},
					{
						state: 4,
						text: '妙妙',
						orderList: []
					}
				],
        tabCurrentIndex:1
    }
},
methods:{
   tabClick(index){
       this.tabCurrentIndex=index
   }
}
}
</script>

<style lang='scss'>
.current{
    height: 50px;
    width: 50px;
    border:1px solid red;
    background-color: red;;
}
</style>