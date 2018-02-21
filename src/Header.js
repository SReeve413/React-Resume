import React, {Component} from 'react'

class Header extends Component {

    render() {
        return (
            <div>
                <a name="home"/>
                <header>

                    <button onClick="location.href='index.html#home'" className="btn btn-outline-dark">Home</button>
                    <button onClick="location.href='index.html#about'" className="btn btn-outline-dark">About
                    </button>
                    <button onClick="location.href='index.html#skills'" className="btn btn-outline-dark">Skills
                    </button>
                    <button onClick="location.href='index.html#education'"
                            className="btn btn-outline-dark">Education
                    </button>
                    <button onClick="location.href='index.html#employment'"
                            className="btn btn-outline-dark">Employment
                    </button>
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