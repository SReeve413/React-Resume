import React, {Component} from 'react'
import Header from './Header'

class Skills extends Component{

    render(){
        return(
           <div>
               <Header />

               <div className="space">
               </div>
               <div className="card" id="skills">
                   <div><h4 className="_skills"><b>_Skills</b></h4></div>
                   <div id="skills2">
                       <div className="text-box" id="skills3">
                           <div><h2>Technical Skills</h2></div>
                           <ul>
                               <li className="li-font">HTML5</li>
                               <li className="li-font">CSS</li>
                               <li className="li-font">Javascript*</li>
                               <li className="li-font">GetHub</li>
                           </ul>
                       </div>
                       <div className="text-box" id="skills4">
                           <div><h2>Artistic Skills</h2></div>
                           <ul>
                               <li className="li-font">Photoshop</li>
                               <li className="li-font">Illustrator</li>
                               <li className="li-font">Photography</li>
                               <li className="li-font">Lightroom</li>
                           </ul>
                       </div>
                   </div>
               </div>
           </div>
        )
    }
}

export default Skills