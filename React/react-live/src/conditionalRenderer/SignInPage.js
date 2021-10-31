import React from 'react';

function SignInPage(props) {
    const { toogleUserLogin } = props;
    return (
        <div>
            User is not logged in.
            <button onClick={() => toogleUserLogin(true)}>LOG IN</button>
        </div>
    );
}

export default SignInPage;