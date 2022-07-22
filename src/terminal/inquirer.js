const inquirer = require('inquirer');

const questions = [
  {
    type: 'input',
    name: 'name',
    message: "请输入你的姓名",
  },
  {
    type: 'checkbox',
    message: '请选择您的爱好',
    name: 'hobby',
    choices: [
      {
        name: 'movie',
      },
      {
        name: 'music',
      },
      {
        name: 'eat',
      },
    ]
  },
  {
    type: 'list',
    name: 'holiday',
    message: '周末你要干啥子？',
    choices: [
      '在家困觉',
      '买点菜，整点好吃的',
      new inquirer.Separator(),
      '出去旅个游？',
      {
        name: '晒太阳',
        disabled: '我感觉这个季节干这件事有点傻',
      },
      '学习吧。。。',
    ],
  },
];
inquirer.prompt(questions).then((answer) => {
  console.log(answer, 'answer');
});