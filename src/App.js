import logo from './logo.svg';
import './App.css';

import Card from './components/Card';
import Project from './components/Project';
import Counter from './components/Counter';
import { useEffect, useState } from 'react';

const myArr = [
  ["best friend", "Adam"],
  ["favorite animal", "cat"],
  ["favorite color", "black or green (they can't decide)"]
]

const colorClasses = [
  "black",
  "blue",
  "purple",
  "red",
  "orange"
]

function App() {
  const [count, setCount] = useState(0);

  let className = colorClasses[0];

  useEffect(() => {
    console.log("useEffect called \n className="+className+"\n count="+count+"\nvalue at count="+colorClasses[count%5])
    className = colorClasses[count%5];
  }, [count])

  return (
    <div>
      <Card />
      {myArr.map(card => {
        const title = "Mariah's "+card[0];
        const description = card[1];
        return <Project title={title} description={description} />
      })}
      <Counter count={count} setCount={setCount} color={className} />
    </div>
  );
}

export default App;
