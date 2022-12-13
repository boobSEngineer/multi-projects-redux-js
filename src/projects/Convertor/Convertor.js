import React, {useState} from "react";
import c from "./Converotr.module.css";

const formatterF = new Intl.NumberFormat('en-US', {
    style: "unit",
    unit: "fahrenheit",
    unitDisplay: "short"

})

const formatterC = new Intl.NumberFormat('en-US', {
    style: "unit",
    unit: "celsius",
    unitDisplay: "short"

})


const Convertor = () => {
    const [value, setValue] = useState(0);
    const [status, setStatus] = useState('celsiusCF');

    let converterTo = (value, status) => {
        let convert_value = 'oooiii';

        switch (status) {
            case 'celsiusCF': {
                convert_value = value * 1.8 + 32;
                break;
            }
            case 'fahrenheitFC': {
                convert_value = (value - 32)/1.8;
                break;
            }
        }
        return convert_value;
    }

    return (
        <div className={c.wrapper}>

            <h2>format: {status}</h2>

            <div className={c.input_convertor}>
                <p>Input:</p>
                <input  type='number' value={value} onChange={(e) => {
                    setValue(parseInt(e.target.value));
                }}/>
                { status === 'fahrenheitFC' ?
                    <span>°F</span>
                    : <span>°C</span>
                }
            </div>


            <br/>
            <div className={c.button_convertor}>
                <button  onClick={()=> {
                    status === 'celsiusCF'? setStatus('fahrenheitFC') : setStatus('celsiusCF')
                }}>swap</button>
                <button  onClick={()=> {
                    setValue(0)
                    setStatus('celsiusCF')
                }}>clear</button>
            </div>
            <br/>
            <div className={c.output}>
                <p>Output:</p>
                { status === 'celsiusCF' ?
                    formatterF.format(converterTo(value, status))
                    : formatterC.format(converterTo(value, status))
                }
            </div>

        </div>
    )
};

export default Convertor;
