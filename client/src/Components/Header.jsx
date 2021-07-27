import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Header</h1>
            <Link to='/campgrounds/new'>New campground</Link>
        </header>
    )
}

export default Header