import HomeLogic from './HomeLogic'
import { Link } from 'react-router-dom'

const Home = () => {
    const logic = HomeLogic()
    
    return(
        <section>
            <h1>Home</h1>
            <Link to='/campgrounds'>Show campgrounds</Link>
        </section>
    )
}


export default Home