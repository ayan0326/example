import React from "react";

export default function AuditPage() {

  // A.点击的时候触发事件-弹窗
  const myfun1 = () => {
    alert("hello word");
  };

  const myfun2 = () => {
    alert("hahahahahahaha");
  };

  const onLoad = () => {
    let test = document.getElementById("test");
    test.addEventListener("click", myfun2);
    test.addEventListener("click", myfun1);
  };

  // B.对象定义
  let obj = {}; // 打印结果继承了Object各种方法和属性
  let obj1 = Object.create(null); // 什么都没有
  // console.log(obj, '----', obj1)

  // C.this指向   apply, call, bind

  return (
    <div>
      {/* 点击的时候触发事件-弹窗 */}
      <input id="test" type="button" value="提交" onClick={onLoad} />
    </div>
  );
}
