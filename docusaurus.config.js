// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Clarifai Guide',
  tagline: 'Clarifai Guide',
  url: 'https://docs.clarifai.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',  
  favicon: 'img/favicon.ico',
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
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://github.com/Clarifai/docs/blob/main/${versionDocsDirPath}/${docPath}`,          
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-EN8LWMPFVR',
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
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({      
      algolia:{
        appId: 'E9LMD97ZH2',
        apiKey: 'bb83e0130652ea667b2a9fd12ddb974b',   
        indexName: 'clarifai',    
        insights: true, // Optional, automatically send insights when user interacts with search results    
        container: 'div',    
        debug: false // Set debug to true if you want to inspect the modal

      },
      navbar: {
        title: 'Clarifai Guide',
        logo: {
          alt: 'Clarifai',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://documenter.getpostman.com/view/30622694/2s9YkuZdro',
            label: 'Postman',
            position: 'right',
          },
          {
            href: 'https://github.com/Clarifai/docs',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/WgUvPK4pVD',
            label: 'Discord',
            position: 'right',
          },
         // {
         //   href: 'https://api.clarifai.com/api-doc/?url=https://api.clarifai.com/v2/swagger.json',
         //   label: 'Swagger API Guide',
        //    position: 'right',
        //  }
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
        additionalLanguages: ['php', 'java', 'csharp', 'objectivec', 'bash'],
      },
    }),
    plugins: [
    [
      require.resolve('docusaurus-gtm-plugin'),
      {
        id: 'GTM-5W9P7GR', // GTM Container ID
      }
    ],
    //[
      //require.resolve("@cmfcmf/docusaurus-search-local"),
      //{
        // Options here
        //indexBlog: false,
     // },
   // ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/sdk/node-api-reference',
            from: ['/nodejs-sdk/api-reference'],
          },
          {
            to: '/sdk/python-installation',
            from: ['/python-sdk/sdk-overview'],
          },
          {
            to: '/sdk/api-reference',
            from: ['/python-sdk/api-reference'],
          },
          {
            to: '/sdk/create-apps',
            from: ['/python-sdk/create-apps'],
          },
          {
            to: '/sdk/managing-datasets',
            from: ['/python-sdk/managing-datasets'],
          },
          {
            to: '/sdk/managing-inputs',
            from: ['/python-sdk/managing-inputs'],
          },
          {
            to: '/sdk/Inference-from-AI-Models/',
            from: ['/python-sdk/Inference-from-AI-Models/'],
          },
          {
            to: '/sdk/Inference-from-AI-Models/Image-as-Input',
            from: ['/python-sdk/Inference-from-AI-Models/Image-as-Input'],
          },
          {
            to: '/sdk/Inference-from-AI-Models/Text-as-Input',
            from: ['/python-sdk/Inference-from-AI-Models/Text-as-Input'],
          },
          {
            to: '/sdk/Inference-from-AI-Models/Audio-as-Input',
            from: ['/python-sdk/Inference-from-AI-Models/Audio-as-Input'],
          },
          {
            to: '/sdk/Inference-from-AI-Models/Multimodal-as-Input',
            from: ['/python-sdk/Inference-from-AI-Models/Multimodal-as-Input'],
          },
          {
            to: '/sdk/Inference-from-AI-Models/Advance-Inference-Options',
            from: ['/python-sdk/Inference-from-AI-Models/Advance-Inference-Options'],
          },
          {
            to: '/sdk/Building-Workflow-Graphs/',
            from: ['/python-sdk/Building-Workflow-Graphs/'],
          },
          {
            to: '/sdk/Building-Workflow-Graphs/Inference-from-Workflows/',
            from: ['/python-sdk/Building-Workflow-Graphs/Inference-from-Workflows/'],
          },
          {
            to: '/sdk/model-train-and-eval',
            from: ['/python-sdk/model-train-and-eval'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/',
            from: ['/python-sdk/Model-Training-Tutorial/'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/clusterer',
            from: ['/python-sdk/Model-Training-Tutorial/clusterer'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/embedding_classifier',
            from: ['/python-sdk/Model-Training-Tutorial/embedding_classifier'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/text_classifier',
            from: ['/python-sdk/Model-Training-Tutorial/text_classifier'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/text_to_text',
            from: ['/python-sdk/Model-Training-Tutorial/text_to_text'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/visual_classifier',
            from: ['/python-sdk/Model-Training-Tutorial/visual_classifier'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/visual_detector',
            from: ['/python-sdk/Model-Training-Tutorial/visual_detector'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/visual_embedder',
            from: ['/python-sdk/Model-Training-Tutorial/visual_embedder'],
          },
          {
            to: '/sdk/Model-Training-Tutorial/visual_segmenter',
            from: ['/python-sdk/Model-Training-Tutorial/visual_segmenter'],
          },
          {
            to: '/sdk/Search/',
            from: ['/python-sdk/Search/'],
          },
          {
            to: '/sdk/Search/Ranks',
            from: ['/python-sdk/Search/Ranks'],
          },
          {
            to: '/sdk/Search/Filter',
            from: ['/python-sdk/Search/Filter'],
          },
          {
            to: '/sdk/Search/Advance-Search',
            from: ['/python-sdk/Search/Advance-Search'],
          },
          {
            to: '/sdk/advance-model-operations/',
            from: ['/python-sdk/advance-model-operations/'],
          },
          {
            to: '/sdk/advance-model-operations/model-upload',
            from: ['/python-sdk/advance-model-operations/model-upload'],
          },
          {
            to: '/sdk/advance-model-operations/model-export',
            from: ['/python-sdk/advance-model-operations/model-export'],
          },
          {
            to: '/sdk/rag',
            from: ['/python-sdk/rag'],
          },
          {
            to: '/sdk/notebook-examples',
            from: ['/python-sdk/notebook-examples'],
          },
          {
            to: '/portal-guide/model-versions/',
            from: '/test/portal-guide/model-versions/'
          },
          {
            to: '/api-guide/data/create-get-update-delete',
            from: '/api-guide/data/cloud-storage'
          }

        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/community')) {
            // Redirect from /community/X to /portal-guide/X
            return existingPath.replace('/community', '/portal-guide');
          }
          return undefined; // Return a falsy value: no redirect created
        },
      },
    ],
  ],
};

module.exports = config;
