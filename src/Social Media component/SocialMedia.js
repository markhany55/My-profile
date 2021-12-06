import React from "react";
import "./SocialMedia.css"
const SocialMedia =()=>{
    return(
        <div className="socialmedia">
<div className="facebook">
    <p className="socailimg"></p>
    <div>

    <p className="followtext">FOLLOW ME ON</p>
    <p className="socialtext">SOCIAL FACEBOOK</p>
    </div>
</div>
<div className="twitter">
    <p className="twitterimg"></p>
    <div>

    <p className="followtext">TWEET ME ON</p>
    <p className="socialtext">SOCIAL TWITTER</p>
    </div>
</div>
<div className="pinterest">
    <p className="pinterestimg"></p>
    <div>

    <p className="followtext">PIN ME ON</p>
    <p className="socialtext">SOCIAL PINTEREST</p>
    </div>
</div>
        </div>
    )
}
export default SocialMedia