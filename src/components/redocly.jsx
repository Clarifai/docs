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
            Redoc.init(window.location.origin + '/api-spec/clarifai-v3.json', {
                theme: { colors: { primary: { main: '#0c38f6' } } },
            }, document.querySelector('#redocly-ui'));
        };

        checkRedoc(initRedoc);
    }, []);

    return (
        <div id="redocly-ui"/>
    );
}