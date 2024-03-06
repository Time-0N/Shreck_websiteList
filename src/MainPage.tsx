import {Link} from "react-router-dom";
import React from "react";

function MainPage() {
    return <div id={"MainPage"}>
        <span>Welcome to my Website</span>
    <div id={"Links"}>
        <Link to={"/characters"} id={"CharacterList"}>Charcter List</Link>

        <Link to={"/createCharacter"} id={"CreateCharacter"}>Create Character</Link>
    </div>
    </div>
}

export default MainPage;