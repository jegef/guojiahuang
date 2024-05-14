<template>
    <div class="date">
        <el-calendar v-model="pickedDate" class="dateList"/>
    </div>
</template>
<script>
import {ref} from 'vue';
    export default{
        setup(){
            const pickedDate=ref(new Date());
            return{pickedDate}
        }
    }
</script>
<style scoped>
.data {
    height: 300px;
    overflow: scroll;
}
.dateList{
    background:rgba(0,0,0,0.4);
    
}
 /* 隐藏纵向滚动条 */
 ::-webkit-scrollbar {
    width: 0;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0;
  }
  
  /* 隐藏横向滚动条（如果有） */
  ::-webkit-scrollbar-horizontal {
    display: none;
  }
</style>