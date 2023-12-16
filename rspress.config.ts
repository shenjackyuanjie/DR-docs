import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Difficult-Rocket-docs',
  description: 'Diffuclt Rocket 的文档',
  icon: "/icon.png",
  logo: "/icon.png",
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/shenjackyuanjie/DR-docs' },
      { icon: 'github', mode: 'link', content: 'https://github.com/shenjackyuanjie/Difficult-Rocket' },
    ],
  },
  markdown: {
      highlightLanguages: [
          ['py', 'python'],
          'python',
          ['cfg', 'ini'],
          'toml',
      ]
  }
});
