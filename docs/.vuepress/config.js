// const sidebar = require('./sidebar')
const jsSideBar = require('../javascript/jsSideBar')
const vueSideBar = require('../vue/vueSideBar')
const nodeSideBar = require('../nodejs/nodeSideBar')
const wxSideBar = require('../wx/wxSideBar')
const exSideBar = require('../exercise/exSideBar')
module.exports = {
    title: 'Xu\'s blog',
    description: 'Document library',
    port:'8088',
    head: [
      ['link', { rel: 'icon', href: `/logo.jpg` }],
    ],
    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: 'javascript', link: '/javascript/' },
          { text: 'vue', link: '/vue/' },
          { text: 'node.js', link: '/nodejs/' },
          { text: '微信小程序', link: '/wx/' },
          { text: '重难点', link: '/exercise/' },
          // 下拉列表的配置
          {
            text: '命令与工具',
            items: [
              { text: 'git类', link: '/tools/git/1. git 使用大全' },
              { text: '服务器类', link: '/tools/server/1. test' },
            ]
          },
          {
            text: 'more',
            items: [
              { text: 'github', link: 'https://github.com/MrXuxu' },
              { text: '码云', link: 'https://gitee.com/MrXuxu/' }
            ]
          }
        ],
        // sidebar,
        sidebar: {
          '/javascript/': jsSideBar,
          // '/javascript/': [
            // '',     /* /foo/ */
            // 'test1',  /* /foo/one.html */
            // 'test2'   /* /foo/two.html */
          // ],
    
          '/vue/': vueSideBar,
          '/nodejs/': nodeSideBar,
          // '/nodejs/': [
          //   // '',     /* /foo/ */
          //   'test1',  /* /foo/one.html */
          //   'test2',   /* /foo/two.html */
          //   '1. Node.js 介绍',
          //   '2. Node.js 读写文件',
          //   '3. http 服务',
          //   '4. 发送数据和Content-Type内容类型',
          //   {
          //     title: 'demo',
          //     collapsable: true,
          //     children: [
          //       'demo/1. 仿制接口',
          //       'demo/project1',
          //       'demo/project2'
          //     ]
          //   }
          // ],
          '/wx/': wxSideBar, 
          '/exercise/': exSideBar,
          '/tools/': [
            'git/1. git 使用大全',
            'server/1. test'
          ],
          // fallback
          '/': [
            ''        /* / */
          ]
        },
        sidebarDepth: 2, // 侧边栏显示2级

        // 在 github 上编辑此页
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'https://github.com/MrXuxu/MrXuxu.github.io',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: '查看源码',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'https://github.com/MrXuxu/MrXuxu.github.io',
        // 假如文档不是放在仓库的根目录下：
        // docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！'
        
    }
}
