import React from 'react'
import './lang-tooltip.styles.scss'
import { Link } from 'react-router-dom';

const LangTooltip = ({language}) =>(
    <ul className='lang-tooltip'>
    {
        language && language.map( (lang, index) => <li key={index}>
                <Link to='#'>{lang}</Link>
            </li> )
    }
    </ul>
)

export default LangTooltip;