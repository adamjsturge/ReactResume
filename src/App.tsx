import * as React from 'react';
import Home from './pages/Home';
import parseRoute from './lib/parse-route';

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
    };
    // this.functionName = this.functionName.bind(this);
  }


  componentDidMount() {
    window.addEventListener('hashchange', () => {
      let route = parseRoute(window.location.hash);
      this.setState({ route });
    });
  }

  renderPage() {
    const { path, params } = this.state.route;
    switch (path.toLowerCase()) {
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