import 'react';

class ParkInfoForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
       <div>
          <h1>CampTogether</h1>
          <img src="tent-pencil.png" alt="tent"></img>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.handleSubmit()
            }}>
            <div className="parkInfoText">
            <div>
            <label>Park Name
            <input type="text" name="park" onChange={this.props.handleChange}></input>
            </label>
            </div>
            <div>
            <label>Campsite</label>
            <input type="text" name="campsite" onChange={this.props.handleChange}></input>
            </div>
            <div>
              <label>Check-In Date</label>
              <input type="date" name="checkInDate" onChange={this.props.handleChange}></input>
            </div>
            <div>
              <label>Check-Out Date</label>
              <input type="date" name="checkOutDate" onChange={this.props.handleChange}></input>
            </div>
            </div>
            <div>
              <input type="submit" value="submit"></input>
            </div>
          </form>
        </div>

    )
  }
}

export default ParkInfoForm;