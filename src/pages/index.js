import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  const [date, setDate] = useState(null);
  useEffect(() => {
    async function getDate() {
      const res = await fetch('/api/date');
      const newDate = await res.text();
      setDate(newDate);
    }
    getDate();
  }, []);
  return (
    <main>
      <Helmet>
        <title>GitHub Android Card</title>
      </Helmet>
      <h1>GitHub Android Card</h1>
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
      <p>
        
      </p>
      <br />
      <h2>Sample</h2>
      <img alt="github android card sample" style={{width: "400px", height: "160px", display: "block", "marginLeft": "auto", "marginRight": "auto"}} src="http://localhost:3000/api/gplay-apps/khubite.appspot.com.sgtvguide"></img>
    </main>
  );
}

export default Index;
