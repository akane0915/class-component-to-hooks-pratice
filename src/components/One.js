import React, { Component, useState } from "react";

// class One extends Component {
//   state = {
//     count: 0
//   };
//   increase = () => {
//     this.setState({ count: this.state.count + 1 });
//   };

//   render() {
//     return (
//       <div style={{ marginBottom: "50px" }}>
//         <h2>Challenge 1</h2>
//         <p>Count is: {this.state.count}</p>
//         <button onClick={this.increase}>Increase Count!</button>
//       </div>
//     );
//   }
// }



const One = () => {
  const [count, setCount] = useState(0);

  return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 1</h2>
        <p>Count is: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increase Count!</button>
      </div>
    );
};

export default One;