import React, { useEffect } from "react"

export default function Swagger() {

    useEffect(() => {
        window.ui = SwaggerUIBundle({
            url: window.location.origin + '/api-spec/clarifai.json',
            dom_id: '#swagger-ui',
        })
    }, [])

    return (
        <></>
    )
}