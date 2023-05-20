import { Fragment } from "react"
import {FaPython} from 'react-icons/fa';

const IconByLanguage = ({lang}) => {
    debugger;
    switch(lang){
        case 'python':
            return <FaPython/>
        default:
            return <Fragment></Fragment>
    }
    
}

export default IconByLanguage;