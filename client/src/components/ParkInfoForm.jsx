import 'react';

class ParkInfoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
       <div>
          <h1>CampTogether</h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSubmit()
            }}>
            <div>
            <label>Enter Park Name</label>
            <input type="text" name="park" onChange={this.props.handleChange}></input>
            </div>
            <div>
            <label>Enter Campsite</label>
            <input type="text" name="campsite" onChange={this.props.handleChange}></input>
            </div>
            <div>
              <label>Enter Check-In Date</label>
              <input type="date" name="checkInDate" onChange={this.props.handleChange}></input>
            </div>
            <div>
              <label>Enter Check-Out Date</label>
              <input type="date" name="checkOutDate" onChange={this.props.handleChange}></input>
            </div>
            <div>
              <input type="submit" value="Submit"></input>
            </div>
          </form>
        </div>

    )
  }
}

export default ParkInfoForm;