import 'react';
import 'jquery';
import Tools from './Tools.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      park: '',
      campsite: '',
      checkInDate: '',
      checkOutDate: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    const name = event.target.name;

    this.setState({
      [name]: value
    }, () => {
      console.log('this.state', this.state)
    })

  }

  handleSubmit () {
    $.ajax({
      url: '/parkInfo',
      method: 'POST',
      data: { info: state },
      success: <Tools />
    })
  }

  render() {
    return (
      <div>
        <h1>CampTogether</h1>
        <form onSubmit={this.handleSubmit()}>
          <div>
          <label>Enter Park Name</label>
          <input type="text" name="park" onChange={this.handleChange}></input>
          </div>
          <div>
          <label>Enter Campsite</label>
          <input type="text" name="campsite" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Enter Check-In Date</label>
            <input type="date" name="start-date" onChange={this.handleChange}></input>
          </div>
          <div>
            <label>Enter Check-Out Date</label>
            <input type="date" name="end-date" onChange={this.handleChange}></input>
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default App;