import './App.css'
// import Button from './component/Button'
import Button from "./component/Button"

function App() {
  const myArr = [1, 2];
  console.log(myArr[0]);


  return (
    // <>
    //   <div>bilal</div>
    //   <div>bilal</div>
    // </>
    // [
    //   <h1></h1>,
    //   <p></p>,
    //   <div></div>

    // ]
    <div className='flex flex-col items-center'>
      
      <h1 className=''>Welcome to my Website</h1>
      <p>This is a react website</p>
      {/* <Button text="save"/> */}
      {/* <Button text="save"/> */}
      <Button text="delete"/>
      {/* <Button/>
      <Button/> */}
  
    </div>
  )

}

export default App
