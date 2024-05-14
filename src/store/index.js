import {createStore} from 'vuex';
const store=createStore({
    state(){
        return{
            counter:0,
            writeList:[],
            writeType:[]
        }
    }
})
export default store