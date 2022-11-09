import { useRuleEngine } from "@aemforms/af-react-renderer";
import React from "react";

export default function NumberInput(props) {
    const [state, handlers] = useRuleEngine(props)
    const {label, value, id, description, valid, errorMessage, required} = state;

    const update = (e) => {
        debugger;
        handlers.dispatchChange(e.target.value);
    }

    const showLabel = (label && label.visible !== false && label.value)
    const labelValue = showLabel ? (required === true ? label.value + " *" : label.value) : ""

    return (<div className='cmp-adaptiveform-numberinput'>
            {showLabel ? 
            <label htmlFor={`input-${id}`} className="cmp-adaptiveform-numberinput__label">{labelValue}</label> : <></>}
            <input 
                className="cmp-adaptiveform-numberinput__input"
                type="number" 
                id={`input-${id}`} 
                value={value} 
                onInput={update}
            ></input>
            <div className="cmp-adaptiveform-numberinput__description" dangerouslySetInnerHTML={{ __html: description }}></div>
        </div>
    )
}