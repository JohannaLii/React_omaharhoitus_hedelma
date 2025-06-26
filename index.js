// Ylatunniste
const Ylatunniste = () => {
  return (
    <header style={{ backgroundColor: 'darkblue', padding: '15px' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Reactin logo"
        style={{ width: "40px", display: "block", marginBottom: "10px" }}
      />
      <h1 style={{ margin: 0 }}>Tietoa Reactista</h1>
      <nav>
        <ul style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: '10px 0'
        }}>
          <li style={{ cursor: 'pointer' }}>Koti</li>
          <li style={{ cursor: 'pointer' }}>Meistä</li>
          <li style={{ cursor: 'pointer' }}>Ota yhteyttä</li>
        </ul>
      </nav>
    </header>
  );
};

// Paateksti tieoa Reactista
const Paateksti = () => {
  return (
    <main style={{ backgroundColor: '#fafafa', padding: '20px' }}>
      <ul>
        <li>Julkaistiin ensimmäisen kerran 2013</li>
        <li>Alunperin Jordan Walken luomus</li>
        <li>Reactilla on yli 100K tähteä Gitissä</li>
        <li>On Facebookin ylläpitämä</li>
        <li>Toimii moottorina tuhansille ohjelmille, myös mobiilisoftille</li>
      </ul>
    </main>
  );
};

// Alatunniste
const Alatunniste = () => {
  return (
    <footer style={{
      backgroundColor: 'green',
      color: 'white',
      textAlign: 'center',
      padding: '10px'
    }}>
      <p>© Jyri Lindroos 2024, kaikki oikeudet pidätetään</p>
    </footer>
  );
};

// App
const App = () => {
  return (
    <div>
      <Ylatunniste />
      <Paateksti />
      <Alatunniste />
    </div>
  );
};

// Rendeeminen
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);




