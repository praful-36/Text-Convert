import React, { useState } from 'react'


export default function Textform() {


  // upper case
  const handleUpperclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext)
  }


  // Lower case
  const handleLowerclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext)
  }


  // Capitalize case
  const handleCapitalizeclick = () => {
    let newText = text
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');

    settext(newText);
  }


  // Sentence case
  const handleSentenceclick = () => {
    let newText = text
      .split(/([.!?]\s+)/) // Split at sentence-ending punctuation followed by whitespace
      .map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1).toLowerCase())
      .join('');

    settext(newText);
  }


  //copy to clipBoard
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  }



  const handletext = (event) => {
    settext(event.target.value)
  }


  const [text, settext] = useState("");

  return (

    <div>
      <div className="container my-4">
        <div className="mb-3">
          <h2 className="my-3 text-light">Enter Your Text Here :-</h2>
          <textarea className="form-control Textarea w-33" id="exampleFormControlTextarea1" rows={9} value={text} onChange={handletext} placeholder='Type or Paste your text here' ></textarea>
        </div>
      </div>

      <div className="container my-4 w-33" >

        <div className="text-summary d-flex justify-content-between my-3">
          <div className="total-words text-light">total words count:{text.split(" ").filter((element) => {
            return element.length !== 0
          }).length}</div>

          <div className="total-character text-light">total characters count:{text.length}</div>
        </div>

        <div className="d-flex justify-content-around w-33 Case">
          <button className="btn btn-success mx-3 my-3" onClick={handleUpperclick}>Convert to Upper Case</button>
          <button className="btn btn-success mx-3 my-3" onClick={handleLowerclick}>Convert to Lower Case</button>

          <button className="btn btn-success mx-3 my-3" onClick={handleCapitalizeclick}>Convert to Capitalize Word</button>
          <button className="btn btn-success mx-3 my-3" onClick={handleSentenceclick}>Convert to sentence case</button>

          <button className="btn btn-success mx-3 my-3" onClick={handleCopy}>Copy to ClipBoard</button>


        </div>



      </div>



    </div>




  )
}
