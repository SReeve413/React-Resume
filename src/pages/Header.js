import React, {Component} from 'react'
import {
    Link
} from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div>


                <header>
                    <button className="btn btn-outline-dark"><Link to="/">Home</Link></button>
                    <button className="btn btn-outline-dark"><Link to="/about">About</Link></button>
                    <button className="btn btn-outline-dark"><Link to="/skills">Skills</Link></button>
                    <button className="btn btn-outline-dark"><Link to="/education">Education</Link></button>
                    <button className="btn btn-outline-dark"><Link to="/employment">Employment</Link></button>
                    {/*<button onClick="location.href='index.html#portfolio'"*/}
                    {/*className="btn btn-outline-dark">Portfolio*/}
                    {/*</button>*/}
                    {/*<button onClick="location.href='index.html#blog'" className="btn btn-outline-dark">Blog</button>*/}
                    {/*<button onClick="location.href='index.html#contact'" className="btn btn-outline-dark">Contact*/}
                    {/*</button>*/}
                </header>
            </div>
        )
    }


}

export default Header