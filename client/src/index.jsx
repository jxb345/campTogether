const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <p>Hello!</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));