import React, {useState} from 'react'

export default function TextForm(props) {
    const onhandle = (event)=>{
        setText(event.target.value)
    }
    const upCase=()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }
    const lowCase=()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="container m-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Enter Some String</label>
                    <textarea className="form-control" value={text} onChange={onhandle} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-3" onClick={upCase}>Convert to UpperCase</button>
                <button className="btn btn-primary" onClick={lowCase}>Convert to LowerCase</button>
            </div>
            <div className="container m-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Number of time take to read your text: {0.008 * text.split(" ").length} in minutes</p>
                <h3>Preview your Text</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
