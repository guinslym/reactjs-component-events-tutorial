import  React from 'react';
var Select = require('react-select');

var options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {data: 'hello world'}
  }
  render() {
    function logChange(val) {
  console.log("Selected: " + JSON.stringify(val));
}


    return (
      <div className="container">
        <h1 className="text-center">ReactJs Multiple Components Tutorial</h1>

        <Select
          name="form-field-name"
          value="one"
          options={options}
          onChange={logChange}
          />

        <div className="row">

  			</div>

      </div>
    );
  }
}


export default App;
