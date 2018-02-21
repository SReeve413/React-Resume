import React, {Component} from 'react'

class Employment extends Component {
    render() {
        return (
            <div>
                <a name="employment"/>
                <div className="space">
                </div>
                <div className="card" id="employ">
                    <div>
                        <h4 className="_skills"><b>_Employment</b></h4>

                    </div>
                    <div>
                        <h3><b>Operations Manager</b> at Kinex Connect</h3>
                        <p className="n-font-employ">I managed a group of 7 Mechanical Engineering students from the
                            University of Utah.
                            I had to organize productions to optimize work flows. I created testing and quality
                            standards and trained
                            all new employees on manufacturing operations</p>
                        <h3><b>Development Engineer</b> at Method Therapeutic Solutions</h3>
                        <p className="n-font-employ">I designed and developed improvements to a knee therapy device with
                            2 coworkers.
                            I manufactored unique parts from technical drawing using raw material. I modified/enhanced
                            photos for advertisement
                            and a user's manual. I also devised test criteria for device quality standards.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Employment