import 'react';
import ToolsList from './ToolsList.jsx';
import NameForm from './NameForm.jsx';

class ToolsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plates: '',
      utensils: '',
      napkins: '',
      garbageBags: '',
      chairs: '',
      firewood: '',
      lantern: '',
      coffeePot: '',
      shadeTent: '',
      cookingUtencils: '',
      pot: '',
      pan: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateCheckbox = this.validateCheckbox.bind(this);

  }

    handleSubmit () {
      $.ajax({
        url: '/toolsList',
        method: 'POST',
        data: { info: this.state },
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
        <form>
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
          <input type="checkbox" name="garbageBags" onClick={this.validateCheckbox}></input>
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
          <input type="checkbox" name="coffeePot" onClick={this.validateCheckbox}></input>
          <label>Coffee Pot</label>
        </div>
        <div>
          <input type="checkbox" name="shadeTent" onClick={this.validateCheckbox}></input>
          <label>Shade Tent</label>
        </div>
        <div>
          <input type="checkbox" name="cookingUtensils" onClick={this.validateCheckbox}></input>
          <label>Cooking Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="pot" onClick={this.validateCheckbox}></input>
          <label>Pot</label>
        </div>
        <div>
          <input type="checkbox" name="pan" onClick={this.validateCheckbox}></input>
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
