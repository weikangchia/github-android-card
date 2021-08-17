import React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  return (
    <main>
      <Helmet>
        <title>GitHub Android Card</title>
      </Helmet>
      <h1><a href="https://github.com/weikangchia/github-android-card">GitHub Android Card</a></h1>
      <h2>
        Deployed with{' '}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vercel
        </a>
        !
      </h2>
      <h3>To display it in your GitHub README file</h3>
      
      <p>![Readme Card](https://github-android-card.vercel.app/api/gplay-apps/com.appspot.khubite.sgsupermarket)</p>
      
      <h2>Sample</h2>
      <img alt="github android card sample" style={{width: "400px", height: "160px", display: "block", "marginLeft": "auto", "marginRight": "auto"}} src="/api/gplay-apps/khubite.appspot.com.sgtvguide"></img>
    </main>
  );
}

export default Index;
