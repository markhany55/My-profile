import React from "react";
import './Contact.css'
const Contact =()=>{
    return(
        <div className="contact">
            <div className="contacttext">
                <p><span>Drop</span> Me A line</p>
            </div>
            <div className="formcontain">
                <form>

                <input className="firstinput" type="text" placeholder="Your Name"/>
                <input className="firstinput" type="email" placeholder="Your Email"  required/>
                <input className="secondinput" type="text" placeholder="Your Subject"  />
                <textarea className="thirdinput" type="text" placeholder="Your Message" />
                <button className="fifthinput">Send Message</button>
                </form>
            </div>

        </div>
    )
}
export default Contact