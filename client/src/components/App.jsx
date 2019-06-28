import 'react';
import Tools from './ToolsForm.jsx';
import NameForm from './NameForm.jsx';
import ToolsList from './ToolsList.jsx';
import ParkInfoForm from './ParkInfoForm.jsx';
const $ = require('jquery');
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      park: '',
      campsite: '',
      checkInDate: '',
      checkOutDate: '',
      renderNameForm: false,
      id: '',
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
      console.log('this.state', this.state)
    });
  }

  handleSubmit () {
    console.log('handleSubmit invoked!')
    $.ajax({
      url: '/parkInfo',
      method: 'POST',
      data: { info: this.state },
      success: (data) => {
        this.setState({ renderNameForm: !this.state.renderNameForm, id: data[0].id }, () => {
        })
      },
      error: () => {
        console.log('there was an error');
      }
    });
  }

  render() {
    let renderComponent;
    if (this.state.renderNameForm) {
      renderComponent = <NameForm id={this.state.id} parkInfo={this.state} />
    } else {
      renderComponent = <ParkInfoForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    }
      return (
        <div>
          {renderComponent}
        </div>
      )
  }
}

export default App;