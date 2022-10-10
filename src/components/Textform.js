import React, {useState} from 'react';


export default function Textform(props) {

    const handleOnChange = (event) => {
        // console.log("On Change...");
        setText(event.target.value);
    };
    const handleUpClick = () => {
        // console.log("Uppercase was clicked..." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to Upper Case", "Success");
    };
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to Lower Case", "Success");

    }
    const handleClearClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Text has been removed", "Success");

    }
    const handleCopy = () => {
        var text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "Success");

    }

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("Extra spaces have been removed", "Success");

    }

    function countWords(text){
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });

        return wc;
    }

    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText('new text'); // correct way to change the state

    return (
        <>
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
            {/* <label for="myBox" class="form-label">Example textarea</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'grey' : 'white',  color: props.mode === 'dark' ? 'white' : '#042743'}} id="myBox" rows="15"></textarea>
        </div>
        <button className="btn btn-warning mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-warning mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-warning mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-4" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your Text Summary:</h2>
        <p>{countWords(text)} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview:</h2>
        <p>{text.length > 0 ? text:'Enter something in the text-box to preview it here....'}</p>
    </div>
    </>
  )
}

