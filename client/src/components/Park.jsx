import 'react';

class Park extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log('this.props.info', this.props.info);
    return (
      <div>
      <h1>PARK: {this.props.info.park}</h1>
      <h2>CAMPSITE: {this.props.info.campsite}</h2>
      <h3>CHECK-IN: {this.props.info.checkInDate}</h3>
      <h3>CHECK-OUT: {this.props.info.checkOutDate}</h3>
      </div>
    )
  }
}

export default Park;