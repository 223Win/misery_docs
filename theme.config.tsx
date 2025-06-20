import React from 'react'
import { useThemeConfig } from 'nextra-theme-docs'
type ThemeConfig = ReturnType<typeof useThemeConfig>
const config: ThemeConfig = {
  docsRepositoryBase: 'https://github.com/223Win/misery_docs/tree/main',
  search: true,
  darkMode: true,
  editLink: 'Last updated',
  feedback: {
    content: null,
    labels: '',
  },
  i18n: [],
  lastUpdated: <span>Last updated</span>,
  themeSwitch: {
    dark: "Dark",
    light: "Light",
    system: "System",
  },
  navigation: {
    prev: true,
    next: true,
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
    defaultOpen: false,
  },
  toc: {
    title: 'On this page',
    backToTop: false,
    float: true,
  },
}

export default config
