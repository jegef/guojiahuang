<template>
    <div class="writePage">
       <div class="writePage_main">
            <div class="writePage_main_head">
                <button class="writePage_main_head_list" @click="createPage" :disabled="IsCreate">写</button>
                <button class="writePage_main_head_list" @click="addElement('input','新input')" :disabled="IsWriting">标题</button>
                <button class="writePage_main_head_list" @click="addElement('textarea','')" :disabled="IsWriting">正文</button>
                <button class="writePage_main_head_list" @click="addElement('img','')" :disabled="IsWriting">图片</button>
                <button class="writePage_main_head_list" :disabled="IsWriting">代码</button>
                <button class="writePage_main_head_list" :disabled="IsWriting">提示</button>
                <button class="writePage_main_head_list" :disabled="IsWriting">警告</button>
                <button class="writePage_main_head_list" @click="Delete">删除</button>
                <button class="writePage_main_head_list" @click="publish">发布</button>
            </div>
            <div class="writePage_main_list">
              <div v-for="(element,index) in elements" :key="index">        
                <img v-if="element.type==='img'" :src="element.src" :alt="element.alt" >
                <button v-else-if="element.type==='button'" @click="handleButtonClick(index)">{{element.content}}</button>               
                <div v-else-if="element.type==='textarea'">
                    <textarea  class="textarea"
                    ref="inputTextarea"
                    v-model="element.content"               
                    placeholder="请输入文字..."></textarea>
                </div>

                <h3 v-else-if="element.type==='h3'">{{element.content}}</h3>             
                <input v-else-if="element.type==='input'" type="text" placeholder="请输入">
            </div>
            </div>
       </div>
       <div class="writePage_right">
            <div class="writePage_right_list" v-for="(item,index) in List" :key="index">
                <div class="writePage_right_list_t">{{TypeList[index]}}--{{item}}</div>
                <div class="writePage_right_list_b">
                    <el-button type="info"  circle>浏览</el-button>
                    <el-button type="warning"  circle>收藏</el-button>
                    <el-button type="danger"  circle @click="DeleteCreate(index)">删除</el-button>
                    
                </div>
            </div>
       </div>
       <div class="createPage" v-if="showCreatePage">
        <el-form :model="form" label-width="auto" style="max-width: 600px;color: white;margin-left:50px;margin-top:20px;">
            <el-form-item label="文章标题">
              <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="文章分类">
                <el-select v-model="form.region" placeholder="请选择文章分类">
                  <el-option label="HTML" value="HTML" />
                  <el-option label="CSS" value="CSS" />
                  <el-option label="Javascript" value="Javascript" />
                  <el-option label="VUE2" value="VUE2" />
                  <el-option label="VUE3" value="VUE3" />
                  <el-option label="jQuery" value="jQuery" />
                  <el-option label="Bootstrap" value="Bootstrap" />
                  <el-option label="Canvas" value="Canvas" />
                  <el-option label="AJAX" value="AJAX" />
                  <el-option label="Element-Plus" value="Element-Plus" />
                  <el-option label="Echarts" value="Echarts" />
                </el-select>
              </el-form-item>
            <el-form-item label="创作日期">
              <el-col :span="11">
                <el-date-picker
                  v-model="form.date1"
                  type="date"
                  placeholder="选填"
                  style="width: 100%"
                />
              </el-col>
              <el-col :span="2" class="text-center">
                <span class="text-gray-500">-</span>
              </el-col>
              <el-col :span="11">
                <el-time-picker
                  v-model="form.date2"
                  placeholder="选填"
                  style="width: 100%"
                />
              </el-col>
            </el-form-item>
            <el-form-item label="是否可见">
              <el-switch v-model="form.delivery" />
            </el-form-item>
            <el-form-item label="文章标签">
              <el-checkbox-group v-model="form.type">
                <el-checkbox value="阅读" name="type">
                  阅读
                </el-checkbox>
                <el-checkbox value="技术" name="type">
                  技术
                </el-checkbox>
                <el-checkbox value="解答" name="type">
                  解答
                </el-checkbox>
                <el-checkbox value="项目" name="type">
                  项目
                </el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="文章类型">
              <el-radio-group v-model="form.resource">
                <el-radio value="Sponsor">原创</el-radio>
                <el-radio value="Venue">转载</el-radio>
                <el-radio value="translate">翻译</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="文章摘要">
              <el-input v-model="form.desc" type="textarea" />
            </el-form-item>
            <el-form-item class="form_item">
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="createPage">Cancel</el-button>
            </el-form-item>
          </el-form>
       </div>
    </div>
