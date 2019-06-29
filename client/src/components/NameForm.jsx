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
      renderToolsForm: false,
      plates: '',
      utensils: '',
      napkins: '',
      garbagebags: '',
      chairs: '',
      firewood: '',
      lantern: '',
      coffeepot: '',
      shadetent: '',
      cookingutencils: '',
      cookingpot: '',
      cookingpan: '',
      name: '',
      id: ''

      // original ToolsForm state:
        // plates: '',
        // utensils: '',
        // napkins: '',
        // garbagebags: '',
        // chairs: '',
        // firewood: '',
        // lantern: '',
        // coffeepot: '',
        // shadetent: '',
        // cookingutencils: '',
        // cookingpot: '',
        // cookingpan: '',
        // name: '',
        // id: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateCheckbox = this.validateCheckbox.bind(this);
  }

  componentDidMount () {
    this.setState(
      {
        // name: this.props.name,
        id: this.props.id }, () => {
          console.log('id', this.state.id);
        })
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

  validateCheckbox (e) {
    const tool = e.target.name;
    console.log('tool', tool);
    this.setState({ [tool]: this.state.name }, () => {
      console.log('this.state', this.state)
      // console.log('this.state', this.state);
    })
  }

  render() {
    let renderComponent;

    if (!this.state.renderToolsForm) {
     renderComponent = <Name handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    } else {
      renderComponent = <ToolsForm id={this.props.id} handleSubmit={this.handleSubmit} validateCheckbox={this.validateCheckbox} state={this.state}
      // name={this.state.name}
      />
    }
    return (
      <div>
        <div>
        <Park info={this.props.parkInfo}/>
        </div>
        <div>
        <ToolsList state={this.state}/>
        </div>
      <div>
        {renderComponent}
      </div>
      </div>
    )
  }
}

export default NameForm;


