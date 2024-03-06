import React, {useState} from "react";
import {Link} from "react-router-dom";


type CharacterProps = {
    callback: (newValue: CharacterFormInputType) => void;
    lastId: number;
}

export type CharacterFormInputType = {
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

function MyForm(props: CharacterProps) {
    const [form, setForm] = useState<CharacterFormInputType>({
        id: props.lastId + 1,
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

    function handleSubmit(e: React.FormEvent)  {
        e.preventDefault();
        props.callback(form);
    }

    return (<div id={"CharacterInput"}>

    <div>
        <Link to={"/"} id={"MainPage"}>Back to Home</Link>
    </div>
        <form onSubmit={handleSubmit} >
        <input disabled={true} value={form.id} name={"id"} placeholder={"id..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"name"} placeholder={"name..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"status"} placeholder={"status..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"species"} placeholder={"species..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"type"} placeholder={"type..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"gender"} placeholder={"gender..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"origin"} placeholder={"origin..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"location"} placeholder={"location..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"image"} placeholder={"image..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"episode"} placeholder={"episode..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"url"} placeholder={"url..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>
        <input name={"created"} placeholder={"created..."} onChange={(e) => {
            onChangeValues(e.target.name, e.target.value);
        }}/>

        <button type={"submit"}>Submit Character</button>
    </form>
    </div>);
};

export default MyForm;
