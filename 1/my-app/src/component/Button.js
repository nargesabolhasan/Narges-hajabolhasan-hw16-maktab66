import {  memo } from "react";

const Button = function ({children,onClick}){
    console.log("Button render")
    return <button type="button" onClick={onClick}> {children} </button>
}
export default memo(Button)