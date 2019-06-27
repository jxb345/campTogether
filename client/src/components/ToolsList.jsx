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
          <td>Jimbo</td>
          <td>Utensils</td>
          <td>Wilma</td>
        </tr>
        <tr>
        <td>Napkins</td>
          <td>Lacy</td>
          <td>Garbage Bags</td>
          <td>Steve</td>
        </tr>
        <tr>
        <td>Chairs</td>
          <td>Harry</td>
          <td>Firewood</td>
          <td>Jill</td>
        </tr>
        <tr>
        <td>Lantern</td>
          <td>Mary</td>
          <td>Coffee Pot</td>
          <td>Ben</td>

        </tr>
        <tr>
        <td>Shade Tent</td>
          <td>Luna</td>
          <td>Cooking Utensils</td>
          <td>Stacey</td>

        </tr>
        <tr>
        <td>Pot</td>
          <td>Fred</td>
          <td>Pan</td>
          <td>Thompson</td>
        </tr>
        </tbody>
      </table>
    )
  }
}

export default ToolsList;