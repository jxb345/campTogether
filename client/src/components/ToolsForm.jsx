import 'react';
import ToolsList from './ToolsList.jsx';
import NameForm from './NameForm.jsx';
const $ = require('jquery');

class ToolsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
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
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateCheckbox = this.validateCheckbox.bind(this);

  }

  componentDidMount () {
    this.setState({name: this.props.name})
  }

    handleSubmit () {
      $.ajax({
        url: '/toolsList',
        method: 'POST',
        data: { tools: this.state },
        success: () => {
          console.log('success');
        },
        error: () => {
          console.log('there was an error');
        }
      })
    }

    validateCheckbox (e) {
      console.log('e.target.checked', e.target.checked);
      console.log('e.target.name', e.target.name);
      const tool = e.target.name;
      console.log('this.props.name', this.props);

      this.setState({ [tool]: this.props.name }, () => {
        console.log('this.state', this.state);
      })
    }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div>
          <input type="checkbox" name="plates" onClick={this.validateCheckbox}></input>
          <label>Plates</label>
        </div>
        <div>
          <input type="checkbox" name="utensils" onClick={this.validateCheckbox}></input>
          <label>Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="napkins" onClick={this.validateCheckbox}></input>
          <label>Napkins</label>
        </div>
        <div>
          <input type="checkbox" name="garbagebags" onClick={this.validateCheckbox}></input>
          <label>Garbage Bags</label>
        </div>
        <div>
          <input type="checkbox" name="chairs" onClick={this.validateCheckbox}></input>
          <label>Chairs</label>
        </div>
        <div>
          <input type="checkbox" name="firewood" onClick={this.validateCheckbox}></input>
          <label>Firewood</label>
        </div>
        <div>
          <input type="checkbox" name="lantern" onClick={this.validateCheckbox}></input>
          <label>Lantern</label>
        </div>
        <div>
          <input type="checkbox" name="coffeepot" onClick={this.validateCheckbox}></input>
          <label>Coffee Pot</label>
        </div>
        <div>
          <input type="checkbox" name="shadetent" onClick={this.validateCheckbox}></input>
          <label>Shade Tent</label>
        </div>
        <div>
          <input type="checkbox" name="cookingutensils" onClick={this.validateCheckbox}></input>
          <label>Cooking Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="cookingpot" onClick={this.validateCheckbox}></input>
          <label>Pot</label>
        </div>
        <div>
          <input type="checkbox" name="cookingpan" onClick={this.validateCheckbox}></input>
          <label>Pan</label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        </form>
      </div>
    )
  }


}

export default ToolsForm;
