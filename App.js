import React, { useState } from 'react';
import Movie from './movie.json';
import Date from './question.json';
import Youtube from './Youtube';
import Question from './Question';

function App() {
  const [count, setCount] = useState(0);
  function handleChange() {
      if ( count <= 5){
        let p = 0;
        let elements= document.getElementsByName("a");
        for (let i=0; i<elements.length; i++){
          if (elements[i].checked){
            p +=1
          }
        }
        setCount(p)
      }
  }

  const link = Movie.movies.movie1.url;
  return (
      <div>
        <h1>Hello World</h1>
        {count}
        <Youtube url = {link}/>
        <Question  handleChange={() => {handleChange();}}/>
      </div>
  );
}

export default App;
