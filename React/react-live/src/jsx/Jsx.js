import React from "react"

const formatName = (personInformation) => {
    return `${personInformation.firstName} ${personInformation.lastName}`
}

const personInformation = {
    firstName: "John",
    lastName: "Doe"
}

const element = <h1>This is a JSX</h1>

function Jsx() {
        return <div>
            Hello! {formatName(personInformation)}
            {element}
        </div>
}

export default Jsx