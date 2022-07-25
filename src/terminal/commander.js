const { program } = require('commander')

// // 1. 命令式
// // 通过.command()或.addCommand()可以配置命令
program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s |  --separator <char>', 'separator character', ',')
  .action((str, options) => {
    console.log(str, options, 'xxx');
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

  
  /*
    .parse() 和 .parseAsync()
    .parse的第一个参数是要解析的字符串数组，也可以省略参数而使用process.argv。
  */
  program.parse();


// 2. options式
// Commander 使用.option()方法来定义选项，同时可以附加选项的简介。每个选项可以定义一个短选项名称（-后面接单个字符）和一个长选项名称（--后面接一个或多个单词），使用逗号、空格或|分隔。

// program
//   .option('-u | --url <url>', '您的url是个啥')
//   .option('-p | --path <path>', '您的path呢')


// program.version('1.3.3');

// program.parse(process.argv);

// const option = program.opts();
// console.log(option, 'option');

// 第四个参数是默认值
// program.option('-t, --type <type>', '给一个type的值', 'blue'); // 有默认值

// 必填选项
// program.requiredOption('-r | --require <require>', 'i am the required param...', true);


// program
//   .option('-m | --method <method>', '接口类型，post or get')
//   .option('-p | --path <path>', '手动输入的路径信息')
//   .option('-u | --url <url>', '需要配置的url');
  
// program.parse(process.argv);

// let option = program.opts();
// // { method: 'get', path: './src/index.js', url: 'htts://www.xdf.cn' }
// console.log(option, 'option');


// 3 子命令
// program.command('ccc').alias('cc').description('创建一个项目').action(() => {
//   console.log('一个子命令');
// });
