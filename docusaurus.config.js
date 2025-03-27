// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const path = require('path');

const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clarifai Docs',
  tagline: 'Clarifai Docs',
  url: 'https://docs.clarifai.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',
  organizationName: 'clarifai',
  projectName: 'docs',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',         
          //this one also works--editUrl: 'https://github.com/Clarifai/docs/blob/main/',
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/Clarifai/docs/blob/main/${versionDocsDirPath}/${docPath}`,
          docItemComponent: require.resolve('./src/components/CustomDocItem/index.js'),
          docCategoryGeneratedIndexComponent: require.resolve('./src/components/CustomDocCategory/index.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: "GTM-5W9P7GR"
        },
        gtag: {
          trackingID: 'G-3R20NHSS5H',
          anonymizeIP: true,
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          // Pass it a path to a local OpenAPI YAML file
          {
            // Redocusaurus will automatically bundle your spec into a single file during the build
            spec: 'static/api-spec/clarifai-v3.json',
            route: '/api-reference',
          },
        ],
        theme: {
          // Change with your site colors
          primaryColor: '#a5b4fc',
        },
        config: path.join(__dirname, 'redocly.yaml'),
      },
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'E9LMD97ZH2',
        apiKey: 'bb83e0130652ea667b2a9fd12ddb974b',
        indexName: 'clarifai',
        insights: true, // Optional, automatically send insights when user interacts with search results    
        container: 'div',
        debug: false // Set debug to true if you want to inspect the modal

      },
      announcementBar: {
        id: 'support_us_' + Date.now(),
        content:
          '<span>New!</span> Deploy, Scale, and Optimize AI With Compute Orchestration <a target="_blank" rel="noopener noreferrer" href="https://www.clarifai.com/products/compute-orchestration">Read Now</a>',
        isCloseable: true,
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Clarifai Docs',
          src: 'img/logo-dark.svg',
          srcDark: 'img/logo-light.svg',
          href: '/',
        },
        items: [        
          {
            type: 'search',
            position: 'right',
          },
          
          {
            href: 'https://github.com/Clarifai/docs',
            className: "header-github-link",
            position: 'right',
            'aria-label': 'Github repository'
          },
          {
            href: 'https://discord.gg/WgUvPK4pVD',
            className: 'header-discord-link',
            position: 'right',
            'aria-label': 'Discord'
          },
          {
            href: 'https://documenter.getpostman.com/view/30622694/2s9YkuZdro',
            className: 'header-postman-link',
            position: 'right',
            'aria-label': 'Postman'
          },
          {
            href: 'https://x.com/clarifai',
            className: 'header-x-link',
            position: 'right',
            'aria-label': 'X'
          },
          {
            href: 'https://www.linkedin.com/company/clarifai/',
            className: 'header-linkedin-link',
            position: 'right',
            'aria-label': 'LinkedIn'
          },
          {
            label: 'Explore Community',
            href: "https://clarifai.com/explore",
            className: 'header-primary-cta-link',
            position: 'right',
            'aria-label': 'Explore Community'
          },
  
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Company',
            items: [
              {
                label: 'Clarifai Website',
                href: 'https://clarifai.com',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/clarifai',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/clarifaicommunity/shared_invite/zt-1jehqesme-l60djcd3c_4a1eCV~uPUjQ',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/clarifai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/clarifai',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/Clarifai/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Clarifai, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // Issue with docusaurus & Redocusaurus on loading the code theme
        // Reference: https://github.com/PrismJS/prism/issues/3458#issuecomment-1134426181
        additionalLanguages: ['php', 'java', 'csharp', 'objectivec', 'bash', 'scala'],
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true
        }
      }
    }),
  plugins: [  
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [  
          {
            to: '/getting-started/quickstart',
            from: ['/clarifai-basics/community', '/clarifai-basics/start-here-5-mins-or-less', '/clarifai-basics/quick-start/your-first-predictions', '/clarifai-basics/quick-start/your-first-visual-search-app', '/clarifai-basics/quick-start/your-first-custom-model']
          },
          {
            to: '/additional-resources/applications/',
            from: ['/clarifai-basics/applications/']
          },
          {
            to: '/additional-resources/applications/create-an-application',
            from: ['/clarifai-basics/applications/create-an-application']
          },
          {
            to: '/additional-resources/applications/application-settings',
            from: ['/clarifai-basics/applications/application-settings']
          },
          {
            to: '/additional-resources/applications/collaboration',
            from: ['/clarifai-basics/applications/collaboration']
          },
          {
            to: '/additional-resources/authentication/',
            from: ['/clarifai-basics/authentication/']
          },
          {
            to: '/additional-resources/authentication/personal-access-tokens',
            from: ['/clarifai-basics/authentication/personal-access-tokens']
          },
          {
            to: '/additional-resources/authentication/app-specific-api-keys',
            from: ['/clarifai-basics/authentication/app-specific-api-keys']
          },
          {
            to: '/additional-resources/authentication/authorize',
            from: ['/clarifai-basics/authentication/authorize']
          },
          {
            to: '/additional-resources/authentication/scopes',
            from: ['/clarifai-basics/authentication/scopes']
          },
          {
            to: '/additional-resources/authentication/factor-authentication',
            from: ['/clarifai-basics/authentication/factor-authentication']
          },
          {
            to: '/additional-resources/app-templates',
            from: ['/clarifai-basics/app-templates']
          },
          {
            to: '/additional-resources/glossary/',
            from: ['/glossary/general-ai/']
          },
          {
            to: '/additional-resources/glossary/generative-ai',
            from: ['/glossary/generative-ai']
          },
          {
            to: '/compute/models/model-upload/',
            from: ['sdk/compute-orchestration/model-upload']
          },
          {
            to: '/compute/models/model-upload/test-models-locally',
            from: ['/sdk/compute-orchestration/test-models-locally']
          },
          {
            to: '/compute/overview',
            from: ['/portal-guide/compute-orchestration/', '/sdk/compute-orchestration/']
          },
          {
            to: '/compute/deployments/clusters-nodepools',
            from: ['/portal-guide/compute-orchestration/set-up-compute', '/sdk/compute-orchestration/set-up-compute']
          },
          {
            to: '/compute/deployments/deploy-model',
            from: ['/portal-guide/compute-orchestration/deploy-model']
          },
          {
            to: '/compute/deployments/manage-compute',
            from: ['/portal-guide/compute-orchestration/manage', '/sdk/compute-orchestration/manage-compute']
          },
          {
            to: '/compute/deployments/cloud-instances',
            from: ['/portal-guide/compute-orchestration/cloud-instances']
          },

        
        ],
      },
    ],
  ],
  scripts: [
    {
      src: "/scripts/sidebar.js",
      async: true,
    },
    {
      src: "/scripts/intercomConfig.js",
      async: true,
    }
  ],
};

module.exports = config;
