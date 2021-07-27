import ShowLogic from './ShowLogic'
import { Link } from 'react-router-dom'

const Show = () => {
    const { campground, handleClickDelete } = ShowLogic()

    return (
        <section>
            <h1>{ campground.title } </h1>
            <p>Location: { campground.location } </p>
            <p>Price: { campground.price } </p>
            
            <Link to={`/campgrounds/${ campground._id }/edit`}>Edit</Link>
            <button onClick={handleClickDelete} >Delete</button>
        </section>
    )
}

export default Show