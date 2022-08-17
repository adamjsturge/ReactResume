import * as React from 'react';
import Home from './pages/Home';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      route: 'home'
    };
    // this.functionName = this.functionName.bind(this);
  }


  componentDidMount() {
  }

  renderPage() {
    const route = this.state.route;
    switch (route) {
      case 'home':
        return (
          <>
            {/* <Header /> */}
            <Home />
          </>
        );
    }
  }

  render() {
    return (
        <>
          {this.renderPage()}
        </>
    );
  }
}