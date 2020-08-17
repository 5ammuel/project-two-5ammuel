import React from 'react'
import Cardmap from "./Cardmap";
import Header from "./Header";
import './App.css';

function App() {
  return (
    <main className="home">
      <header className="welcome">
        <Header />
      </header>
      <section>
        <Cardmap />
      </section>
    </main>
  );
}

export default App;
