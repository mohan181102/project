import React from "react";
import './Footer.css'


export default function Footer() {
    return (
        <>
            <footer className="footer">

                {/* <!-- FOOTER ONE --> */}
                <div className="footerone">
                    <div className="footeronelogo" >
                        
                    </div>
                    <div className="footeroneright">
                        <a id="footeronehelp">Help</a>
                    </div>
                </div>


                <div className="footertwo">

                    {/* <!--   FOOTER TWO RESOURESC  --> */}

                    <div id="footertworeso">
                        <h2 className="footertwors">Resources</h2>
                        <ul id="footertwoul">
                            <li id="footerhomeli">
                                <a id="footerhome" href="#" className="fa" target="_blank"> Home</a>
                            </li>
                            <li id="footeraboutli">
                                <a id="footerabout" href="#"  className="fa" target="_blank">About</a>
                            </li>
                            <li id="footercontactli">
                                <a id="footercontact" className="fa" href="#" target="_blank">Contact</a>
                            </li>
                        </ul>
                    </div>


                    {/* <!-- FOOTERTWO FOLLOWUS --> */}

                    <div className="footertwofollow">
                        <h2 className="footertwosocial">Follow us</h2>
                        <ul className="footersocial">
                            <li id="footergithubli">
                                <a href="#" className="fa" target="_blank">Github</a>
                            </li>
                            <li id="footertwitterli">
                                <a href="#" className="fa" target="_blank">Twitter</a>
                            </li>
                            <li id="footerfacebookli">
                                <a href="#" className="fa" target="_blank">Facebook</a>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="footerthird">
                    <button onClick={scrollTo(0,0)}>Back to top</button>

                </div>
            </footer>
        </>

    )

};