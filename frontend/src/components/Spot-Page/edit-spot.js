import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import {UpdateASpot} from "../../store/spots"
import "./edit-spot.css"

export function UpdateForm({id}) {
    const singleSpot = useSelector((state) => state.Spot.spots);
    const dispatch = useDispatch()
    const [address,setAddress] = useState("");
    const [price,setPrice] = useState("");
    const history = useHistory()
   let spot = Object.assign({}, ...singleSpot)
   let userId = spot.userId
   let name =spot.name
   let city = spot.city
   let lat= spot.lat
   let lng= spot.lng
   let image_url = spot.image_url
    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {name,price,userId,address,city,lat,lng,image_url}
         dispatch(UpdateASpot(payload,id))
         history.push(`/spot-page/${id}`)

    }

    return (
        <div>
        <form className="SongForm" onSubmit={handleSubmit}>
            <label className="noteForms">
                <input
                    id='name'
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="New address"
                    required
                />
                 </label>
                 <label className="noteForms">
                <input
                    id='price'
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="New Price"
                    required
                />
                 </label>
            <button id="submit" type="submit">Edit spot </button>
        </form>
        </div>
    )
}
