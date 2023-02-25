import React, {Component} from 'react'
import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/greet";
import Welcome from "./components/welcome";
// function App() {
//   return (
//     <div className="App">
//       <Greet name='Bruce' heroName ='batman'>
//         <p></p>
//       </Greet>
//       <Greet name='Clark' heroName='supername'></Greet>
//       <Greet name='Diana' heroName='wonder woman'></Greet>

//       {/* <Welcome></Welcome> */}
//     </div>
//   );
// }

// class component
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Bruce" heroName="batman">
          <p></p>
        </Greet>
        <Greet name="Clark" heroName="supername"></Greet>
        <Greet name="Diana" heroName="wonder woman"></Greet>
        <Welcome name="Bruce" heroName="batman"></Welcome>
        <Welcome name="Clark" heroName="superman"></Welcome>
        <Welcome name="Diana" heroName="wonder woman"></Welcome>
      </div>
    );
  }
}

export default App;
