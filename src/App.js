import './app.scss';
import Card from './components/card/Card';
import cards from './components/card/data.json';


function App(){
    
    return(
        <div>
            <h1 className='headingStyle' >Todo App</h1>
            {
                cards.map( (card) => {
                    return <Card key={card.title.toString()} title={card.title} description={card.description} />
                } )
            }
        </div>
    )
}

export default App;