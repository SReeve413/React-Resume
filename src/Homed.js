import React, {Component} from 'react'
import Headshot from './head-shot.jpg';

class Homed extends Component {

    render() {
        return (
<div>
                <div className="card" id="home">
                    <div>
                        <img src={Headshot} className="head-shot" alt="head shot"/>
                    </div>
                    <div>
                        <div className="text-box">
                            <h2>Hello!<br/>My Name is<br/><b>Shane Reeve</b></h2>
                            <h3 id="intro">New to the Web Development World,<br/>Excited to learn and grow.</h3>
                        </div>
                    </div>
                </div>
</div>

        )
    }


}

export default Homed