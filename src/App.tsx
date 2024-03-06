import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from "./ParentComponent";
import MyForm, {CharacterFormInputType} from "./CharacterFormComponent";
import {Link, Route, Routes} from "react-router-dom";
import {response} from "./characters";
import CharacterList from "./CharacterList";
import MainPage from "./MainPage";


function App() {
    const [characters, setCharacters] = useState<CharacterFormInputType[]>([...response.results]);
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<MainPage/>}/>

            <Route path={"/characters"} element={<ParentComponent characters={characters}/>}/>

            <Route path={"/createCharacter"} element={<MyForm lastId={characters.length} callback={(newValue) => {
                setCharacters([...characters, newValue])
            }}/>}/>
        </Routes>
    </div>
  );
}

export default App;
