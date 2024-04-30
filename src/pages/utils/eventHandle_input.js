// 阻止中文输入法输入拼音的时候触发input事件。在input初始渲染的时候调用(初始化的时候)
// elem (必填且是dom节点实例)：input元素  callback：input事件绑定的回调

function eventHandleInput(elem, callback = () => { }) {
  let isComposing = false   // 开关：是否正在输入拼音

  elem.addEventListener('compositionstart', function (event) {
    isComposing = true;
  })

  elem.addEventListener('compositionend', function (event) {
    isComposing = false;
    handleInput(event.target.value);
  })

  elem.addEventListener('input', function (event) {
    handleInput(event.target.value);
  })
  // 事件处理函数
  function handleInput(val) {
    if (isComposing) return;
    console.log('input变化值', val);
    callback(val);
  }
}
export default eventHandleInput
// 注意，在每次compositionstart 或 compositionend 事件执行的时候input 事件也会执行，且input事件是在其之前的时候执行的。

// 实现思路:compositionstart 或 compositionend 事件,通过定义一个变量来判断什么时候来执行input 事件处理函数
