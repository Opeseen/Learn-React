import './App.css';

function App() {
  const style1 = {
    color: "blue",
    fontSize: 30,
    backgroundColor: 'orange'
  };
  const style2 = {color:'blue', fontSize:'20'}
  const name = "Opeyemi Alabi";
  const func1 = function newFunction(){
    alert(name)
  };
  
  return(
    <div className='mainDiv'>
      {/* Beginning of Code */}
      <h1 style={style1} title='This is the heading'>Heading Page</h1>
      <p id='para1'>This is a paragraph</p>
      <p className='para2'>This is a second paragraph</p>
      <div>
        <label htmlFor='input1'>Data</label>
        <input id='input1'name='userInput'></input>
      </div>
      <p>Hello World</p>
      <h3 style={style2}>My name is {name}</h3>
      <button onClick={func1}>Click me!</button>
      {/* End of Code */}
    </div>
  )
}

export default App;