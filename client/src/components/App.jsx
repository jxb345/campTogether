import 'react';

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




  }

  render() {
    return (
      <div>
        <h1>CampTogether</h1>
        <form onSubmit={this.handleSubmit()}>
          <div>
          <label for="park">Enter Park Name</label>
          <input type="text" name="park" onChange={this.handleChange}></input>
          </div>
          <div>
          <label for="campsite-number">Enter Campsite</label>
          <input type="text" name="campsite" onChange={this.handleChange}></input>
          </div>
          <div>
            <label for="start-date">Enter Check-In Date</label>
            <input type="date" name="start-date" onChange={this.handleChange}></input>
          </div>
          <div>
            <label for="end-date">Enter Check-Out Date</label>
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