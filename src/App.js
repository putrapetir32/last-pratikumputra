import React from 'react';
import './boxmodel/app.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pamulang Resto</h1>
      </header>
      <main>
        <section>
          <h2>Paket All You Can Eat</h2>
          {/* Pilih Paket Anda Tuan */}
        </section>
        <section>
          <h2>Single</h2>
          {/* Pilih Makanan Anda */}
        </section>
      </main>
      <footer>
        <p>&copy; Pamulang Resto App</p>
      </footer>
    </div>
  );
}

export default App;


