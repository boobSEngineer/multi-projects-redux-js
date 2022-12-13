import React, {useState} from "react";
import "./Error.css";
import ErrorFallback from "./ErrorFallback";
import {ErrorBoundary} from 'react-error-boundary'

const Bomb = ({string}) => {
    if (string === 'bomb') {
        throw new Error('БАЦ-БАЦ-БАЦ')
    }
    return `Hi ${string}`
}

const Error = () => {
    const [string, setString] = useState('');

    return (
        <div className="error-wrapper">
            <p className="error-p">Hi: </p>
            <input className="input" placeholder="bomb" value={string} onChange={(e) => {
                setString(e.target.value)
            }}/>
            <p className="error-p">input bomb for error</p>

            <ErrorBoundary
                FallbackComponent={ErrorFallback}
                resetKeys={[string]}
            >
                <Bomb string={string}/>
            </ErrorBoundary>
        </div>

    )
}

export default Error;
