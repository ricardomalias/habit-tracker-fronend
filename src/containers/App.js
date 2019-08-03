import React, { Component } from "react";

import Goal from '../containers/Goal'

import NavigationBar from '../components/NavigationBar'
import Container from '@material-ui/core/Container';


class App extends Component {

    render() {

        return(
            <React.Fragment>
                <NavigationBar></NavigationBar>
                <br/>
                <Container maxWidth="lg">
                    <Goal></Goal>
                </Container>
                <br/>
                <br/>
            </React.Fragment>
        );
    }
}

export default (App);
