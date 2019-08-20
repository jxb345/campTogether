import 'react';

class Name extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <form onSubmit={(e) => {
        e.preventDefault();
        this.props.handleSubmit();
      }}>
      <div className="nameForm">
      <label>Your Name</label>
      <input type="text" name="name" onChange={this.props.handleChange}></input>
      </div>
      <div>
      <input type="submit" value="submit"></input>
      </div>
    </form>
    )
  }
}

export default Name;