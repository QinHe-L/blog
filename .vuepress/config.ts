import {defineConfig} from 'vuepress/config'

export default defineConfig({
    title:"青和的博客",
    description:"坚持重复做正确的事，你的成功的概率将从零到壹佰！",
    base: '/blog/',
    head:[
       
    ],
    themeConfig:{
        logo:"",
        nav:[
            {
                text:"首页",
                link:'/'
            }
        ],
        sidebar: [
            '/'
          ]
    },
    plugins: [
        ['@vuepress/back-to-top'], // 返回顶部
        ['@vuepress/nprogress'], // 加载进度条
      ]
})