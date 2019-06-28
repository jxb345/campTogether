import 'react';
import Tools from './ToolsForm.jsx';
import NameForm from './NameForm.jsx';
import ToolsList from './ToolsList.jsx';
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
      renderNameForm: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderNameForm = this.renderNameForm.bind(this);
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
    $.ajax({
      url: '/parkInfo',
      method: 'POST',
      data: { info: this.state },
      success: () => {
        console.log(';lkj;lj;lj;lj;ljl;j;lj;ljl;;ll;jl;jl;j');
        this.setState({ renderNameForm: !this.state.renderNameForm}, () => {
          console.log('this.state after submit', this.state);
        })
      },
      error: () => {
        console.log('there was an error');
      }
    });
  }

  renderNameForm () {
    console.log('inside renderNameForm')

  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/test',
  //     method: 'get',
  //     success: () => {
  //       console.log('hi')
  //     }

  //   })
  // }

  render() {

    let renderComponent;

    if (this.state.renderNameForm) {
        renderComponent = <NameForm parkInfo={this.state} />
    } else {
        renderComponent = <ToolsList />
      return (
        <div>
          {renderComponent}
        </div>

        // <div>
        //   <h1>CampTogether</h1>
        //   <form onSubmit={this.handleSubmit}>
        //     <div>
        //     <label>Enter Park Name</label>
        //     <input type="text" name="park" onChange={this.handleChange}></input>
        //     </div>
        //     <div>
        //     <label>Enter Campsite</label>
        //     <input type="text" name="campsite" onChange={this.handleChange}></input>
        //     </div>
        //     <div>
        //       <label>Enter Check-In Date</label>
        //       <input type="date" name="checkInDate" onChange={this.handleChange}></input>
        //     </div>
        //     <div>
        //       <label>Enter Check-Out Date</label>
        //       <input type="date" name="checkOutDate" onChange={this.handleChange}></input>
        //     </div>
        //     <div>
        //       <input type="submit" value="Submit"></input>
        //     </div>
        //   </form>
        // </div>
      )
    }

  }
}

export default App;