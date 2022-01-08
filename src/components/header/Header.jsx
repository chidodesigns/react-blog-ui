import "./header.css"

export default function Header() {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitleSm">All Things Web Development!</span>
                <span className="headerTitleLg">Blog</span>
            </div>   
            <img className="headerImg" src="https://images.pexels.com/photos/1812960/pexels-photo-1812960.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" />         
        </div>
    )
}
