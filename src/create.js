const {
  loadingFn,
  getRepoList,
  getTagLists,
  downDir
} = require('./utils/common');

const inquirer = require('inquirer');

const create = async (projectName, path) => {
  let repos = await loadingFn(getRepoList, '正在链接您的仓库...');
  
  repos = repos.map((item) => {
    return item.name;
  });
  
  const { repo } = await inquirer.prompt([{
    type: 'list',
    name: 'repo',
    message: '选择一个你要创建的项目',
    choices: repos,
  }]);
  console.log(`我现在选择了 ${repo} 仓库`);

  const target = await loadingFn(downDir, '下载项目中', {
    repo: repo,
    name: projectName,
    path: path
  });
  console.log('下载完了...');
};

module.exports = {
  create
}

// module.exports = async (projectName) => {

//   let repos = await loadingFn(fetchRepo, '正在链接您的仓库...');
  
//   repos = repos.map((item) => {
//     return item.name;
//   });
  
//   const { repo } = await inquirer.prompt([{
//     type: 'list',
//     name: 'repo',
//     message: '选择一个你要创建的项目',
//     choices: repos,
//   }]);
//   console.log(`我现在选择了 ${repo} 仓库`);

//   const target = await loadingFn(downDir, '下载项目中', repo);
//   console.log(target, 'target')
// };