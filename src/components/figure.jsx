import React from "react";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Figure({ src, caption }) {
    return (
        <figure style={{ border: "1px dashed rgba(0, 0, 0, .1)", padding: 20, borderRadius: "15px" }}>
            <img src={useBaseUrl(src)} alt={caption} />
            <hr style={{ margin: "5px", backgroundColor: "rgba(0, 0, 0, .2)" }} />
            <figcaption style={{ marginTop: "0px" }}>{`${caption}`}</figcaption>
        </figure>
    );
}
