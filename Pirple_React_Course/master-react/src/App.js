import './App.css';
import {Car} from './Classcom';

function App(prop) {  
  return (
    <div>
      <h1>Hello</h1>
      <h4>{prop.contentData} are available here</h4>
      <p><Car classData='Some Data From The Class Component!'newClassData='Some new data here'/></p>
    </div>
  )
}

export default App;