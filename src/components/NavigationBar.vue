<!-- eslint-disable no-undef -->
<template>
    <div  >
        <div id="changebg" @click="show_side_bar"
        >MEIZU</div>
        <div class="nav_bar" :class="{'darkStyle':light==false}">
            <div id="theme" @click="change" :style="{color:light?lightColor:darkColor}">{{light?'🔆':'🌜'}}</div>            
            <div id="Message" @click="show_date">📅</div>
        </div>
        
    </div>
</template>
<style scoped>
    .nav_bar{
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: end;
        color: #4bb8a8;        
    }

    .nav_bar div{
        width: 60px;
        height: 30px;
        margin-right: 8px;
        line-height: 35px;
        text-align: center;
        margin-top: 10px;
        border-radius: 6px;
        color: #deedf2;
        border:1px solid beige;
        letter-spacing: 2px;
        background: rgba(0,0,0,0.2);
        font-family: 'Courier New', Courier, monospace
    }
    .nav_bar div:hover {
        transform: scale(1.1);
        color: #0cf480;
    }

    .darkStyle{
        color:rgb(18, 245, 169);
    }
    #changebg {
        position:absolute;       
        width: 90px;
        height: 35px;
        text-align: center;
        line-height: 35px;
        border-radius: 6px;
        margin-top: 10px;
        margin-left: 20px;
        color: #deedf2;
        letter-spacing: 2px;
        border:1px solid rgb(252, 252, 252);
        background: rgba(0,0,0,0.2);
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
    #message {
        font-size: 29px;
    }
</style>
<script>
import {inject} from 'vue';
export default{
    name:'nav_bar',
    data(){
        return{
            light:true,
            showLogIn:false,
            lightColor:'green',
            darkColor:'white'
            
        }
    },
    props:['message'],
    emits:['changeThemeList'],
    methods:{
        test(){           
            alert('hello')

        },
        change(){
            console.log('hello');
            this.light=!this.light;
            this.$emit('changeThemeList')
        }
    },
    setup(){
        const showSideBar=inject('showSideBar');
        const showDate=inject('showDate');
        const show_side_bar=()=>{
            return showSideBar.value=!showSideBar.value
            // console.log('hello')
        }
        const show_date=()=>{
            return showDate.value=!showDate.value
        }
        return{showSideBar,show_side_bar,showDate,show_date}
    }
}

</script>