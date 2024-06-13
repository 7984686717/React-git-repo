
import React, { useState } from 'react'

export default function TextForm(props) {
    var [text, setText] = useState("Enter your text");

    const handleonchange = (event) => {
        setText(event.target.value)
    }

    const Upchange = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const lowerchangee = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }


    const clear = () => {
        let newText = "";
        setText(newText);

    }

    const speak = () => {
        let newText = new SpeechSynthesisUtterance();
        newText.text = text;
        window.speechSynthesis.speak(newText);
    }

    const copy = () => {
        var newText = document.getElementById('exampleFormControlTextarea1');
        newText.select();
        navigator.clipboard.writeText(newText.value);
    }

    const RemoveSpace = () => {
        let newText = text.split(/[ ] + /);
        setText(newText.join(" "));
    }

    return (
        <div>
            <div className="mb-3 mx-5 my-5">
                <h1>{props.title}</h1>
                <textarea className={`form-control bg-${props.mode} text-${props.mode}`} id="exampleFormControlTextarea1" rows="3" value={text} onChange={handleonchange}></textarea>
                <button className='btn btn-outline-success my-3' onClick={Upchange}>Upper button</button>
                &nbsp;&nbsp;
                <button className='btn btn-outline-success my-3' onClick={lowerchangee}>Lower Button</button>
                &nbsp;&nbsp;
                <button className='btn btn-outline-success my-3' onClick={clear}>Clear</button>
                &nbsp;&nbsp;
                <button className='btn btn-outline-success my-3' onClick={speak}>speak</button>
                &nbsp;&nbsp;
                <button className='btn btn-outline-success my-3' onClick={copy}>Copy</button>
                &nbsp;&nbsp;
                <button className='btn btn-outline-success my-3' onClick={RemoveSpace}>Remove Space</button>

            </div>

            <div className='container'>
                <h2>Text summary</h2>
                <p>{text.split(" ").length}Words</p>
                <p>{text.length}Characters</p>
                <p>{0.008 * text.split(" ").length}reading time</p>
                <h3>preview</h3>
                <p>{text}</p>
            </div>
        </div>

    )
}
