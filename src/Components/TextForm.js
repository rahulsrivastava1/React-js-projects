import React, { useState } from 'react';

export default function Navbar(props) {
    const clickUpConvert=() => {
        let newText=text.toUpperCase();
        setText(newText);
    }

    const clickDownConvert=() => {
        let newText=text.toLowerCase();
        setText(newText);
    }

    const clickUniqueWords=() => {
        let set = new Set(text.split(' '));
        setText(text + '\nNo. of unique words :'+set.size);
    }

    const copyText=() => {
        var newText=document.getElementById('myForm');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        alert("Text copied");
    }

    const handleExtraSpace=() => {
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const clickClear=() => {
        let newText='';
        setText(newText);
    }

    const handleOnChange=(event) => {
        setText(event.target.value);
    }

    const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='black'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
            <textarea className="form-control" id="myForm" value={text} style={{backgroundColor: props.mode==='black'?'black':'white',color:props.mode==='black'?'white':'black'}} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={clickUpConvert}>conert to uppercase</button>
            <button className="btn btn-primary mx-1" onClick={clickDownConvert}>conert to lowercase</button>
            <button className="btn btn-primary mx-1" onClick={clickUniqueWords}>number of unique words</button>
            <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1" onClick={clickClear}>clear text</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='black'?'white':'black'}}>
            <h2>Text Summary</h2>
            <p>{!text.match(/\S/)?0:text.split(" ").length} words and {text.length} characters.</p>
            <p>{!text.match(/\S/)?0:0.008*text.split(" ").length} minutes time to read the text.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter your text to preview"}</p>
        </div>
        </>
    )
}