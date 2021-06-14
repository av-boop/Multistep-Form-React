import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


class Sucess extends Component {
    render() {
        return (
            
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Sucess" />
                    <h1>Thank You For Submitting This Form</h1>

                    <p>We Will Get In Touch With You Very Soon</p>

                </React.Fragment>
            </MuiThemeProvider>
            
        )
    }
}

export default Sucess
