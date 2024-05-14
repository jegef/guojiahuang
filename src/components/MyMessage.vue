<template>
    <div class="my_message">
        <img src="../images/tree.png"/>
        <div class="message_list">
            <p>昵称：佳</p>
            <p>园龄：1年06月</p>
            <p>粉丝：{{number}}</p>
            <p>关注：1</p>
        </div>
        <div class="message_list1">
            <span>⬇️</span>
            <span>🎖️</span>
            <span>🔉</span>
           
        </div>
    </div>
</template>
<script>
import {ref} from 'vue'
    export default{
        setup(){
            const number=ref(3246);
            return{number}
        }
    }
</script>
<style scoped>
    p {
        text-decoration: none;
        padding: 0;
        margin: 0;
    }
    .my_message{
        display: flex;
        flex-direction: row;
        margin-top: 5px;
        margin-bottom: 20px;
        border-bottom: 1px solid beige

    }
    img{
        width: 100px;
        height: 100px;
        border:2px solid rgb(248, 245, 245);
        border-radius:50px;
        margin-left: 10px;

    }
    .message_list{
        margin-left: 20px;
        font-size: 13px;
    }
    .message_list p{
        margin-top: 7px;
    }
    .message_list1 {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
    }
    .message_list1 span{
        margin-top: 8px;
        margin-right: 10px;
        font-size:18px;
        border-radius:3px;
        background: rgba(158, 152, 152, 0.4)
    }
</style>