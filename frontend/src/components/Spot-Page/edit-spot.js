import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import {UpdateASpot} from "../../store/spots"

export function UpdateForm({id}) {
    const dispatch = useDispatch()
    const [name,setName] = useState("");
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {name}
        let newSpot = await dispatch(UpdateASpot(payload,id))

        if(newSpot){
            history.push(`/spot-page/${id}`)
        }
    }

    return (
        <div>
        <form className="SongForm" onSubmit={handleSubmit}>
            <label className="noteForms">
                <input
                    id='title'
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="New name"
                    required
                />
                 </label>
            <button id="submit" type="submit">Change name, and price per night</button>
        </form>
        </div>
    )
}
