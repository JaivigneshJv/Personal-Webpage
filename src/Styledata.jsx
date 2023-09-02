// import React from 'react'

const Styledata = () => {
  return (
    `
:root {
 --header-height: 3rem;

 
 --Color: HSL(hue, saturation, lightness);
 --hue: 0;
 --sat: 0%;
 --title-color: hsl(var(--hue), var(--sat), 20%);
 --title-color-dark: hsl(var(--hue), var(--sat), 0%);
 --text-color: hsl(var(--hue), var(--sat), 46%);
 --body-color: hsl(var(--hue), var(--sat), 98%);
 --border-rad: 1px solid rgba(0 , 0, 0, 0.1);
 --container-color-foot:#fff;
 --container-color: #fff;

 
 --body-font: "Poppins", sans-serif;

 
 --big-font-size: 3.5rem;
 --h1-font-size: 2.25rem;
 --h2-font-size: 1.5rem;
 --h3-font-size: 1.25rem;
 --normal-font-size: 1rem;
 --small-font-size: 0.875rem;
 --smaller-font-size: 0.813rem;
 --tiny-font-size: 0.625rem;

 
 --font-normal: 400;
 --font-medium: 500;
 --font-semi-bold: 600;

 
 
 --mb-0-25: 0.25rem;
 --mb-0-5: 0.5rem;
 --mb-0-75: 0.75rem;
 --mb-1: 1rem;
 --mb-1-5: 1.5rem;
 --mb-2: 2rem;
 --mb-2-5: 2.5rem;
 --mb-3: 3rem;

 
 --z-tooltip: 10;
 --z-fixed: 100;
 --z-modal: 1000;
} `

  )
}

export default Styledata
