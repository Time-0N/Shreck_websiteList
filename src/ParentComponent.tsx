import ChildComponent from "./ChildComponent";
import React, {useState} from "react";
import {response} from "./characters";
import {character} from "./ChildComponent";
import {CharacterFormInputType} from "./CharacterFormComponent";
import {Link} from "react-router-dom";

type CharacterProps = {
    characters: CharacterFormInputType[];
}

function ParentComponent(props: CharacterProps) {
    const [result, setResult] = useState<character[]>([...props.characters]);
    const [error, setError] = useState<string>();

    function levensteinDistance(str1: string, str2: string): number {
        const m = str1.length;
        const n = str2.length;



        const matrix: number[][] = Array.from({ length: m + 1}, () => Array(n + 1).fill(0));

        for (let i = 0; i <= m; i++) {
            matrix[i][0] = i;
        }

        for (let j = 0; j <= n; j++) {
            matrix[0][j] = j;
        }

        for (let i = 1; i <= m; i++) {
            for (let j = 1; j <= n; j++) {
                const point = str1[i - 1] === str2[j - 1] ? 0 : 1;
                matrix[i][j] = Math.min(
                    matrix[i - 1][j] + 1,
                    matrix[i][j - 1] +1,
                    matrix[i - 1][j - 1] + point
                );
            }
        }
        return matrix[m][n];
    }

    const filterData = (input: string) => {
        if (input.length === 0) {
            setResult(props.characters)
            return
        }
            const newData: character[] = [];
            for (let i = 0; i < props.characters.length; i++) {
                const distance = levensteinDistance(input.toLowerCase().replace(/\s/g, ""), props.characters[i].name.toLowerCase().replace(/\s/g, ""))

                console.log(distance)

                if (distance < 7) {
                    console.log(newData);
                    const value = props.characters.find((d) => {
                        if (i === 0) {
                            i++
                        }
                        return d.id === i
                    })
                    newData.push({id: value?.id || 0, name: value?.name || ""})
                }
            }
        setResult(newData);
        };


    return <div>
        <input onChange={(e) => {
            console.log(e.target.value)
            filterData(e.target.value)
        }}/>

        {error &&  <p style={{color : "red" }}>{error}</p>}

        {result.map((character, index) => {
            return <ChildComponent key={index} id={character.id} name={character.name} />
        })}

        <div id={"Links"}>
        <Link to={"/"} id={"MainPage"}>Back to Home</Link>
        </div>
    </div>
}

export default ParentComponent;