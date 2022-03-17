import React from "react";

interface IHelloProps {
    message?: string;
}

const Hello: React.FC<IHelloProps> = (props) => {
    return (
        <div>
            <h2>
                {props.message}
            </h2>
        </div>
    )
}
Hello.defaultProps = {
    message: "Hello, world!11111111"
}

export default Hello;