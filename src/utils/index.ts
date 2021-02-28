import { useEffect, useState } from "react";

export const isFalsy = (value: unknown) => (value === 0 ? false : !value);
// !! 将value中的值转换为布尔值
// 将传入的对象中的value值为空的删除掉
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

// 封装mount
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

// 封装Debounce
export const useDebounce = (value: unknown, delay?: number): any => {
  const [newValue, setNewValue] = useState(value);
  useEffect(() => {
    //每次在value变化以后，设置一个定时器
    const timer = setTimeout(() => {
      setNewValue(value);
    }, delay);
    //每次在上一个useEffect处理完以后再运行，第一个effect的timer被第二个effect清理，最后一个无人清理
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);
  return newValue;
};
