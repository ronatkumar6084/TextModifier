import React, {useState} from 'react'
export default function TextForms(props) {

    const handleUpClick = ()=>{
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase","success ")
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase","success ")
    }
    const handleClrClick = ()=>{
        console.log("Clear was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("Text is cleared","success ")
    }
    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard","success ")
    }
    const handleExtraSpaces = ()=>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Extra space removed","success ")
    }
    const handleOnChange = (event)=>{
        console.log("OnChange");
        setText(event.target.value)
    }
    const[text, setText] = useState('')
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
  <textarea className="form-control mb-3" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
</div>
<button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handleUpClick}>Convert To Uppercase</button>
<button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handleLoClick}>Convert To Lowercase</button>
<button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handleClrClick}>Clear Text</button>
<button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handleCopy}>Copy Text</button>
<button disabled={text.length===0}className="btn btn-primary mx-3 my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div>

<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
</div>
</>
  )
}
