import DefinitionList from "./components/DefinitionList";
import Form from "./components/Form";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const fetchData = async () => {
    let response = await fetch(`${URL}${searchText}`);
    let responseData = await response.json();
    console.log(responseData);
    setData(responseData);
  };

  useEffect(
    function () {
      fetchData();
    },
    [searchText]
  );

  return (
    <div className="app">
      <header>
        <h1>FREE ONLINE DICTIONARY</h1>
      </header>
      <div className="main">
        <Form setSearchText={setSearchText} />
        <DefinitionList data={data} />
      </div>
      <footer>
        contribute on github @ <a href="https://github.com/DevilMayCry-5/dictionary-app" target='_blank' rel="noreferrer">DevilMayCry</a>
      </footer>
    </div>
  );
}

export default App;
