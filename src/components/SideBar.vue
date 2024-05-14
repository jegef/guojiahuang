<template>
    <div class="sidebar">
        <di class="sidebar_list">                      
            <div class="sidebar_list1">
                <my-message></my-message>
            </div>
            <div class="sidebar_list1" >
                <div class="list_t" @click="showTip">
                    <span>{{list[0].tip}}</span>
                    <span>{{list[0].tipMessage}}</span>
                </div>
                <div class="list_b">1</div>
            </div>
            <div class="sidebar_list1" >
              <div class="list_t" @click="showTip">
                  <span>{{list[1].tip}}</span>
                  <span>{{list[1].tipMessage}}</span>
              </div>
              <div class="list_b">1</div>
            </div>
            <div class="sidebar_list1" >
            <div class="list_t" @click="showTip">
                <span>{{list[2].tip}}</span>
                <span>{{list[2].tipMessage}}</span>
            </div>
            <div class="list_b">1</div>
            </div>
            <div class="sidebar_list1" >
          <div class="list_t" @click="showTip">
              <span>{{list[3].tip}}</span>
              <span>{{list[3].tipMessage}}</span>
          </div>
          <div class="list_b">1</div>
            </div>
            <div class="sidebar_list1" >
              <div class="list_t" @click="showTip">
                  <span>{{list[4].tip}}</span>
                  <span>{{list[4].tipMessage}}</span>
              </div>
              <div class="list_b">1</div> 
            </div>
            <my-search class="mySearch"></my-search>  
            <div class="sidebar_list_b">
              <span @click="hide_side_bar">❌</span>
              <span @click="showWritingPage">🔑</span>
              <span>🔒</span>
            </div>             
      </di>           
    </div>
</template>
<script>
import MySearch from './MySearch';
import MyMessage from './MyMessage';
import $ from 'jquery';
import {inject} from 'vue'
export default{
    components:{
        MySearch,
        MyMessage,
        
    },
    data(){
        return{
            activeIndex:null,
            list:[
                {tip:'🏷️',tipMessage:'我的标签',isVisible: false},
                {tip:'📖',tipMessage:'阅读排行',isVisible: false},
                {tip:'❤️',tipMessage:'推荐排行',isVisible: false},
                {tip:'✉️',tipMessage:'最新评论',isVisible: false},
                {tip:'🗃️',tipMessage:'随笔档案',isVisible: false},
                
            ]
        }
    },
   setup(){
      const showTip=()=>{
        $(document).ready(function() {
            $('.list_t').click(function() {
                var list_b = $(this).next('.list_b');
                $('.list_b').not(list_b).slideUp('slow'); // 收起其他内容
                list_b.slideDown('slow');
              });
            $('.list_t').dblclick(function(){
              var list_b = $(this).next('.list_b');
              list_b.slideUp('slow');
            })
        });
      }
      const showSideBar=inject('showSideBar')
      const hide_side_bar=()=>{
          return showSideBar.value=!showSideBar.value,writing.value=false;
      }
      const writing=inject('writing');
      const showWritingPage=()=>{
        return writing.value=!writing.value
      }
      return{showTip,hide_side_bar,showSideBar,writing,showWritingPage}
   }
}
</script>
<style scoped>

.sidebar {
    position:absolute;
    left:-3px;
    top: 0;
    width: 310px;
    height: 1000px;
    overflow: scroll;
    z-index: 100;

    background-size: 400px 1000px;
    background-image:url('../images/4e4a20a4462309f784ba7b2b97aa6cffd6cad667(1).jpg');
  }
  .sidebar_list {
    position:relative;
    width: 100%;
    height: 100%;
    margin-left: 2px;
    color: #fbf8f8;
    display: flex;
    padding-left: 5px;
    background:rgba(0,0,0,0.6);

    flex-direction: column;
    

  }
  .sidebar_list1 {
    width: 300px;   
    margin-top: 5px;
    
  }
  .list_t {
    display: flex;
    flex-direction: row;
    height: 40px;
    border-bottom: 1px solid beige;
    
  }
  .list_t span{
    margin-top: 2.5px;
    margin-left: 10px;
  }
  .list_t span:nth-child(1){
    font-size: 24px;
    padding-top: 5px;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 20px;
    border-radius:10px;
    background:rgba(174, 166, 166, 0.3);
    
  }
  .list_t span:nth-child(2){
    margin-left: 20px;
    
    line-height:40px;
  }
  .list_b {
    height: 400px;
   display: none;
   z-index: 10;
    
  }
  .sidebar_list_b {
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 290px;
    height: 50px;
    bottom: 10px;
    left: 10px;
    
  }
  .sidebar_list_b span {
    width: 50px;
    height: 50px;
    font-size:24px;
    border-radius:10px;
    text-align: center;
    line-height: 50px;
    background:rgba(174, 166, 166, 0.3)
  }
  .sidebar_list_b span:hover{
    background:rgba(141, 235, 240, 0.3)
  }
  .mySearch {
    position:absolute;
    bottom: 120px;
  }
</style>
