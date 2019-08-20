import 'react';

class Park extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log('this.props', this.props);
    return (
      <div>
      <span>PARK: {this.props.info.park}</span><br></br>
      <span>CAMPSITE: {this.props.info.campsite}</span><br></br>
      <span>CHECK-IN: {this.props.info.checkInDate}</span><br></br>
      <span>CHECK-OUT: {this.props.info.checkOutDate}</span>
      </div>
    )
  }
}

export default Park;