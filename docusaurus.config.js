module.exports = {
  title: 'SwiftUI Docs',
  tagline: 'An attempt to create SwiftUI docs like React-Native',
  url: 'https://isnifer.github.io/swift-ui-docs/',
  baseUrl: '/swift-ui-docs/',
  favicon: 'img/favicon.ico',
  organizationName: 'isnifer', // Usually your GitHub org/user name.
  projectName: 'swift-ui-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'SwiftUI Docs',
      logo: {
        alt: 'SwiftUI Docs',
        src: 'img/logo.svg',
      },
      links: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/isnifer/swift-ui-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/swift-ui-docs',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/swift-ui-docs',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/swift-ui-docs',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub', href: 'https://github.com/isnifer/swift-ui-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SwiftUI Docs, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/isnifer/swift-ui-docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/isnifer/swift-ui-docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
