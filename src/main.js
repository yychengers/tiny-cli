const process = require('process');
const path = require('path');
const { join } = require('path');


const program = require('commander');

const { orderList }= require('./utils/common');
const { version } = require('../package.json')

const { create } = require('./create');


// Object.keys(orderList).forEach((order) => {
//   program
//     .command(order) //配置命令的名字
//     .alias(orderList[order].alias) // 命令的别名
//     .description(orderList[order].description) // 命令对应的描述
//     .option('-p | --path <path>', '准备将你的项目放置在哪个目录下')
//     .action((result, options) => {
//       console.log(options, 'options');
//       if (order === '*') {
//         //访问不到对应的命令 就打印找不到命令
//         console.log(orderList[order].description);
//       } else {
//         require(path.join(__dirname, order))(...process.argv.slice(3));  
//       }
//     });
// });

program
  .command('create')
  .alias('c')
  .description('创建一个项目')
  .option('-p | --path <path>', '目录？')
  // .option() 各种需要的参数配置
  .action((option) => {
    // require(path.join(__dirname, 'create'))(...process.argv.slice(3));
    console.log(process.argv, 'sss');
    const list = process.argv.slice(3);
    create(list[0], list[2]); // 这两个参数分别对应命令和目录  list[0] = 'create', list[2] = 'folderName';
  })

// 监听用户的help事件
program.on('--help',()=>{
  console.log('\nExamples:');
  Object.keys(orderList).forEach((order)=>{
    orderList[order].examples.forEach((example) => {
      console.log(`${example}`);
    })
  })
})


program.version(version);

program.parse(process.argv);

let options = program.opts();

// 如果只执行了tiny-cli指令，相当于执行了tiny-cli --help
if (!program.args.length) {
  program.help();
}
