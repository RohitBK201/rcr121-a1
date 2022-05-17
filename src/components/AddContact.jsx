import { useState } from "react"

export const AddContact = (props) => {


    const [text,setText] = useState("");
    const [phone,setPhone] = useState("");

    const handleClick = () =>{

        if(props.handleClick) props.handleClick(text,phone)

        setText("");
        setPhone("");

    };


    return(

        <div>
            <div>
                <input type="text" placeholder="add name" value={text} onChange={(e)=>setText(e.target.value)}/>
                <input type="text" placeholder="add phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <button onClick={handleClick}>Add</button>
            </div>
        </div>

    );

}