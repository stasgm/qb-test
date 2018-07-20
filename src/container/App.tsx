import * as React from 'react';


interface IProps {
    name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
  <h1>
    Hello, {props.name}! Welcome to React and TypeScript.
  </h1>
);

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
      </div>
    );
  }
}

  export default App;
  