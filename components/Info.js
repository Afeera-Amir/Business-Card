import React from "react"

export default function Info(){
    return (
        <div className="info-section">
        <img src="pic" width="100%"/>
        <h2 className="name">Laura Smith</h2>
        <h4 className="job">Frontend Developer</h4>
        <h5 className="website">laurasmith.website</h5>
        <div className="buttons">
        <a href="#" className="email"><i className="fa fa-envelope"></i>Email</a>
        <a href="#" className="linkedin"><i className="fa fa-linkedin"></i>LinkedIn</a>        
        </div>
        </div>        
    )
}