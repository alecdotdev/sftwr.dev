import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "sftwr.dev",
  head: [['link', { rel: 'icon', href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⌨️</text></svg>' }]],
  description: "A Software Development Webpage",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Contribute', link: '/about/contribute' },
    ],

    sidebar: [
      {
        text: 'About',
        items: [
        
          { text: 'Contribute', link: '/about/contribute' },
        ]
      }
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/alecames/sftwr.dev' }
    ]
  }
})
