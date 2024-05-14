<template>
  <transition name="theme-transition">
  <div id="app" :class="{'active':isDarkTheme}" 
  :style="{backgroundImage:`url(${bgImage})`}"> 
    <navigation-bar :message="message" @changeThemeList="changeTheme">
    </navigation-bar>
    <transition name="fade">
      <side-bar id="sidebar" v-if="showSideBar"
          @mouseout="false"></side-bar>
    </transition>
    <transition>
      <write-page class="write_page" v-if="writing"></write-page>
    </transition>
    <date-message class="date" v-if="showDate"></date-message>
    
    <!-- <img src="./images/th (10).jpg" alt=""> -->
    <div class="list">    
        
      <router-link to="/student" class="tab" active-class="isactive">Home</router-link>            
      <router-link to="/person" class="tab" active-class="isactive">HTML</router-link>
      <router-link to="/css" class="tab" active-class="isactive">CSS</router-link>
      <router-link to="/javascript" class="tab" active-class="isactive">Javascript</router-link>
      <router-link to="/canvas" class="tab" active-class="isactive">Canvas</router-link>
      <router-link to="/jqeury" class="tab" active-class="isactive">jQeury</router-link>
      <router-link to="/vuelist" class="tab" active-class="isactive">VUE</router-link>
      <router-link to="/bootstrap" class="tab" active-class="isactive">Bootstrap</router-link>
      <router-link to="/elementui" class="tab" active-class="isactive">Element-UI</router-link>
      <router-link to="/ajax/jack" class="tab" active-class="isactive">AJAX</router-link>
  </div>
    <br>
    <router-view class="tab-show" @change-background="changeBackground"></router-view>
    
    <img src="./images/tree.png" alt="" class="img2">
  </div>
</transition>
</template>

<script>
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import DateMessage from './components/DateMessage'
import WritePage from './components/WritePage';
import $ from 'jquery';
import {ref,provide} from 'vue'
// import {ref} from 'vue';
  export default{
    name:'app',
    components:{
      NavigationBar,
      SideBar,
      DateMessage,
      WritePage
    },
    data(){
      return{
        message:'我是导航栏',
        isDarkTheme:false,
        bgImage:ref('./images/2862884-20230604121820115-1008318392 (1).png')
        
      }
    },
    methods:{
      changeTheme(){
        this.isDarkTheme=!this.isDarkTheme;
        console.log('hello')
        
      },
      changeBackground(newImageUrl) {
        this.bgImage = newImageUrl;
        console.log(this.bgImage)
    },
    login(){
      this.showLogin=!this.showLogin
    }
    },
    
    
    setup(){
      const showSideBar=ref(false);
      const showDate=ref(false);
      const writing=ref(false)
      provide('showSideBar',showSideBar)
      provide('showDate',showDate)
      provide('writing',writing)
      var a_idx = 0;
      const jQuery=$;
      jQuery(document).ready(function($) {
          $("#app").click(function(e) {
        var a = new Array("❤️黄国佳❤️","ivanlee","✨吃好喝好～✨","🏀CUHK🏀","🍕Regina🍕","REGINA❤️IVANLEE","😍HuangGuoJia😍","🉑东山再起🉑","😶‍🌫️(๑′ᴗ‵๑)😶‍🌫️ 千千Ｉ Lᵒᵛᵉᵧₒᵤ❤");
              var $i = $("<span></span>").text(a[a_idx]);
              a_idx = (a_idx + 1) % a.length;
              var x = e.pageX,
              y = e.pageY;
              $i.css({
                  "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
                  "top": y - 20,
                  "left": x,
                  "position": "absolute",
                  "font-weight": "bold",
                  "color": "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"
              });
              $("#app").append($i);
              $i.animate({
                  "top": y - 180,
                  "opacity": 0
              },
              1500,
              function() {
                  $i.remove();
              });
          });
        });
      return{showSideBar,showDate,writing}
    }
  
  }
</script>
<style scoped>
  .tab {
    
    color: #9bc4cb;
    
    font-family: 'Courier New', Courier, monospace;
    margin-left: 30px;
  text-decoration: none;
    
  }
  .tab:hover{
    transform: translateX(5px);
    color:rgb(170, 253, 226);
    border-bottom:1px solid rgb(182, 241, 222);
  }
  .isactive {
    color:rgb(18, 245, 169);
    border-bottom:1px solid rgb(45, 246, 132);
  }
  .tab-show{
    animation: show 1s ease;
    
  }
    @keyframes show{
      0%{
        opacity: 0;
        transform: translateY(-80px)
      }
      50%{
        opacity: 0.3;
        transform: translateY(-50px)

      }
      100%{
        opacity: 1;
        transform: translateY(0)

      }
    } 
  #app{
    background: url('./images/2862884-20230604121820115-1008318392 (1).png');
    background-size:100% 100%;
    background-repeat: no-repeat;
    position:fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
  /*主题切换*/
  .active {
    filter:brightness(60%);
    color:rgb(18, 245, 169);
    
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
  .list {
    width: 80%;
    margin-left: 9%;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
  }
  .img2 {
    position: absolute;
    width: 160px;
    height: 160px;
    bottom: 20px;
    right: 20px;
    animation: show 2s ease;
    filter:drop-shadow(0 0 10px #0790b6);
  }
  .theme-transition-enter-active, .theme-transition-leave-active {
    transition: background-color 0.5s ease; /* 设置过渡动画的属性、持续时间和速度曲线 */
  }
  .theme-transition-enter, .theme-transition-leave-to {
    background-color: transparent; /* 设置切换时的背景颜色 */
  }
  .date {
    position:absolute;
    top:50px;
    color: #83eef4;
    right: 10px;
    width:420px;
    text-align: center;
    line-height: 20px;
    height: 250px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
    transition: transform 2s ease;
}
.fade-enter, .fade-leave-to {
    transform: translateX(-100%);
    opacity: 0;
}
/*文章模块*/
.write_page {
  position:absolute;
  top:0px;
  right: 0px;
  
}
</style>