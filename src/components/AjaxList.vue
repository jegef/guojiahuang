<template>
    <div class="person">
        AJAx{{$route.params.username}}
    </div>
  </template>
  
  <script>
  import {useRoute} from 'vue-router'
  export default {
    created(){
        console.log(this.$route.params.username)
    },
    setup(){
        const route=useRoute();
        console.log(route.params.username)
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  .person {
    
    margin-top: 3px;
    margin-left: 195px;
    width: 1250px;
    height: 798px;
    text-decoration: none;
    border-radius: 20px;
    margin-bottom: 5px;
    background: rgba(0, 0, 0, 0.4);
    /*
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: inset 0 0 6px rgb(255,255,255,0.2);*/
  
  }
  </style>
  