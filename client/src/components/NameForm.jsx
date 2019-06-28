import 'react';
import ToolsList from './ToolsList.jsx';
import Park from './Park.jsx';
const $ = require('jquery');

class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    }, () => {
      console.log('this.state', this.state)
    });

  }

  handleSubmit() {
    // render tools form and pass in name=this.state.name
    {this.renderToolsList}

  }

  render() {
    return (
      <div>
        <div>
        <Park info={this.props.parkInfo}/>
        </div>
        <div>
        <ToolsList name={this.state.name}/>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div>
          <label>Enter Your Name</label>
          <input type="text" name="name" onChange={this.handleChange}></input>
          </div>
          <div>
          <input type="submit" value="submit"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default NameForm;


