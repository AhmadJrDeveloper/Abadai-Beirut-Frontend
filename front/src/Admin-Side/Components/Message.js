import { useState } from "react"
import '../Styles/Message.css'
const Message = ()=>{
    const [message, SetMessage] = useState('')
    const [read, SetRead] = useState(false)

    const readFeature = ()=>{
        SetRead(true);
    }

    return(
        <>
        {read?
        <button className="Message" onClick={readFeature}>
            
            <div className="text-container">
                <p>Message From: <span>Ali Artach</span></p>
                <p className="msg">Content: <span className="message-c">Hellodwfgr gvergwer vwergvtmwjfbwkvhnkwbwke kfhbwkeh ekwfjbweihfewkg kwghrghr ervgwergwrghwkj ekrgwejfb wekjrfbgw werk bwekfhwrn eljrhw kwrjbtkwchrlk wrhrdka</span></p>
        </div></button>:

        <button className="Message unread-bg" onClick={readFeature}>
            
        <div className="text-container unread-bg">
        <p className="unread">Message From: <span className="unread">Ali Artach</span></p>
        <p className="msg unread">Content: <span className="message-c unread">Hellodwfgr gvergwer vwergvtmwjfbwkvhnkwbwke kfhbwkeh ekwfjbweihfewkg kwghrghr ervgwergwrghwkj ekrgwejfb wekjrfbgw werk bwekfhwrn eljrhw kwrjbtkwchrlk wrhrdka</span>
        </p>
        
        </div>
        <div className="unread-dot">.</div>
        </button>}
        
        </>
    )
}
export default Message