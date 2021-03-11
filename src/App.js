import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <CountApp />
        </p>
      </header>
    </div>
  );
}

class CountApp extends React.Component {
  constructor() {
    super()
    this.state={
      count: 0,
    }
  }
  plus() {
    this.setState({count: this.state.count + 1});
  }
  minus() {
    this.setState({count: this.state.count - 1});
  }
  render() {  // render関数はpureな関数で有るべき　// render関数内でstateを変更して行けない。
    return (
      <div>
        <h1>カウンターApp</h1>
        <p>{this.state.count}</p>
        <div>
          <button onClick={()=>{this.plus()}}>+</button>
          <button onClick={()=>{this.minus()}}>-</button>
        </div>
      </div>
    );
  }
}

export default App;
