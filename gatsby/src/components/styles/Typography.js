import { createGlobalStyle } from 'styled-components';


export const Typography = createGlobalStyle`

@import url("https://p.typekit.net/p.css?s=1&k=mok0zst&ht=tk&f=45550&a=7580181&app=typekit&e=css");

@font-face {
font-family:"allotrope";
src:url("https://use.typekit.net/af/eeda11/00000000000000007735c543/30/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff2"),url("https://use.typekit.net/af/eeda11/00000000000000007735c543/30/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("woff"),url("https://use.typekit.net/af/eeda11/00000000000000007735c543/30/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3") format("opentype");
font-display:auto;font-style:normal;font-weight:900;font-stretch:normal;
}


:root {
    --regular: 'aktiv-grotesk-condensed',sans-serif;
    --bold: 'allotrope', sans-serif;
}

.bold {
    font-family: "allotrope",sans-serif;
}
`
