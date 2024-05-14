

<template>
    <div id="search">        
        <ul id="list_UL">
            <li v-for="result in searchResults" :key="result">
                <a :href="'https://www.baidu.com/s?wd=' + result">{{ result }}</a>
            </li>
        </ul>        
      <input type="text" v-model="searchValue" @keyup="search" placeholder="请输入搜索内容" id="text"/>      
      <div @click="goToBaidu" id="sou">搜索</div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      searchValue: '',
      searchResults: []
    };
  },
  methods: {
    search() {
      this.searchResults = []; // 清空搜索结果
      if (this.searchValue.trim() !== '') {
        const script = document.createElement('script');
        script.src = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.searchValue}&cb=callback`;
        document.body.appendChild(script);
        document.body.removeChild(script);
      }
    },
    callback(data) {
      this.searchResults = data.s;
    },
    goToBaidu() {
      if (this.searchValue.trim() !== '') {
        const url = `http://www.baidu.com.cn/s?wd=${this.searchValue}&cl=3`;
        window.location.href = url;
      }
    }
  },
  created() {
    window.callback = this.callback;
  }
};
</script>
<style scoped>
a{
    text-decoration: none;
    color: #fbf9f9;
}
input{
    background-color: transparent;
    margin-top: 4px;
    width: 230px;
    height: 32px;
    border:2px solid rgb(173, 97, 244);
    border-radius: 10px;
    color: #f4efef;
    font-size: 18px;
}
#search {   
    width: 300px;
    height: 45px;
}
#sou {
    position: absolute;
    height: 34px;
    line-height: 32px;
    width: 50px;
    right: 5px;
    top: 4px;
    color: #fdfbfb;
    border:2px solid rgb(173, 97, 244);
    border-radius: 10px;
    font-size: 18px;
    text-align: center;
}
#sou:hover {
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(20px);
    box-shadow: inset 0 0 6px rgb(255,255,255,0.2);
}
#p_search {
    height: 65px;
}
#list_UL{  
    height:360px;
    width: 300px;
    overflow: scroll;  
    /* border:1px solid #ccc;   */
    position: absolute;
    right:5px ;
    bottom: 40px; 
}  
#list_UL li{  
        width:280px;  
        height:32px;  
        line-height: 32px;  
        text-indent:10px;  
        font-size: 16px;  
        list-style: none;  
        color: #fefefe;
        border: 1px solid rgb(252, 252, 251);
        border-radius: 10px;
        margin-top: 5px;
        margin-left: 5px;
        font-family: 'Courier New', Courier, monospace;
}  

#list_UL li:hover{  
    display:block;
    margin-left: 10px;
    color: #14ade5;  
    font-size: 18px;
    border: 1px solid #14ade5;
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(20px);
    box-shadow: inset 0 0 6px rgb(255,255,255,0.2); 
}  
/* 隐藏纵向滚动条 */
::-webkit-scrollbar {
    width: 1px;
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