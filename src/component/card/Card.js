import './Card.css'


function Card(props){
    return <div className='cardComponent'>
        <div className="card-img">
            <img  src={props.imageUrl} alt="nature"/>
        </div>
        <div className='card-title'>
            <h1 >{props.title}</h1>
        </div>
        <div className='card-body'> 
            <h3 >{props.body}</h3>
        </div>
    </div>
}
export default Card;