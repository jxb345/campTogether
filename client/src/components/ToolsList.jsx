import 'react';
import Tools from './ToolsForm.jsx';

class ToolsList extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    console.log('this.props.state', this.props.state)
    return (
      <table>
        <tbody>
        <tr>
        <th>Tool</th>
        <th>Name</th>
        <th>Tool</th>
        <th>Name</th>
        </tr>
        <tr>
          <td>Plates</td>
          <td>{this.props.state.plates}</td>
          <td>Utensils</td>
          <td>{this.props.state.utensils}</td>
        </tr>
        <tr>
        <td>Napkins</td>
          <td>{this.props.state.napkins}</td>
          <td>Garbage Bags</td>
          <td>{this.props.state.garbagebags}</td>
        </tr>
        <tr>
        <td>Chairs</td>
          <td>{this.props.state.chairs}</td>
          <td>Firewood</td>
          <td>{this.props.state.firewood}</td>
        </tr>
        <tr>
        <td>Lantern</td>
          <td>{this.props.state.lantern}</td>
          <td>Coffee Pot</td>
          <td>{this.props.state.coffeepot}</td>

        </tr>
        <tr>
        <td>Shade Tent</td>
          <td>{this.props.state.shadetent}</td>
          <td>Cooking Utensils</td>
          <td>{this.props.state.cookingutensils}</td>

        </tr>
        <tr>
        <td>Pot</td>
          <td>{this.props.state.cookingpot}</td>
          <td>Pan</td>
          <td>{this.props.state.cookingpan}</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default ToolsList;