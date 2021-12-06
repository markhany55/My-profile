import React from "react";
import './MyWork.css'
import {Element} from 'react-scroll'
import {SiXdadevelopers , SiDevexpress} from 'react-icons/si'
import {BsCodeSlash} from 'react-icons/bs'
const MyWork =()=>{
    return(
        <Element className="mywork" name="work">
<p className="myworktext"><span>My </span>Work</p>
<div className="myworkcontain">
    <div className="onlycontain">
<p className="photo"><SiXdadevelopers /></p>
        <p className="title">Mobile Ux</p>
        <hr className="myworkhr"></hr>
        <p className="sentense">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
    </div>
    <div className="onlycontain">
<p className="photo"><SiDevexpress/></p>
        <p className="title">Mobile Ux</p>
        <hr className="myworkhr"></hr>
        <p className="sentense">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
    </div>
    <div className="onlycontain">
<p className="photo"><BsCodeSlash/></p>
        <p className="title">Mobile Ux</p>
        <hr className="myworkhr"></hr>
        <p className="sentense">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus quos omnis voluptas ea ipsam! Voluptas.</p>
    </div>
    
</div>
        </Element>
    )
}
export default MyWork 