import 'react';
import ToolsList from './ToolsList.jsx';
import ToolsForm from './ToolsForm.jsx';
import Park from './Park.jsx';
import Name from './Name.jsx';
const $ = require('jquery');

class NameForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      renderToolsForm: false
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
      console.log('this.state - handlechange', this.state)
    });

  }

  handleSubmit() {
    this.setState({ renderToolsForm: !this.state.renderToolsForm })
  }

  render() {
    let renderComponent;

    if (!this.state.renderToolsForm) {
     renderComponent = <Name handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    } else {
      renderComponent = <ToolsForm name={this.state.name} />
    }
    return (
      <div>
        <div>
        <Park info={this.props.parkInfo}/>
        </div>
        <div>
        <ToolsList name={this.state.name}/>
        </div>
      <div>
        {renderComponent}
      </div>
        {/* <form onSubmit={this.handleSubmit}>
          <div>
          <label>Enter Your Name</label>
          <input type="text" name="name" onChange={this.handleChange}></input>
          </div>
          <div>
          <input type="submit" value="submit"></input>
          </div>
        </form> */}
      </div>
    )
  }
}

export default NameForm;


