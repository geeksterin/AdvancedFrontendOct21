import React, { useEffect } from 'react';

function LoggedInPage(props) {
    // useEffect(() => {
    //     return () => alert("Unmount")
    // }, [])
    const { toogleUserLogin } = props;
    return (
        <div>
            User logged in.
            <button onClick={() => toogleUserLogin(false)}>LOG OUT</button>
        </div>
    );
}

// class LoggedInPage extends React.Component {
//     componentWillUnmount() {
//         alert("Unmount")
//     }
//     render() {
//         return <div><button onClick={() => this.props.toogleUserLogin(false)}>LOG OUT</button></div>
//     }
// }

export default LoggedInPage;