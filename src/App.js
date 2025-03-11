import logo from './logo.svg';
import './App.css';
import Header from './mycomponents/Header';
import  {Footer}  from './mycomponents/Footer';
import { Toodo } from "./mycomponents/Toodo";
import { ToodoItem } from "./mycomponents/ToodoItem";




function App() {
 

  return (
   <>



 <Header title="RODYC" searchbar={false}/>

 {/* <Toodo toodo={toodo}/> */}
 <ToodoItem/>
 <Footer/>
 </>
  );  
}

export default App;
