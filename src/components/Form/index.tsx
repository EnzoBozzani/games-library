import { useState } from "react";

export default function Form(props: {addGame: Function}) {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (ev: any) => {
        ev.preventDefault();
        props.addGame({ title, cover });
        setTitle('');
        setCover('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend className="text-center">Add New Game</legend>
                <div className="mb-3">
                    <label htmlFor="title">Game Title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="(e.g Assassin's Creed)"
                        id="title"
                        value={title}
                        onChange={ev => setTitle(ev.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="basic-url" className="form-label">Cover Image URL:</label>
                    <div className="input-group mx-auto">
                        <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                        <input
                            type="text"
                            className="form-control"
                            id="basic-url"
                            aria-describedby="basic-addon3 basic-addon4"
                            value={cover}
                            onChange={ev => setCover(ev.target.value)}
                            placeholder="Paste link here"
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-primary add-btn">
                    Add Game
                </button>
            </fieldset>
        </form>
    )
}