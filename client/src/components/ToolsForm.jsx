import 'react';
import ToolsList from './ToolsList.jsx'

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
      cookingpan: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);

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


  render() {
    return (
      <div>
        <div>
          <ToolsList />
        </div>
        <form>
        <div>
          <label>Enter Your Name</label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <input type="checkbox" name="plates"></input>
          <label>Plates</label>
        </div>
        <div>
          <input type="checkbox" name="utensils"></input>
          <label>Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="napkins"></input>
          <label>Napkins</label>
        </div>
        <div>
          <input type="checkbox" name="garbageBags"></input>
          <label>Garbage Bags</label>
        </div>
        <div>
          <input type="checkbox" name="chairs"></input>
          <label>Chairs</label>
        </div>
        <div>
          <input type="checkbox" name="firewood"></input>
          <label>Firewood</label>
        </div>
        <div>
          <input type="checkbox" name="lantern"></input>
          <label>Lantern</label>
        </div>
        <div>
          <input type="checkbox" name="coffeePot"></input>
          <label>Coffee Pot</label>
        </div>
        <div>
          <input type="checkbox" name="shadeTent"></input>
          <label>Shade Tent</label>
        </div>
        <div>
          <input type="checkbox" name="cookingUtensils"></input>
          <label>Cooking Utensils</label>
        </div>
        <div>
          <input type="checkbox" name="pot"></input>
          <label>Pot</label>
        </div>
        <div>
          <input type="checkbox" name="pan"></input>
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
