import React, { Component, useEffect, useState } from "react";

// class Four extends Component {
//   state = {
//     message: "What's happening this week?"
//   };

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({ message: "I only know it's gon be lit!!" });
//     }, 5000);
//   }

//   render() {
//     return (
//       <div style={{ marginBottom: "50px" }}>
//         <h2>Challenge 4</h2>
//         <p>Status: {this.state.message}</p>
//       </div>
//     );
//   }
// }

const Four = () => {
  const [message, setMessage] = useState("What's happening this week?");

  useEffect(() => {
    updateMessage();
  });

  function updateMessage() {
    setTimeout(() => {
      setMessage("I only know it's gon be lit!!");
    }, 5000);
  }

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 4</h2>
      <p>Status: {message}</p>
    </div>
  )
}

export default Four;
