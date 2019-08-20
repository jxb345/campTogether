import 'react';
const $ = require('jquery');

class ToolsForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      renderNameForm: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit () {
    console.log('this.props', this.props);
    $.ajax({
      url: '/toolsList',
      method: 'POST',
      data: { tools: this.props.state },
      success: (data) => {
        console.log('data', data);
        this.props.handleSubmit();
       },
      error: () => {
        console.log('there was an error');
      }
    })
  }

  render() {
      return (
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.handleSubmit();
          }}>
            <div className="toolsForm">
          <span>
            <input type="checkbox" name="plates" onClick={this.props.validateCheckbox}></input>
            <label>Plates</label>
          </span>
          <span>
            <input type="checkbox" name="utensils" onClick={this.props.validateCheckbox}></input>
            <label>Utensils</label>
          </span>
          <br></br>
          <span>
            <input type="checkbox" name="napkins" onClick={this.props.validateCheckbox}></input>
            <label>Napkins</label>
          </span>
          <span>
            <input type="checkbox" name="garbagebags" onClick={this.props.validateCheckbox}></input>
            <label>Garbage Bags</label>
          </span>
          <br></br>
          <span>
            <input type="checkbox" name="chairs" onClick={this.props.validateCheckbox}></input>
            <label>Chairs</label>
          </span>
          <span>
            <input type="checkbox" name="firewood" onClick={this.props.validateCheckbox}></input>
            <label>Firewood</label>
          </span>
          <br></br>
          <span>
            <input type="checkbox" name="lantern" onClick={this.props.validateCheckbox}></input>
            <label>Lantern</label>
          </span>
          <span>
            <input type="checkbox" name="coffeepot" onClick={this.props.validateCheckbox}></input>
            <label>Coffee Pot</label>
          </span>
          <br></br>
          <span>
            <input type="checkbox" name="shadetent" onClick={this.props.validateCheckbox}></input>
            <label>Shade Tent</label>
          </span>
          <span>
            <input type="checkbox" name="cookingutensils" onClick={this.props.validateCheckbox}></input>
            <label>Cooking Utensils</label>
          </span>
          <br></br>
          <span>
            <input type="checkbox" name="cookingpot" onClick={this.props.validateCheckbox}></input>
            <label>Pot</label>
          </span>
          <span>
            <input type="checkbox" name="cookingpan" onClick={this.props.validateCheckbox}></input>
            <label>Pan</label>
          </span>
          <br></br>
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
