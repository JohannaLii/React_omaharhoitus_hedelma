// Navigointipalkki-komponentti
const Navigointi = () => {
  return (
    <nav>
      <ul style={{ listStyleType: "none", display: "flex", gap: "20px", padding: 0 }}>
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

// Hedelmälista-komponentti
const HedelmaLista = () => {
  const hedelmat = ["Omena", "Banaani", "Kiivi", "Appelsiini", "Vesimeloni"];

  return (
    <div>
      <h1>Hedelmiä, joista pidän</h1>
      <ul>
        {hedelmat.map((hedelma, index) => (
          <li key={index}>{hedelma}</li>
        ))}
      </ul>
      <Sisalto />
    </div>
  );
};

// Pääkomponentti, jossa käytetään Navigointi- ja HedelmaLista-komponentteja
const App = () => {
  return (
    <div>
      <Navigointi />
      <HedelmaLista />
    </div>
  );
};

// Renderöidään App root-elementtiin
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

