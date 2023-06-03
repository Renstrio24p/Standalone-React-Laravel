import React from "react";

export default function Login() {
 const [isToggle , setisToggle] = React.useState(false)
    function AccessHandler() {
        setisToggle(oldToggle => !oldToggle);
    }
    return (
        <div>
                <button onClick={AccessHandler}> Click me</button>
                {isToggle && (<div>I love laravel so much with react</div>)}
        </div>
    )
}