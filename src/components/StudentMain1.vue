<template>
    <div>
        <div class="main1_1" ref="echartsContainer" >
        
        </div>
        <div class="main1_2" ref="echartsContainer1"></div>
    </div>
    
</template>
<script>
import * as echarts from 'echarts';
export default{
    name:'echartsComponent',
    mounted(){
        var myChart=echarts.init(this.$refs.echartsContainer);
        myChart.setOption({            
            title:{
                text:'本站技术',
                textStyle:{
                    color:'#d0f0ec'
                }
            },
            
            tooltip:{},
            xAxis:{
                type: "category",
                data:['CSS','Echarts','Vue', 'jQeury', 'Element-Ui', 'javascript']
            },
            yAxis:{
                type:'value'
            },
            series:[
                    {
                        name:'含量',
                        type:'bar',
                        data:[22,15,36,29,10,12],
                        barstyle:{
                            color:'white',
                            opacity: 0.5,
                            
                        },
                        label:{
                            show:true,
                            position:'top'
                        },
                        itemStyle:{
                            color:function(params){
                                 // params 是当前数据项的信息
                                // 你可以根据数据项的值或其他属性来返回不同的颜色
                                // 这里我们简单地根据数据项的值来设置颜色
                                var colorList = ['#c23531','#2f4554','#61a0a8','#d48265','#91c7ae','#749f83','#ca8622','#bda29a','#6e7074','#546570','#c4ccd3'];
                                return colorList[params.dataIndex];
                            }
                        }
                    }
            ]
            
        });
        this.drawPieEcharts()
    },
    methods:{
        drawPieEcharts(){
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(this.$refs.echartsContainer1);
            // 指定图表的配置项和数据
            var option = {
            title: {
                text: '本站点用户访问来源',
                subtext: '数据统计',
                left: 'center',
                textStyle:{
                    color:'#d0f0ec'
                },
                subtextStyle:{
                    color:'#d0f0ec'
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ],
                    emphasis: {
                        itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.8)',
                        
                        }
                    },
                    piestyle:{
                        opacity: 0.5

                    }
                }
            ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
        }
    }
}
</script>
<style>
.main1_1 {
    position:relative;
    float:left;
    width: 600px;
    height: 600px;
    margin-top: 40px;
    margin-left: 20px;
    color: #d0f0ec;

}
.main1_2 {
    position:relative;
    float:left;
    width: 600px;
    height: 600px;
    margin-top: 100px;
    margin-left: 20px;
    color: #d0f0ec;
    
}
</style>