import "./App.scss";
import Header from "./components/Header/Header";
import PlacesHeader from "./components/PlacesHeader/PlacesHeader";

function App() {

  return (
    <>
      <div className="header-section">
        <Header></Header>
      </div>
      <div>
      <PlacesHeader></PlacesHeader>
      </div>
      
    </>
  );
}

export default App;
