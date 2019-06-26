import 'react';

class Tools extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      plates: '',
      utensils: '',
      napkins: '',
      garbagebags: '',
      chairs: '',
      firewood: '',
      latern: '',
      coffeepot: '',
      shadetent: '',
      cookingutencils: '',
      cookingpot: '',
      cookingpan: ''
    }

  }
  render() {
    return (
      <div>
        <div>
          <label for="name">Enter Your Name</label>
          <input type="text" name="name"></input>
        </div>
        <div>
          <input type="checkbox" name="plates"
            checked></input>
          <label for="plates">Plates</label>
        </div>
      </div>
    )
  }


}

export default Tools;
