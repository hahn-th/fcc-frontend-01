import logo from './logo.svg';
import './App.css';
import QuoteBox from './QuoteBox';
import { Component } from 'react/cjs/react.production.min';

class App extends Component {

  render() {
     return (
      <div className="App grid place-items-center h-screen bg-slate-500">
          <QuoteBox />
      </div>
    );
  }

  componentDidMount() {
    const script = document.createElement("script");
  
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
  
    document.body.appendChild(script);
  }
}



export default App;
