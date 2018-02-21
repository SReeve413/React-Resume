import React, {Component} from 'react'

class About extends Component{

    render(){
        return(
            <div>
                <a name="about"/>
                <div className="space">
                </div>

                <div className="card">
                    <div>
                        <div className="text-box" id="about-card">
                            <div id="about">
                                <h4><b>_about</b></h4>
                            </div>
                            <div>
                                <table>Name
                                    <tr>
                                        <td>Name:</td>
                                        <td>Shane Reeve</td>
                                    </tr>
                                    <tr>
                                        <td>Email:</td>
                                        <td>Shanereeve@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>(801) 419-9702</td>
                                    </tr>
                                    <tr>
                                        <td>Date of Birth:</td>
                                        <td>April 13, 1994</td>
                                    </tr>
                                    <tr>
                                        <td>Nationaliy:</td>
                                        <td>United States</td>
                                    </tr>
                                </table>
                                <div id="resume">
                                    <button onClick="" className="btn btn-outline-dark"
                                            id="resume-button">Download Resume
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="short-history">
                        <div><h2>Short History</h2></div>
                        <div>
                            <p className="n-font">
                                I'm a Full Stack Web-Developer form Salt Lake City, Utah. I have completed a
                                coding bootcamp from Helio
                                training.
                                I also have a bachelor's degree in Mechanical Engineering from the University of
                                Utah.
                            </p>
                            <p className="n-font2">
                                At Helio, we learned to work with each other to overcome problems and use
                                version control to track and
                                improve projects. We created several project to portray useful skills that we
                                have leaved.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About