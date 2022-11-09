import { useRuleEngine } from "@aemforms/af-react-renderer";
import React from "react";

export default function Text(props) {
    const [state, handlers] = useRuleEngine(props)
    const {value, richText} = state
    return (
        <div className='cmp-adaptiveform-text-container'>
            {richText === true ?
                <div className='cmp-adaptiveform-text' dangerouslySetInnerHTML={{ __html: value }}></div> :
                <div className='cmp-adaptiveform-text'>{value}</div>
            }
        </div>
    )
}