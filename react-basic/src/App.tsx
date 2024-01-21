import './App.css'
import Button from './components/Button';
// import Button from './component/Button'


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
    <div className='flex flex-col items-center text-2xl font-bold text-gray-900'>

      Welcome to the React App
      <Button options="save" text='Sign Up' />
      <Button options="unSave"  text='Log Out'/>
      <Button options="save" text='Log In'/>
    </div>
  )

}

export default App
