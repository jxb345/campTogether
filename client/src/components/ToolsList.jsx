import 'react';
import Tools from './ToolsForm.jsx';

class ToolsList extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
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
          <td></td>
          <td>Utensils</td>
          <td></td>
        </tr>
        <tr>
        <td>Napkins</td>
          <td></td>
          <td>Garbage Bags</td>
          <td></td>
        </tr>
        <tr>
        <td>Chairs</td>
          <td></td>
          <td>Firewood</td>
          <td></td>
        </tr>
        <tr>
        <td>Lantern</td>
          <td></td>
          <td>Coffee Pot</td>
          <td></td>

        </tr>
        <tr>
        <td>Shade Tent</td>
          <td></td>
          <td>Cooking Utensils</td>
          <td></td>

        </tr>
        <tr>
        <td>Pot</td>
          <td></td>
          <td>Pan</td>
          <td></td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default ToolsList;