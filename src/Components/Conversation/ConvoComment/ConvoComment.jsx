import './ConvoComment.scss';


function ConvoComment (props) {


    
    return(

    <article className='conversation__comment'>
        <div className='conversation__comment--pic'>
        <img className='conversation__comment--pic__image' alt="" />
        </div>
        <div className='conversation__text'>
        <div className='conversation__comment--details'>
            <p className='conversation__text--bold'>{props.name}</p>
            <p className='conversation__text--date'>{props.timestamp}</p>
        </div>
        <div className='conversation__comment--body'>
            <p className='conversation__comment--body__text'>{props.comment}</p>
        </div>
        </div>
    </article>

    )
}

export default ConvoComment;



