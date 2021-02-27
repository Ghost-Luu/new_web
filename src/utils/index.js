export const isFalsy = (value) => (value === 0 ? false : !value);
// !! 将value中的值转换为布尔值
// 将传入的对象中的value值为空的删除掉
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};
