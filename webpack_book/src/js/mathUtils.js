function add(num1, num2) {
  return num1 + num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

// CommonJS模块规范
module.exports = {
  add,
  mul
}
// ES6模块导出
// export {add, mul};
