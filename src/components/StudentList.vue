<template>
    <div class="student">         
        <router-view class="main-show" @change-background="handleChangeBackground">
        </router-view>               
        <div class="MainNav">
            <div id="underline">
                <router-link class="tab" to="/student/main" active-class="isactive" exact>首页</router-link>
            </div>
            <div id="underline">
                <router-link class="tab" to="/student/main1" active-class="isactive">技术</router-link>
            </div>
            <div id="underline">
                <router-link class="tab" to="/student/main2" active-class="isactive">片段</router-link>                
            </div>
            <div id="underline">
                <router-link class="tab" to="/student/main3" active-class="isactive">背景</router-link>
            </div>
            <div id="underline">
                <router-link class="tab" to="/student/main4" active-class="isactive">main4</router-link>
            </div>
            <div id="underline">
                <router-link class="tab" to="/student/main5" active-class="isactive">登录</router-link>
            </div>
        </div>
        
    </div>
</template>
<style scoped> 
    .student {
        
        margin-top: 3px;
        margin-left: 200px;
        width: 1250px;
        height: 798px;
       
    }
    .main-show {
        height: 700px;
        overflow: auto;
        
        animation: show 2s ease;
    }
    .MainNav {
        position:relative;
        margin-top: 10px;
        margin-bottom: 20px;
        width: 800px;
        height: 60px;
        line-height: 60px;
        margin-left: 316px;
        
    }
        @keyframes show{
          0%{
            opacity: 0;
            transform: translateX(-90px)
          }
          50%{
            opacity: 0.3;
            transform: translateX(-40px)
    
          }
          100%{
            opacity: 1;
            transform: translateX(0)
    
          }
        } 
    .tab {
    
        color: #f9f8fb;       
      text-decoration: none;
    font-family: 'Courier New', Courier, monospace;
        
      }
      /*.tab:hover{
        transform: translateX(5px);
        color:rgb(170, 253, 226);
        border-bottom:1px solid rgb(182, 241, 222);
      }*/
      .isactive {
        color:rgb(18, 245, 169);
        border-bottom:1px solid rgb(45, 246, 132);
      }
      #underline{
        width: 80px;
          height: 30px;
          margin: 20px;
          position: relative;
          margin-left: 8px;
          text-align: center;
          line-height: 30px;
          float:left;
          
      }
      #underline>router-link{
          color: lightgrey;
          text-decoration: none;
          /* 必须有下面这三行：这可以让此“div”移到父级的中央（而不是中心与中心重合） */
          position: absolute;
          top: 50%;
          left: 50%;
          cursor: pointer;
          /* 然后再去位移 —— 上面往哪偏，这里往回移。   （正百分比是往右、下） */
          transform: translate(-50%,-50%);
      }
      #underline:after{
          content: "";
          width: 0;
          height: 2px;
          background: rgb(1, 227, 69);
          position: absolute;
          top: 100%;
          left: 50%;
          transition: all .5s;
      }
      #underline:hover:after{
          left: 0;
          width: 100%;
      }

</style>
<script>

export default{
    methods:{
        handleChangeBackground(imageUrl) {
            this.$emit('change-background', imageUrl);
            console.log(this.imageUrl)
        }
    }
}
</script>