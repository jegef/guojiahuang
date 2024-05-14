<template>
    <div class="main3">
        <!-- //壁纸模块 -->
        <div class="main_img">
            <div id="image" v-for="(item,index) in 18" :key="index"
                :style="activeStyle[index]">
                <img :src='require(`../images/th (${index}).jpg`)' 
                alt="" >
                <div class="overlay">
                    <div class="text" @click="changeBackground(index)">应用</div>
                  </div>
            </div>
        </div>
        
    </div>
</template>
<script>

export default{
    data(){
        return{
            imgs:[
                    // eslint-disable-next-line no-useless-escape
                    '../images/th(0).jpg',
                    '../images/th(1).jpg',
                    '../images/th(2).jpg',
                    '../images/th(3).jpg',
                    '../images/th(4).jpg',
                    '../images/th(5).jpg',
                    '../images/th(6).jpg',
                    '../images/th(7).jpg',
                    '../images/th(8).jpg',
                    '../images/th(9).jpg',
                    '../images/th(10).jpg',
                    '../images/th(11).jpg',
                    '../images/th(12).jpg',
                ],
            newImage:'../images/th(0).jpg',
            isActive:false,
            Index:0,
            activeStyle:{},
        }

    },
    methods:{
        changeBackground(index){
            this.newImage=this.imgs[index]            
            this.$emit('change-background', this.newImage);
            console.log(this.newImage)
            
            
            this.activeStyle={};
            this.activeStyle[index]={
                border:'3px solid lightblue'
            }        
        },
        
    },
   

}
</script>
<style>
    .main_img {
        position:relative;
        width:  80%;
        margin-left: 12%;
        background-color: rgb(195, 234, 234)
    }
    #image {
        position:relative;
        width: 300px;
        height: 200px;
        margin-top: 15px;
        margin-left: 15px;
        float:left;
        padding:0;
        overflow: hidden;
        border-radius: 10px;

    }
    #image img {
        background-size: contain;
        width: 100%;
        height: 100%;
    }
    #image img:hover{
        filter:brightness(60%);
        animation: showImg 1.5s ease;
    }
    @keyframes showImg{
        0%{
            transform: scale(1)
        }50%{
            transform: scale(1.2)
        }
        
        
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
  .overlay {
    position: absolute;
    bottom: 100%;
    left: 0;
    right: 0;
    background-color: #4bc6ef;
    overflow: hidden;
    width: 100%;
    height: 0;
    opacity:0.2;
    transition: .5s ease;
  }
  
  #image:hover .overlay {
    bottom: 0;
    height: 100%;
  }
  
  .text {
    white-space: nowrap; 
    color: rgb(0, 0, 0);
    font-size: 20px;
    position: absolute;
    overflow: hidden;
    top: 50%;
    left: 50%;
    width: 60px;
    height: 36px;
    text-align: center;
    line-height: 36px;
    border-radius:10px;
    color:purple;

    border:2px solid rgb(205, 175, 249);
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }
  .text:hover {
    color: rgb(0, 0, 0);
      border:4px solid lightblue;
  }
</style>