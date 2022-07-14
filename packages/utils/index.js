/**
 * 检测对象是否为空
 * @param {*} obj 
 * @returns 
 */
const isEmpty = obj => Reflect.ownKeys(obj).length === 0 && obj.constructor === Object