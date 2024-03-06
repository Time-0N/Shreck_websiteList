export type character = {
    id: number,
    name: string
}

function ChildComponent(character: Readonly<character>) {
    return <div className={"character"}>
        <p>{character.id} {character.name}</p>
    </div>
}

export default ChildComponent;