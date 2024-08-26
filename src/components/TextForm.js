import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText]=useState("enter the text ")
    const handleUpclick=()=>{
        console.log("uppercase eas clicked")
        let newText=text.toUpperCase();
        setText(newText);
    }
      const handleInvclick=()=>{
        console.log("inverse case clicked");
          let newText="";
          for(let i=text.length-1 ; i>=0 ;i--){
            newText+=text[i];
          } 
          setText(newText);
        }
    const handleOnChange=(event)=>{
        console.log("on change")
        setText(event.target.value);    
    }
  return (
    <div>
    <div className='container' style  ={{ color: props.mode=== "dark"?"white":"black" }} >
    <h2 >{props.heading} </h2>
      
    <div className="mb-3">
    <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==="dark"?"rgb(2 71 71)":"white",
                color:props.mode==="dark"?"white":"black" }} value={text} onChange={handleOnChange} rows="8"></textarea>
    </div>
    <button disabled={text.length===0 } className="btn btn-primary mx-2" onClick={handleUpclick}>convert to uppercase</button>
    <button disabled={text.length===0 } className="btn btn-primary" onClick={handleInvclick}>convert to inverse case</button>

    </div>
    <div className='container my-3' style={{color:props.mode==="dark"?"white":"black" }}>
    <h2>Text summary </h2> 
    <p>  {text.split(" ").filter((element)=>{return element.length!==0}).length} words   and {text.length} characters</p>
    </div>
    </div>
  )
}
