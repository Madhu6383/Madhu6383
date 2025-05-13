// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '2rem' }}>
      <header>
        <h1>Hume’s Dictum, Grounding and the Argument from Recombination</h1>
        <p><strong>Author:</strong> Alexander Skiles</p>
        <p>
          This paper explores the tension between Hume’s Dictum and metaphysical grounding, 
          particularly through the argument from recombination.
        </p>
        <a href="/s.pdf" download style={{ color: '#007bff', textDecoration: 'none' }}>
          📄 Download PDF
        </a>
      </header>

      <section style={{ marginTop: '2rem' }}>
        <iframe
          src="/s.pdf"
          width="100%"
          height="800px"
          title="Hume’s Dictum PDF"
          style={{ border: '1px solid #ccc' }}
        ></iframe>
      </section>
    </div>
  );
}

export default App;
