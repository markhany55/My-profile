import React from "react";
import Header from "../Header component/Header";
import MyWork from "../Mywork component/MyWork";
import MyPortfolio from '../My Portfolio component/MyPortfolio'
import MyProfile from "../My Profile component/MyProfile";
import CreativeSection from "../Creative Section component/CreativeSection"
import SocialMedia from "../Social Media component/SocialMedia"
import CopyRight from "../Copy Right component/CopyRight";
const AllComponent=()=>{
    return(
        <div>
<Header/>
<MyWork/>
<MyPortfolio/>
<MyProfile/>
<CreativeSection/>
<SocialMedia/>
<CopyRight/>
        </div>
    )
}
export default AllComponent