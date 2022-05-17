import { useState } from "react";

export const ContactCard = ({id,name,phone,onDelete}) =>
{

    const [chk,setChk] = useState(false);



    return(
        <div

        onClick={()=>{setChk(!chk)}}
        
        style={{
            display:"flex",
            padding:"1rem",
            border: "1px solid black",
            marginBottom : "1rem",
            gap : "1rem",
            margin: "auto",
            width: "300px"
        }}
        
        
        >
            <div>
                {`${id}.  `}  {name} {"    "} {chk? phone:""}
            </div>
            {/* <button onClick={()=>onDelete(id)}>Delete</button> */}
        </div>
    );
}