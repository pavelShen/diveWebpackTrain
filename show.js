// @flow

// 操作 DOM 元素，把 content 显示到网页上
export function show(content: string) {
  var f = [1,2,3].map((item)=>{
    return item * item
  })

  function square1(n: number): number {
    return n * n;
  }
  square1('2');

  window.document.getElementById('app').innerText = `Hello,${content}`;
}
