const ora = require('ora');
const axios = require('axios');
const { promisify } = require('util');
let downloadGit = require('download-git-repo');

downloadGit = promisify(downloadGit);

const downDir = async (obj) => {
  let project = `orgyyc/${obj.repo}`;
  let dest = obj.path ? `${obj.path}/${obj.name}` : `./${obj.name}`;
  

  await downloadGit(project, dest);
  
  return dest;
};


// 根据我们想要实现的功能配置执行动作，遍历产生对应的命令
const orderList = {
  create: {
    alias: 'c', // 别名
    description: '创建一个项目',
    examples: [
      'demo-cli create <project-name>'
    ]
  }
};

const getRepoList = async () => { 
  // 获取当前组织中的所有仓库信息
  // 这有一篇文:https://segmentfault.com/a/1190000015144126
  const { data } = await axios.get('https://api.github.com/orgs/orgyyc/repos');
  return data;
};

// 封装loading效果
const loadingFn = async (fn, message, obj) => { 
  const spinner = ora(message);
  spinner.start();
  
  let result;
  if (obj) {
    result = await fn(obj);
  } else {
    result = await fn();
  }
  
  spinner.succeed(); // 结束loading
  return result;
};


module.exports = {
  orderList,
  loadingFn,
  getRepoList,
  downDir
};