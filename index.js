// Otsikko-komponentti
const Otsikko = () => {
  return <h1 className="header">Tämä on kuvaileva tapa toimia.</h1>;
};

// Navigointipalkki-komponentti
const Navigointi = () => {
  return (
    <nav>
      <hi>Johannan oma sivu</hi>
      <ul className="navigointi-lista" style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li><a href="#koti">Koti</a></li>
        <li><a href="#meista">Meistä</a></li>
        <li><a href="#yhteydenotto">Ota yhteyttä</a></li>
      </ul>
    </nav>
  );
};

// Sisalto-komponentti
const Sisalto = () => {
  return <h2>Sisältö</h2>;
};

// Alatunniste-komponentti
const Alatunniste = () => {
  return (
    <footer>
      <p>Copyright Jyri Lindroos 2024</p>
    </footer>
  );
};

// Pääkomponentti
const App = () => {
  return (
    <div>
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


