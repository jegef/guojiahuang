import mitt from 'mitt';
const emitter=mitt();
export default emitter;
// 1.触发事件API
emitter.emit('why',{name:'why',age:18});
// 2.监听事件API
emitter.on('why',(info)=>{
    console.log('why:',info)
});
// 3.取消事件
emitter.all.clear();
function onFoo(){}   

emitter.on('foo',onFoo);
    emitter.off('foo',onFoo);