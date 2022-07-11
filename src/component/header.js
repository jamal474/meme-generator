import smile from '../images/logo.png'

function Header () {
    return (
    <div className = "header" >
        <img src={smile} className = "logo" />
        <h1>Meme Generator</h1> 
    </div>
    )
}

export default Header;