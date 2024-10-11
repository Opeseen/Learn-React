import './App.css';
import {Car} from './Classcom';
import {Detail} from './Detail';

function App(prop) {  
  return (
    <div>
      <h1>Hello</h1>
      <h4>{prop.contentData} are available here</h4>
      <p><Car classData='Some Data From The Class Component!'newClassData='Some new data here'/></p>
      <Detail ram="4GB" hdd="500GB" processor="Core i3"/>
      <Detail ram="12GB" hdd="1500GB" processor="Core i5"/>
      <Detail hdd="2500GB" processor="Core i7" ram="18GB"/>
    </div>
  )
}

export default App;