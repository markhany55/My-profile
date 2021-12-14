import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { Element } from "react-scroll";
import './Myprofile.scss'
const MyProfile =()=>{

    const[data,setdata]=useState([])
    useEffect(()=>{

        axios.get("Data/Data.json").then((res)=>{setdata(res.data.profile)})
    },[])
    const showdata=data.map((e,id)=>{
        return(
<div className="profilecontainer" key={id}>
    <p>

<span>Name </span><span> {e.Name}</span>
    </p>
    <p>

<span>Birthday</span><span>{e.Birthday}</span>
    </p>
    <p>

<span>Address</span><span>{e.Address}</span>
    </p>
    <p>

<span>Phone</span><span>{e.Phone}</span>
    </p>
    <p>

<span>Email</span><span>{e.Email}</span>
    </p>
    <p>

<span>Website</span><span className="website">{e.Website}</span>
    </p>
</div>            
        )
    })

    return(
        <Element className="profile" name="profile">
            <div className="myprofile">
<p className="prfoiletext"><span>My</span> Profile</p>

    {showdata}

            </div>
            <div className="someskills">
<p className="someskillstext"><span>Some </span> skills</p>
<p className="skillslorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.</p>
<div className="percentagecontain">
    <div className="skillscontain">

    <span>Bootstrap</span><span>100%</span>
    </div>
    <hr className="firsthr"></hr>

    <div className="skillscontain">
    <span>CSS3</span><span>90%</span>
    </div>
    <hr className="secondhr"></hr>

    <div className="skillscontain">
    <span>Photoshop</span><span>80%</span>
    </div>
    <hr className="thirdhr"></hr>
</div>
            </div>
        </Element>
    )
}
export default MyProfile