import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

function ApiDoc({ layoutProps, specProps }) {
    const defaultTitle = specProps.spec?.info?.title || 'API Docs';
    const defaultDescription = specProps.spec?.info?.description || 'Open API Reference Docs for the API';
    return (
      <BrowserOnly>
        {
          () => {
            const Layout = require('@theme/Layout').default;
            const Redoc = require('@theme/Redoc').default;
            return (
              <Layout title={defaultTitle} description={defaultDescription} {...layoutProps}>
                <Redoc {...specProps} />
                <style>
                  {`
                    html[data-theme='light'] pre {
                      background-color: unset !important;
                    }
                    html[data-theme='light'] input.search-input {
                      box-shadow: unset !important;
                    }
                    html[data-theme='dark'] table tr {
                      background-color: unset !important;
                    }
                  `}
                </style>
              </Layout>
            )
          }
        }
      </BrowserOnly>
    );
}
export default ApiDoc;
