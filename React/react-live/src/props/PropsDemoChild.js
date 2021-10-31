import React from "react";

function PropsDemoChild(props) {
    const { firstName, lastName, fn, renderJsx } = props
    return (
        <div>
            {renderJsx}
            <h1>
                Displaying Full Name Using Props {firstName} {lastName}
            </h1>
            <button onClick={fn}>Call Parent Function</button>
        </div>
    );
}

// class PropsDemoChild extends React.Component {
//   render() {
//     const { firstName, lastName, fn, renderJsx } = this.props
//     return (
//       <div>
//         {renderJsx}
//         <h1>
//           Displaying Full Name Using Props {firstName} {lastName}
//         </h1>
//         <button onClick={fn}>Call Parent Function</button>
//       </div>
//     );
//   }
// }

export default PropsDemoChild;
