import React, { useEffect, useState } from 'react';
import ControlComponent from '../components/ControlComponent';
import './Visualizer.css';

export default function Visualizer() {
    const [array, setArray] = useState([]);
    const [length, setLength] = useState(200);

    useEffect(() => {
        generateArray(length);
    }, [length]);

    const generateArray = (length) => {
        const newArray = [];
        for (let i = 0; i < length; i++) newArray.push(Math.floor(Math.random() * 700) + 10);
        setArray(newArray);
    }


    return (
        <div className="visualizer" >
            <div className="title">Sorting Algorithms Visualizer</div>
            <ControlComponent
                setLength={setLength}
                setArray={setArray}
                generateArray={generateArray}
                length={length}
                array={array}
            />
            <div className="sorting">
                {array.map((number, idx) => {
                    return (
                        <div key={idx} className="values" style={{ "height": `${number}px` }}></div>
                    );
                })}
            </div>
            <div className="title"><label>Made by <a href="https://edisonguo.tech">Edison</a></label></div>
        </div>
    );
}