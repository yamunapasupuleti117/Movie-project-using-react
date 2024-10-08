import React, { useState } from "react";
const Tiktak = () => {
    let [api, setapi] = useState([]);
    let [set, setst] = useState([]);
    let [a1, b1] = useState([]);
    let [c1, d1] = useState([]);
    let [e1, f1] = useState([]);
    let [g1, h1] = useState([]);
    let [i1, j1] = useState([]);
    let [k1, l1] = useState([]);
    let [m1, n1] = useState([]);
    let fill = () => {
        setapi("x")
    }
    let fails = () => {
        setapi("0")
    }
    let a = () => {
        setst("x")
    }
    let b = () => {
        setst("0")
    }
    let c = () => {
        b1("x")
    }
    let d = () => {
        b1("0")
    }
    let e = () => {
        d1("x")
    }
    let f = () => {
        d1("0")
    }
    let g = () => {
        f1("x")
    }
    let h = () => {
        f1("0")
    }
    let i = () => {
        h1("x")
    }
    let j = () => {
        h1("0")
    }
    let k = () => {
        j1("x")
    }
    let l = () => {
        j1("0")
    }
    let m = () => {
        l1("x")
    }
    let n = () => {
        l1("0")
    }
    let o = () => {
        n1("x")
    }
    let p = () => {
        n1("0")
    }

    if (api === set && set === a1) {
         return ("winner");
    }
    else if (c1 === e1 && e1 === g1) {
         return ("winner");
    }
    else if (i1 === k1 && k1 === m1) {
        return ("winner");
    }
    else if(api===c1 && c1===i1 ){
        return("winner")
    }
    else if(set===e1 && e1===k1){
        return("winner")
    }
    else if(a1===g1 && g1===m1){
        return("winner")
    }
    // else{
    //     console.log("loser");
    // }  


    return (
        <>
            <caption><strong><h1>TicTactoe</h1></strong></caption>
            <table border={1} style={{ height: "500px", width: "500px" }} >
                <tr>
                    <td onClick={fill} onDoubleClick={fails}>{api}</td>
                    <td onClick={a} onDoubleClick={b}>{set}</td>
                    <td onClick={c} onDoubleClick={d}>{a1}</td>
                </tr>
                <tr>
                    <td onClick={e} onDoubleClick={f}>{c1}</td>
                    <td onClick={g} onDoubleClick={h}>{e1}</td>
                    <td onClick={i} onDoubleClick={j}>{g1}</td>
                </tr>
                <tr>
                    <td onClick={k} onDoubleClick={l}>{i1}</td>
                    <td onClick={m} onDoubleClick={n}>{k1}</td>
                    <td onClick={o} onDoubleClick={p}>{m1}</td>
                </tr>

            </table >
        </>
    )
}

export default Tiktak