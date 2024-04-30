import React, { useEffect, useRef } from 'react';
import { onInputOwn } from './index';

// 封装的 utils 工具的使用方式

const UtilsUse = () => {
  const inputRef = useRef()

  useEffect(() => {
    // 参数一:dom事例,且必埴,  参数二: input 事件处理回调函数
    onInputOwn(inputRef.current, () => { })
  }, [])

  return (
    <div>
      <input ref={inputRef} />
    </div>
  );
};

export default UtilsUse;

// 说明: useEffect 初始化的时候会执行两次,这是因为react的严格模式,若介意执行两次可去掉严格模式