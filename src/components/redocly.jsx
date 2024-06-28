import React, { useEffect } from "react";

export default function Redocly() {
    useEffect(() => {
        const checkRedoc = (callback, retries = 10, interval = 100) => {
            if (typeof Redoc !== 'undefined') {
                callback();
            } else if (retries > 0) {
                setTimeout(() => checkRedoc(callback, retries - 1, interval), interval);
            } else {
                console.error('Redoc is not available after multiple retries.');
            }
        };

        const initRedoc = () => {
            Redoc.init(window.location.origin + '/api-spec/clarifai.yml', {
                theme: {
                    typography: {
                        fontSize: getComputedStyle(document.documentElement).getPropertyValue('--ifm-font-size-base').trim(),
                        fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--ifm-font-family-base').trim(),
                        headings: {
                            fontFamily: getComputedStyle(document.documentElement).getPropertyValue('--ifm-font-family-base').trim(),
                            fontWeight: getComputedStyle(document.documentElement).getPropertyValue('--ifm-heading-font-weight').trim(),
                            lineHeight: getComputedStyle(document.documentElement).getPropertyValue('--ifm-heading-line-height').trim(),
                        },
                    },
                    sidebar: {
                        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--ifm-background-color').trim(),
                        textColor: getComputedStyle(document.documentElement).getPropertyValue('--ifm-color-primary-lighter').trim(),
                        activeTextColor: getComputedStyle(document.documentElement).getPropertyValue('--ifm-color-primary-darker').trim(),
                    },
                    rightPanel: {
                        backgroundColor: getComputedStyle(document.documentElement).getPropertyValue('--ifm-code-background').trim(),
                        textColor: getComputedStyle(document.documentElement).getPropertyValue('--ifm-color-primary-lighter').trim(),
                        servers: {
                            overlay: {
                                textColor: getComputedStyle(document.documentElement).getPropertyValue('--ifm-color-primary-darker').trim(),
                            }
                        }
                    },
                },
            }, document.querySelector('#redocly-ui'));
        };

        checkRedoc(initRedoc);
    }, []);

    return (
        <>
            <div id="redocly-ui"/>
            <style>{`table td:nth-child(2) {
                    padding-left: 14px !important;
                }`}
            </style>
        </>
    );
}