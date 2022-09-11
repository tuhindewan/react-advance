import Delete from '../icons/Delete';
import './card.scss';

function Card( props ) {

    return (

        <div>
            <div className='card'>
                <h1 className='cardTitle'> { props.title } </h1>
                <p className='cardDesc'>{ props.description }</p>
                <p className='cardFooter'>Card Desc</p>
                <Delete />
            </div>
        </div> 
    )

}


export default Card;