import React from 'react';


function Question(props) {
  return (
    <div className='container'>
      <h1 className='question'>質問</h1>
      <p className='question-text'>{props.text}</p>
      {/* <button onClick={()=>{props.handleClick();}}>はい</button>
      <button>いいえ</button> */}
      <input type='checkbox' name='a' onChange={()=>{props.handleChange();}}></input>
      <input type='checkbox' name='' onChange={()=>{props.handleChange();}}></input>
      <input type='checkbox' name='a' onChange={()=>{props.handleChange();}}></input>
    </div>
    
  );
}

export default Question;