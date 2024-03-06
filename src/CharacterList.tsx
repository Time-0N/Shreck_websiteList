import {CharacterFormInputType} from "./CharacterFormComponent";
import ChildComponent from "./ChildComponent";
import {Link} from "react-router-dom";
import React from "react";

type CharacterProps = {
    characters: CharacterFormInputType[];
}

export default function CharacterList(props: CharacterProps) {
    return <>
    <div id={"Links"}>
        <Link to={"/"} id={"MainPage"}>Back to Home</Link>
    </div>
        {props.characters.map((c) => {
            return <ChildComponent id={c.id} name={c.name} />
        })}
    </>;
}