import React from "react"
import locationicon from "../images/locationicon.png"

export default function Card(props){
    return(
        <>
        <div className="card">
            <img src={props.item.imageUrl} className="image" />
            <div className="subcard">
                <div className="firstline">
                    <img src={locationicon} className="locationicon" />
                    <p className="location">{props.item.location}</p>
                    <a className="maplink" href={props.item.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="title" >{props.item.title}</h1>
                <p className="date">{props.item.startDate} - {props.item.endDate}</p>
                <p className="descri">{props.item.description}</p>
            </div>
            
        </div>
        <hr className="line"      />
      </>
    )
}