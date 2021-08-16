import React from "react";
import { GrFacebook } from 'react-icons/gr'
import { GrInstagram } from 'react-icons/gr'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiCopyright } from 'react-icons/bi'


function Social(){
    return(
        
        <div class="social">
            <div className="social-flex">
                <a href="facebook"><GrFacebook/></a>
                <a href="tweeter" className="twitter"><AiOutlineTwitter/></a>
                <a href="instagram"><GrInstagram/></a>
            </div>
             <div className="copyright">
                <p><BiCopyright />Derechos reservados Instituto LAP - <span className="moodle">Soportado por Moodle.org</span> </p>
            </div>  
        </div>
    
    
        
    )
}

export default Social;