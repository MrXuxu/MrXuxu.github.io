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
          { text: 'javascript', link: '/javascript/test1' },
          { text: 'vue', link: '/vue/test1' },
          { text: 'node.js', link: '/nodejs/1. Node.js 介绍' },
          { text: '微信小程序', link: '/wx/test1' },
          { text: '重难点', link: '/exercise/syntax/11. promise' },
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
    }
}
