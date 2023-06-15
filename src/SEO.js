import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEO({title, description, themeColor, name, type, canonical}) {
    return (
        <Helmet>
            { /* Standard metadata tags */ }
            <title>{title}</title>
            <link rel="canonical" href={canonical}/>
            <meta name="description" content={description}/>
            <meta name="theme-color" content={themeColor}/>
            { /* End standard metadata tags */ }
            { /* Facebook tags */ }
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:site_name" content={name}/>
            <meta property="og:description" content={description}/>
            { /* End Facebook tags */ }
            { /* Twitter tags */ }
            <meta name="twitter:creator" content={name}/>
            <meta name="twitter:card" content={type}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            { /* End Twitter tags */ }
        </Helmet>
    )
}