// 操作 DOM 元素，把 content 显示到网页上
export function show(content) {
  var f = [1,2,3].map((item)=>{
    return item * item
  })
  window.document.getElementById('app').innerText = `Hello,${content}`;
}
