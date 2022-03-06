const getPages = require('./utils/pages');
const env = process.env.NODE_ENV === 'development' ? '' : '';

async function getConfig() {
  let config = {
    head: [
      [
        'meta',
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
        },
      ],
      ['meta', { name: 'keywords', content: '我就是这么从心如何' }],
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      // 引入 Gitalk
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.css',
        },
      ],
      ['script', { src: 'https://lib.baomitu.com/gitalk/1.7.0/gitalk.min.js' }],
      ['script', { src: 'https://lib.baomitu.com/axios/0.21.1/axios.js' }],
    ],
    title: '我就是这么从心如何',
    themeConfig: {
      displayAllHeaders: true,
      logo: '/favicon.ico',
      pages: await getPages(),
      author: '我就是这么从心如何',
      search: true,
      nav: [
        { text: '🏠 首页', link: '/index' },
        { text: '📅 归档', link: '/more/docs' },
        { text: '🏷️ 标签', link: '/more/tags' },
        {
          text: '📁 资源',
          items: [
            {
              text: '🐶 舔狗语录',
              link: '/more/dog',
            },
            {
              text: '📖 书籍推荐',
              link: '/more/book',
            },
          ],
        },
        { text: '🔧 关于', link: '/more/about' },
      ],
    },
    dest: 'public',
    base: env,
  };
  return config;
}
module.exports = getConfig();