</template>
<script>
import {ref,reactive} from 'vue';
import {useStore} from 'vuex';
import './WritePage.css';
import { ElMessage } from 'element-plus';
export default{
    
    setup(){
        const store=useStore();
        const List=[];
        const TypeList=[];
        const showCreatePage=ref(false);
        const selected=ref(null)
        const selected_1=ref(null);
        const count=ref(0);
        const IsWriting=ref(true)
        const IsCreate=ref(false)
        const form = reactive({
            name: '',
            region: '',
            date1: '',
            date2: '',
            delivery: false,
            type: [],
            resource: '',
            desc: '',
            })
            var inputText='';
            const elements=ref([
                
            ]);
            const addElement=(type,content,src=null,alt=null)=>{
                inputText='';
                const newElement={type,content};
                if(type==='img'){
                    newElement.src=src;
                    newElement.alt=alt;
                }
                elements.value.push(newElement);
                console.log(elements.value)
            }
            const handleButtonClick=(index)=>{
                console.log(`按钮${index+1}被点击了`)
            };
        const onSubmit = () => {
            if(form.name==''||form.region==''||form.resource==''||form.desc==''){
                ElMessage({
                    message: 'Warning, 请完善一下信息！.',
                    type: 'warning',
                })
            }else{
                count.value++;                               
                ElMessage({
                    message: 'Congrats, 创建成功！.',
                    type: 'success',
                })
                // form.desc=''
                IsCreate.value=!IsCreate.value
                IsWriting.value=!IsWriting.value
                List.push(form.desc);
                TypeList.push(form.region)
                showCreatePage.value=!showCreatePage.value
            }
            
        }
        const createPage=()=>{
            showCreatePage.value=!showCreatePage.value
        }
        const publish=()=>{
          if(elements.value.length){
            IsCreate.value=!IsCreate.value
            IsWriting.value=!IsWriting.value
            elements.value=[]
            ElMessage({
                    message: '发布成功！',
                    type: 'success',
                })
          }else{
            ElMessage({
                    message: 'Warning！请先创建并完善文章内容！.',
                    type: 'warning',
                })
          }
          
          
        }
        const Delete=()=>{
          if(elements.value.length){
            elements.value.pop(elements.value.length-1);
            ElMessage({
                    message: '删除成功！.',
                    type: 'success',
                })
          }else{
            ElMessage({
                    message: 'Warning！您还没有编辑任何文字.',
                    type: 'warning',
                })
          }      
        }
        const DeleteCreate=(index)=>{
          List.pop(List[index])
          IsCreate.value=!IsCreate.value
          IsWriting.value=!IsWriting.value
          elements.value=[]
          ElMessage({
                    message: '删除成功！.',
                    type: 'success',
                })
        }
        return{store,List,TypeList,inputText,addElement,
          handleButtonClick,elements,showCreatePage,createPage,
          selected,selected_1,form,onSubmit,count,IsCreate,
          IsWriting,publish,Delete,DeleteCreate}
    }
}
</script>
<style scoped>
    
    .writePage {
        display:flex;
        flex-direction:row;
        height: 1000px;
        width: 1350px;
        z-index:100;
    }
    .writePage_main {
        width: 1037px;
        height: 100%;
        background: rgba(134, 144, 141, 0.8);
        display:flex;
        flex-direction:column;

    }
    .writePage_right {
        display:flex;
        flex-direction: column;
        width: 310px;
        height: 100%;
        margin-left: 2px;
        background: rgba(232, 222, 237, 0.8);
        
    }
    .writePage_right_list {
        width: 300px;
        height: auto;
        margin-left: 5px;
        margin-top: 10px;
        border-radius:8px;
        border:1px solid blueviolet
    }
    .writePage_right_list_t {
      font-size:14px;
      line-height: 22px;
      padding-left: 4px;
    }
    .writePage_main_head {
        display:flex;
        flex-direction:row;
        justify-content: space-around;
        width: 100%;
        height: 6%;
        border-bottom:1px solid black;
    }
    .writePage_main_list {
        width: 100%;
        height: 89%;
        background: rgba(rgb(159, 242, 170), 0.8);
        
    }
    .writePage_main_head_list{
        width: 40px;
        height: 40px;
        font-size: 12px;
        margin-top: 10px;
        border-radius:10px;
        text-align: center;
        line-height: 40px;
        background: rgba(aquamarine,0.8)
    }
    .createPage {
        position:absolute;
        width: 700px;
        height: 500px;
        top: 200px;
        left: 160px;
        background:rgba(250, 249, 249, 0.6);
        border:1px solid blueviolet;;
        border-radius:20px;
      }
      
    
</style>