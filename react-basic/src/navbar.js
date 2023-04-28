import './navbar.css';

function navbar(){
    return (
        <nav class="nav-main">
            <ul>
                <li>Home</li>
                <li>References</li>
                <li>Resourse</li>
                <li>Support</li>
            </ul>
            <h1>meituhedd</h1>
            <form>
                <input class="form-control" placeholder="search.." type="text"></input>
                <input type="submit" value="Search"></input>
            </form>
        </nav>
    );
}

export default navbar;