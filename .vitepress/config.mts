import {
	defineConfig
} from 'vitepress';
import autoNav from "vite-plugin-vitepress-auto-nav";
import footnote from 'markdown-it-footnote';
import mathjax3 from 'markdown-it-mathjax3';
import taskLists from 'markdown-it-task-checkbox';

export default defineConfig({

	build: {
		chunkSizeWarningLimit: 1600
	},
	sitemap: {
		hostname: 'https://taophilosophy.github.io',
	},
	lang: 'zh-CN',
	lastUpdated: true,
	title: "斯坦福哲学百科全书简体中文版",
	description: "斯坦福哲学百科全书",
	metaChunk: true,
	markdown: {
		math: true,
		image: {
			lazyLoading: true
		},
		config(md) {
			md.use(footnote);
			md.use(mathjax3);
			md.use(taskLists, {
				disabled: true,
				divWrap: false,
				divClass: 'checkbox',
				idPrefix: 'cbx_',
				ulClass: 'task-list',
				liClass: 'task-list-item',
			});
			md.renderer.rules.footnote_anchor = function render_footnote_anchor(tokens, idx, options, env, slf) {
				let id = slf.rules.footnote_anchor_name?.(tokens, idx, options, env, slf)
				if (tokens[idx].meta.subId > 0) {
					id += ':' + tokens[idx].meta.subId
				}
				return ' <a href="#fnref' + id + '" class="footnote-backref">🔼</a>'
			};
			const defaultCodeInline = md.renderer.rules.code_inline;

			md.renderer.rules.code_inline = (tokens, idx, options, env, self) => {
				tokens[idx].attrSet('v-pre', '');
				return defaultCodeInline(tokens, idx, options, env, self);
			};
		}

	},
	head: [
		['link', {
			rel: 'icon',
			href: '/favicon.ico'
		}],
		['meta', {
			name: 'keywords',
			content: ''
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
		darkModeSwitchLabel: '主题',
		lightModeSwitchTitle: '切换到浅色模式',
		darkModeSwitchTitle: '切换到深色模式',
		docFooter: {
			prev: '上一页',
			next: '下一页'
		},

		logo: {
			src: '/logo.svg',
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
			label: '此页目录',
			level: 'deep'
		},
		sidebarMenuLabel: '目录',
		lastUpdated: {
			text: '最后更新于',
			formatOptions: {
				dateStyle: 'short',
				timeStyle: 'medium'
			}
		},
	},


	vite: {
		plugins: [
			autoNav({
				summary: {
					target: "docs/mu-lu-s.md",
					collapsed: false,
				}
			})
		],
	},
})