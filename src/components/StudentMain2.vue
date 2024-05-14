<!-- eslint-disable no-unused-vars -->
<template>
    <div class="main2">
        <div id="main_left">
            <p>
                到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有什么要紧的了。他踌躇了一会，终于决定还是自己送我去。我再三劝他不必去；他只说：“不要紧，他们去不好！”

我们过了江，进了车站。我买票，他忙着照看行李。行李太多，得向脚夫行些小费才可过去。他便又忙着和他们讲价钱。我那时真是聪明过分，总觉他说话不大漂亮，非自己插嘴不可，但他终于讲定了价钱；就送我上车。他给我拣定了靠车门的一张椅子；我将他给我做的紫毛大衣铺好座位。他嘱我路上
            </p>
        </div>
        <div id="main_right">
            <pre><code class="language-javascript" v-html="highlightedCode"></code></pre>
        </div>
    </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css'; // 引入高亮样式

export default{
    data(){
return{
code:`   <template>
    <transition name="theme-transition">
    <div id="app" :class="{'active':isDarkTheme}"> 
            <navigation-bar :message="message" @changeThemeList="changeTheme">
            </navigation-bar>
            <!-- <img src="./images/th (10).jpg" alt=""> -->
            <div class="list">    
                
            <router-link to="/student" class="tab" 
            active-class="isactive">Home</router-link>            
            <router-link to="/person" class="tab" 
            active-class="isactive">HTML</router-link>
            <router-link to="/css" class="tab" 
            active-class="isactive">CSS</router-link>
            <router-link to="/javascript" class="tab" 
            active-class="isactive">Javascript</router-link>
            <router-link to="/canvas" class="tab" 
            active-class="isactive">Canvas</router-link>
            <router-link to="/jqeury" class="tab" 
            active-class="isactive">jQeury</router-link>
            <router-link to="/vuelist" class="tab" 
            active-class="isactive">VUE</router-link>
            <router-link to="/bootstrap" class="tab" 
            active-class="isactive">Bootstrap</router-link>
            <router-link to="/elementui" class="tab" 
            active-class="isactive">Element-UI</router-link>
            <router-link to="/ajax/jack" class="tab" 
            active-class="isactive">AJAX</router-link>
        </div>
            <br>
            <router-view class="tab-show"></router-view>
            
            <img src="./images/tree.png" alt="" class="img2">
        </div>
        </transition>
        </template>

        
        import NavigationBar from './components/NavigationBar';

        // import {ref} from 'vue';
        export default{
            name:'app',
            components:{
            NavigationBar
            },
            data(){
            return{
                message:'我是导航栏',
                isDarkTheme:false,
            }
            },
            methods:{
            changeTheme(){
                this.isDarkTheme=!this.isDarkTheme;
                console.log('hello')
            },
            
            }
        }        
    

        `,
        highlightedCode: ''
    }
    },
    mounted(){
        this.highlightedCode=hljs.highlightAuto(this.code).value;
    }
    
}
</script>
<style>
    #main_left {
        position:relative;
        width: 425px;
        height: 700px;
        float:left;
        font-family: 'Courier New', Courier, monospace;
        overflow: auto;
        color: #f9f7f7;
        background: rgba(0,8,0,0.8);
        font-size: 22px;
        line-height: 40px;
    }
    #main_right {
        position:relative;
        width: 825px;
        height: 100%;
        float:left;
        background: rgba(0,8,0,0.8);
        overflow: auto;
    }
     /* 隐藏纵向滚动条 */
 ::-webkit-scrollbar {
    width: 0.3px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 0.5px;
  }
  
  /* 隐藏横向滚动条（如果有） */
  ::-webkit-scrollbar-horizontal {
    display: none;
    width:  0.3px;
  }
  pre code {
    display: block;
    padding-right: 100px;
    font-size:20px;
    color: #65f8f6;
    line-height: 25px;
  }
</style>