import React from "react";
import './Feature.css'

const Feature = props => {
    const {title, image, description} = props

  return (<div className="itemContainer">
    <img src={image}></img>
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
  )}

export default Feature;