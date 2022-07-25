const {
  loadingFn,
  getRepoList,
  getTagLists,
  downDir
} = require('./utils/common');

const inquirer = require('inquirer');

const create = async (projectName, path) => {
  /*
    getRepoList方法：使用github的第三方接口可以获取你所需要的仓库信息
  */
  let repos = await loadingFn(getRepoList, '正在链接您的仓库...');
  
  // 拿到仓库的名称
  repos = repos.map((item) => {
    return item.name;
  });
  
  // 最终选择的仓库名称
  const { repo } = await inquirer.prompt([{
    type: 'list',
    name: 'repo',
    message: '选择一个你要创建的项目',
    choices: repos, // 将仓库的名称传给choices数组，可以作为选项供用户选择
  }]);
  console.log(`我现在选择了 ${repo} 仓库`);

  const target = await loadingFn(downDir, '下载项目中', {
    repo: repo, // 下载repo仓库源码
    name: projectName, // 以上一步传递过来的projectName作为项目名称
    path: path // 以上一步传递过来的路径作为下载项目存放的路径
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