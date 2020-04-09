import React, { Component, useState } from "react";

// class Three extends Component {
//   state = {
//     year: 1995,
//     type: "Mercedes",
//     used: true
//   };
//   swapCar = () => {
//     this.setState({
//       year: 2018,
//       type: "BMW",
//       used: false
//     });
//   };

//   render() {
//     return (
//       <div style={{ marginBottom: "50px" }}>
//         <h2>Challenge 3</h2>
//         <h3>Car Spec is:</h3>
//         <ul>
//           <li>{this.state.type}</li>
//           <li>{this.state.year}</li>
//           <li>{this.state.used ? "Used Car" : "Brand New!"}</li>
//         </ul>
//         <button onClick={this.swapCar}>Swap Car!</button>
//       </div>
//     );
//   }
// }

const Three = () => {
  const [year, setYear] = useState(1995)
  const [type, setType] = useState("Mercedes")
  const [used, setUsed] = useState(true)

  function swapCar() {
    setYear(2018);
    setType("BMW");
    setUsed(false);
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 3</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{type}</li>
        <li>{year}</li>
        <li>{used ? "Used Car" : "Brand New!"}</li>
      </ul>
      <button onClick={() => swapCar()}>Swap Car!</button>
    </div>
  )
}

export default Three;
