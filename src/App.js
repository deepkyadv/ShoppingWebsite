// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { incNumber,decNumber,multNumber,divNumber } from "./actions/index";



// const App = () =>{
//     const myState = useSelector((state) => state.changeTheNumber);
//     const myNewState = useSelector((state) => state.multTheNumber);

//     const Dispatch = useDispatch();
//  return(
//   <>
//   <h1>redux incerement and decrement numbers</h1>

//   <div>
//   <button onClick={()=> Dispatch(decNumber())}>-</button>
//   <input type="text" placeholder="" value={myState}></input>
//   <button onClick={ () => Dispatch(incNumber())   }>+</button>
//   </div>


//   <div>
//   <button onClick={()=> Dispatch(divNumber())}>/</button>
//   <input type="text" placeholder="" value={myNewState}></input>
//   <button onClick={ () => Dispatch(multNumber())   }>*</button>
//   </div>

//   </>



 
  
//  )
// }

// export default App;



// _____________________CREAT A AWESOME TODOLIST WITH THE HELP OF REDUX_________________________________


// import React from "react";
// import {Route, Switch} from "react-router-dom";
// import About from "./routercom/About";
// import Contact from "./routercom/Contact";
// import Menu from "./Menu";
// import Home from "./routercom/Home";
// import User from "./routercom/User";


// const App = () => {
//     return(
//         <>
//         <Menu/>
//         <Switch>
//         <Route exact path="/" component={About}/>
//         <Route  path="/contact" render={() => <Contact name="contact"/>}/>
//         <Route path="/home" component={Home}></Route>
//         <Route path="/user/:fname/:lname" component={User}></Route>
//         </Switch>
//         {/* <About/>
//     <Contact/> */}
//         </>
//     )
// }
// export default App;

// ___________REDUX TOOLKIT____________


import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";



const App = () => {
    return(
        <div>
        <Router>
        <Header/>
        <Routes>
        <Route path = "/" element={<ProductListing/>}/>
        <Route path = "/product/:productId" element={<ProductDetail/>}/>
        <Route>404 page note found</Route>
        </Routes>
        </Router>
        </div>
    )
};

export default App;

        


       

    

    
   