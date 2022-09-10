import { useState } from 'react';
import Delete from '../icons/Delete';
import './card.scss';

function Card( props ) {

    const [text, setText] = useState("")

    const handleChange = (event) => {
        setText( event.target.value )
    }

    return (

        <div>
            <div className='card'>
                <h1 className='cardTitle'> { props.title } </h1>
                <p className='cardDesc'>{ props.description }</p>
                <p className='cardFooter'>Card Desc</p>
                <Delete />
            </div>
            <p>{ text }</p>
            <div>
                <input type='text' onChange={handleChange} />
            </div>
        </div> 
    )

}


export default Card;