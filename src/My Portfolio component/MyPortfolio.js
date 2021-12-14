import React, { useEffect, useState } from "react";
import axios from "axios";
import './MyPortfolio.scss'
import { Element } from "react-scroll";
const MyPortfolio =()=>{
    const [images,setimages]=useState([])
    
    useEffect(()=>{
        axios.get("Data/Data.json").then(res=>{setimages(res.data.portfolio)})
    },[])
    const showimage = images.map((e,id)=>{return(
        <div className="imgcss" key={id}>
        <img src={e.image} alt="" />
        <p className="showimage">
            <span className="stext">Show Image</span>
            </p>
    </div>    
    )})


    return(
<Element className="myportfolio" name="portfolio">
    <p> <span>My</span> Portfolio</p>
    <div>
        <ul className="myportfoliolis">
            <li >ALL</li>
            <li >Html</li>
            <li >Photoshop</li>
            <li >Wordpress</li>
            <li >Mobile</li>
        </ul>
    </div>
    <div className="show" >

    {showimage}
    </div>
</Element>
    )
}
export default MyPortfolio