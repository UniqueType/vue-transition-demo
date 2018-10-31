/*
  postcss提供一种方式用JavaScript代码来处理css
  它负责把 CSS 代码解析成抽象语法树结构（Abstract Syntax Tree，AST），
  再交由插件来进行处理。插件基于 CSS 代码的 AST 所能进行的操作是多种多样的，
  比如可以支持变量和混入（mixin），增加浏览器相关的声明前缀，
  或是把使用将来的 CSS 规范的样式规则转译（transpile）成当前的 CSS 规范支持的格式
  
  postcss一般不单独使用，而是与已有的构建工具进行集成。如webpack、Grunt、Gulp
*/
let postcss = require('postcss');
let reduceCssCalc = require('reduce-css-calc');

module.exports = postcss.plugin('postcss-bpcalc', (opts) => {
  const options = Object.assign({
    precision: 5,
    preserve: false,
    warnWhenCannotResolve: false,
    mediaQueries: false,
    selectors: false
  }, opts);

  return (css, result) => {
    css.walkDecls(decl => {
      let prop = decl.prop;
      let value = decl.value;

      // console.log('{prop:' + prop + ', value: ' + value + '}');
      if (/bpcalc/.test(value)) {
        value = value.replace(/bpcalc/gi, 'calc').replace(/rpx/g, '');
        let val = reduceCssCalc(value, options.precision);

        let valArr = val.trim().split(/\s+/);
        for (let i = 0; i < valArr.length; i++) {
          valArr[i] += 'px';
        }
        // console.log('{prop:' + prop + ', value:' + val + '}');
        return decl.value = valArr.join(' ');
      }
    });
  };
});
