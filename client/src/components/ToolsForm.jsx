import 'react';
import ToolsList from './ToolsList.jsx';
import NameForm from './NameForm.jsx';
const $ = require('jquery');

class ToolsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      // moving the below state properties to NameForm
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

    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validateCheckbox = this.validateCheckbox.bind(this);

  }

    handleSubmit () {
      console.log('this.props', this.props);
      $.ajax({
        url: '/toolsList',
        method: 'POST',
        data: { tools: this.props.state },
        // data: { tools: this.state },
        success: (data) => {
          console.log('data', data);
          // {this.props.handleSubmit}
        },
        error: () => {
          console.log('there was an error');
        }
      })
    }

    // moving this function to NameForm and then will pass into ToolsForm as a prop
      // validateCheckbox (e) {
      //   const tool = e.target.name;
      //   this.setState({ [tool]: this.props.name }, () => {
      //     console.log('this.props.state', this.props.state)
      //     // console.log('this.state', this.state);
      //   })
      // }


  render() {
    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}>
        <div>
          <input type="checkbox" name="plates" onClick={this.props.validateCheckbox}></input>
          <label>Plates</label>
        </div>
        <div>
          <input type="checkbox" name="utensils" onClick={this.props.validateCheckbox}></input>
          <label>Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="napkins" onClick={this.props.validateCheckbox}></input>
          <label>Napkins</label>
        </div>
        <div>
          <input type="checkbox" name="garbagebags" onClick={this.props.validateCheckbox}></input>
          <label>Garbage Bags</label>
        </div>
        <div>
          <input type="checkbox" name="chairs" onClick={this.props.validateCheckbox}></input>
          <label>Chairs</label>
        </div>
        <div>
          <input type="checkbox" name="firewood" onClick={this.props.validateCheckbox}></input>
          <label>Firewood</label>
        </div>
        <div>
          <input type="checkbox" name="lantern" onClick={this.props.validateCheckbox}></input>
          <label>Lantern</label>
        </div>
        <div>
          <input type="checkbox" name="coffeepot" onClick={this.props.validateCheckbox}></input>
          <label>Coffee Pot</label>
        </div>
        <div>
          <input type="checkbox" name="shadetent" onClick={this.props.validateCheckbox}></input>
          <label>Shade Tent</label>
        </div>
        <div>
          <input type="checkbox" name="cookingutensils" onClick={this.props.validateCheckbox}></input>
          <label>Cooking Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="cookingpot" onClick={this.props.validateCheckbox}></input>
          <label>Pot</label>
        </div>
        <div>
          <input type="checkbox" name="cookingpan" onClick={this.props.validateCheckbox}></input>
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
