import React, {useState} from 'react';


type PropsType = {
    on: boolean
    onChange?: () => void // Здесь указываем ананонимную функцию, которая отправляется в контролируемый стейт(UseState)
}

export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        backgroundColor: props.on  ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "2px",
        padding: "2px",
        backgroundColor: props.on  ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        backgroundColor: props.on ? "yellow" : "red"
    }
    return <div>
        <div style={onStyle} onClick={props.onChange}>On</div> {/* Начинаем отсюда прокидывать колбэк */}
        <div style={offStyle} onClick={props.onChange}>Off</div>
        <div style={indicatorStyle}></div>
        </div>
};

