import * as React from 'react';
import logo from '../logo.svg';
import '../css/Home.css';


export default class Profile extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: 'Adam',
    };
    // this.functionName = this.functionName.bind(this);
 }

 
  render() {
    const { name } = this.state;
    return (
        <>
          <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.tsx</code> and save to reload.</p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React {name}
                </a>
            </header>
            </div>
        </>
    );
  }
}
