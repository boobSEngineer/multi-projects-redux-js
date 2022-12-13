import React, {useEffect, useRef, useState} from "react";
import "./Diagram.css";
import {useDispatch, useSelector} from "react-redux";
import {addValue, removeAllValues, editNumber} from "../../redux-store/Slice/projects/Diagram/diagram-slice";


let slice = (array) => {
    let counter_sum = 0;
    array.forEach(c => {
        counter_sum += c.number
    })
    array = array.map(c => {
        return {...c, number: c.number / counter_sum * 2 * Math.PI}
    })
    return array;
}

let randomColors = []
{
    let randomColor = () => {
        let toHex = (x) => {
            let h = x.toString(16);
            if (h.length === 1)
                h = '0' + h
            return h;
        }
        while (true) {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            if (r < 200 || g < 200 || b < 200)
                return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
        }
    }
    for (let i = 0; i < 100; i++) {
        randomColors.push(randomColor());
    }

}

const Diagram = () => {
    const dispatch = useDispatch();
    let array_values = useSelector(state => state.diagram.values);
    let canva = useSelector(state => state.diagram.canvas);

    const canvasRef = useRef(null);

    let draw = () => {
        if (canvasRef.current) {
            let ctx = canvasRef.current.getContext('2d');
            //clear canvas
            ctx.globalCompositeOperation = 'destination-out';
            ctx.clearRect(0, 0, canva.width, canva.height);

            if (array_values.length > 0) {
                let next = 0;
                let end = 0;
                let start = 0;
                let i = 0;
                ctx.font = "32px serif";

                ctx.textBaseline = "middle";
                ctx.textAlign = "center";
                ctx.globalCompositeOperation = "source-over";
                slice(array_values).forEach(c => {
                    next = c.number;
                    end += next;
                    start = end - next;
                    ctx.fillStyle = randomColors[i];
                    ctx.strokeStyle = "#050505";
                    ctx.beginPath();
                    ctx.arc(canva.width / 2, canva.height / 2, 130, start, end);
                    ctx.lineTo(canva.width / 2, canva.height / 2);
                    ctx.fill();
                    ctx.stroke();
                    i += 1;

                    ctx.beginPath();
                    let angle = (start + end)/2 ;
                    ctx.fillStyle = "white";
                    if (c.number > 0.2) {
                        ctx.fillText(`${c.id}`, canva.width / 2 + Math.cos(angle) * 100, canva.height / 2 + Math.sin(angle) * 100);
                    }
                })


            }
        }
    };

    draw();

    return (
        <div className="diagram-wrapper">
            <h1>Circle diagram </h1>
            <div className="main">
                <div className="box">
                    <div className="list">
                        {
                            array_values.length > 0
                                ? array_values.map(v => {
                                    return (
                                        <div className="list-item">
                                            <span>Input id: {v.id}</span>
                                            <input placeholder="input value" type='number' value={v.string}
                                                   className="list-input"
                                                   onChange={(e) => {
                                                       dispatch(editNumber({
                                                           id: v.id,
                                                           string: e.target.value,
                                                       }))
                                                   }}
                                            />
                                        </div>
                                    )
                                })

                                : <p className="initial">Press +</p>
                        }
                    </div>

                    <div className="item-button">
                        <button onClick={() => {
                            dispatch(addValue())
                        }}>+
                        </button>
                        <button onClick={() => {
                            dispatch(removeAllValues());
                        }}>clear
                        </button>
                    </div>
                </div>
                <canvas ref={canvasRef} style={{'background': '#faf8f8'}} height={canva.height} width={canva.width}/>
            </div>
        </div>
    )
}

export {Diagram};
