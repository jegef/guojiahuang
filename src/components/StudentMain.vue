<template>
    <div class="main">
        <p>STATE OF WEB</p>
        <p>IvanLee</p>
        <p>Love is Eternal,Sincere,Unconditional</p>
        <p>
            Laracon is back for 2024. The flagship Laravel event of the year and the largest PHP conference in the United States is heading to Deep Ellum, Dallas for two days of learning and networking with the Laravel community. Come away ready to build something amazing. Want to speak? 
        </p>
    </div>
</template>
<script>
export default{}
</script>
<style>
@font-face {
    font-family: 'Myfont';
    src: url('../assets/fonts/c9c0297e4c7ce490c7d2.woff2');
}
@font-face {
    font-family: 'Myfont1';
    src: url('../assets/fonts/23acec2d6d85d0552879.woff2');
}
.main {
    text-align: center;
    color: #dff6f5;
    height: 600px;

}
.main p:nth-child(1){
    font-size: 90px;
    font-family:'Myfont1';
    text-shadow: -1px 1px #b0eff4,
                        -2px 2px #4596f3,
                        -3px 3px #5048f2,
                        -4px 4px #bf55f8,
                        -5px 5px #b00672,
                        -10px 10px 3px rgba(34, 248, 191, 0.533);
    background-image: -webkit-linear-gradient(left,blue,#66ffff 10%,#cc00ff 20%,#CC00CC 30%, #CCCCFF 40%, #00FFFF 50%,#CCCCFF 60%,#CC00CC 70%,#CC00FF 80%,#66FFFF 90%,blue 100%);
	-webkit-text-fill-color: transparent;
	-webkit-background-clip: text;
	-webkit-background-size: 200% 100%; 
	-webkit-animation: masked-animation 2s linear infinite;
}
@keyframes masked-animation {
    0% {
        background-position: 0  0;
    }
    100% {
        background-position: -100%  0;
    }
}
.main p:nth-child(2){
    font-size: 56px;
    font-family: 'Myfont1';
}
.main p:nth-child(3){
    font-size: 36px;
    font-family: 'Myfont';
}
.main p:nth-child(4){
    width: 900px;
    margin-top: 100px;
    margin-left: 175px;
    font-size: 20px;
    font-family: 'Courier New', Courier, monospace;
    line-height: 30px;
}
</style>
