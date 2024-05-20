import {
	defineConfig
} from 'vitepress'
import autoNav from "vite-plugin-vitepress-auto-nav";

export default defineConfig({
	lang: 'zh-CN',
	lastUpdated: true,
	title: "斯坦福哲学百科全书简体中文版",
	description: "斯坦福哲学百科全书",
	 markdown: {
    math: true,
        config(md) {
      const defaultCodeInline = md.renderer.rules.code_inline!
      md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
        tokens[idx].attrSet('v-pre', '')
        return defaultCodeInline(tokens, idx, options, env, self)
      }
    }
  },
	head: [
		['meta', {
			name: 'keywords',
			content: ''
		}],
		['link', {
			rel: 'icon',
			href: '/.vitepress/public/favicon.ico'
		}],
		[
			'script',
			{
				async: '',
				src: 'https://www.googletagmanager.com/gtag/js?id=TAG_ID'
			}
		],
		[
			'script',
			{},
			`window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'TAG_ID');`
		],
	],
	rewrites: {
		'README.md': 'index.md',
	},
	themeConfig: {
    siteTitle: '斯坦福哲学百科全书',
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

		logo: {
			src: '/.vitepress/public/logo.svg',
			width: 24,
			height: 24
		},
		nav: [{
				text: '斯坦福哲学百科全书简体中文版-分类目录',
				link: 'mu-lu-s.md'
			},
			{
				text: '原版目录（A-Z）',
				link: 'SUMMARY.md'
			},
		],
		base: '/',
		editLink: {
			text: '在 GitHub 上编辑此页面',
			pattern: 'https://github.com/taophilosophy/SEP-CN/edit/main/:path'
		},
		outline: {
			label: '此页目录'
		},
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium'
			}
		},
	},

	vite: {
		plugins: [autoNav({
			summary: {
				target: "doc/mu-lu-s.md",
				collapsed: false,
			}
		})],
	},
})
