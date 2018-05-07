import React, { Component } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Jumbotron from '../components/Jumbotron.jsx'


class About extends Component {
    render(){
        return(
            <div>
                <Navbar />
                <Jumbotron title="About" subtitle="the about subtitle!" />
                    <div className="container">
                        <h2>About</h2>
                        <p>Lorem ipsum dolor sit amet, per ignota aperiri forensibus an, vel ad illum clita fabulas. Qui et fuisset imperdiet, ex soleat meliore legendos pri. Ipsum lorem eu est, an ius ullum falli. Usu posse ipsum evertitur ea, dicit veniam debitis cu sit, mei legimus dissentiet in.</p>
                        <p>Per aliquam nostrum an. At nemore malorum concludaturque eos. Id aliquip qualisque gubergren sit, sed diam docendi laboramus ea. Sale sonet incorrupte id est, essent admodum accusam cum an, eam ea antiopam sadipscing. Aeque recteque te est, ius modo stet omnesque at, an sea paulo alterum urbanitas.</p>
                    </div>
                <Footer />
            </div>
        );
    }
}

export default About;