// Otsikko
const Otsikko = () => {
  return <h1 className="header">Tietoa Reactista</h1>;
};

// Navigointipalkki
const Navigointi = () => {
  return (
        <nav style={{ backgroundColor: '#ccc', padding: '10px' }}>
      <ul style={{ 
        listStyle: 'none', 
        display: 'flex', 
        gap: '20px', 
        margin: 0, 
        padding: 0
        }}>
      <li style={{ cursor: 'pointer' }}>Koti</li>
        <li style={{ cursor: 'pointer' }}>Meistä</li>
        <li style={{ cursor: 'pointer' }}>Ota yhteyttä</li>
      </ul>
    </nav>
  );
};

// Sisalto
const Sisalto = () => {
  return (
   <main style={{ backgroundColor: '#FFF9C4', padding: '25px' }}>
    <h1>Tietoa Reactista</h1>
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
     <footer style={{ backgroundColor: 'green', color: 'white', textAlign: 'center', padding: '5px' }}>
      <p>© Jyri Lindroos 2024, kaikki oikeudet pidätetään</p>
    </footer>
  );
};

// Pääkomponentti
const App = () => {
  return (
    <div>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt="Reactin logo"
        style={{ width: "40px", display: "block", marginBottom: "15px" }}
        />
      <Otsikko />
      <Navigointi />
      <Sisalto />
      <Alatunniste />
    </div>
  );
};

// Renderöidään App root-elementtiin
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



