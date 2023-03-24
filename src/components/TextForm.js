import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleClear = () => {
        setText('');
        props.showAlert("Text Cleared", "success");

    }
    const handleDownClick = () => {
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase", "success");

    }
    const handleTitleCase = () => {
        //     if ((text===null) || (text===''))
        //     return false;
        // else
        let str = text.toString();

        let newText = str.replace(/\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() +
                    txt.substr(1).toLowerCase();
            });
        setText(newText);
        props.showAlert("Converted to Titlecase", "success");

    }

    const handleCopyClick = () => {
        var text = document.getElementById("myBox");
        console.log(text.value.length)
        if(text.value.length === 0){
            props.showAlert("Nothing to Copy","danger");
        }else {
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert("Text Copied", "success");
        }
        

    }
    const handleOnchange = (event) => {
        console.log("OnChange");
        setText(event.target.value);
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Extra Spaces Removed", "success");

    }
    const [text, setText] = useState("Enter Text")
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        id="myBox"
                        value={text}
                        style={{
                            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
                            color: props.mode === 'light' ? 'black' : 'white'
                        }}
                        onChange={handleOnchange}
                        rows="8"
                    ></textarea>
                </div>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={handleDownClick}>Convert to Lowercase</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={handleClear}>Clear</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={handleCopyClick}>Copy</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary' : 'success'} mx-2`} onClick={handleTitleCase}>TitleCase</button>

            </div>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{text.split(' ').filter((element)=>{
                    return element !== ''
                }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes to read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    );
}