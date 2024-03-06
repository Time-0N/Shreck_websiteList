import {useState} from "react";

type CharacterFormInputType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    }
    location: {
        name: string;
        url: string;
    }
    image: string;
    episode: string[];
    url: string;
    created: string;
}

function MyForm() {
    const [form, setForm] = useState<CharacterFormInputType>({
        id: -1,
        name: "",
        status: "",
        species: "",
        type: "",
        gender: "",
        origin: {
            name: "",
            url: "",
        },
        location: {
            name: "",
            url: "",
        },
        image: "",
        episode: [""],
        url: "",
        created: ""
    })

    const onChangeValues = (name: string, value: string | number | string[]) => {
        const newValues: CharacterFormInputType = {
            ...form,
            [name]: value,
        }

        setForm(newValues);
    }

    return <form onSubmit={() => {
    }
    }>
        <input name={"id"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"name"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"status"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"species"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"type"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"gender"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"origin"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"location"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"image"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"episode"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"url"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"created"} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>

        <button type={"submit"}>Submit Character</button>
    </form>
}

export default MyForm;
