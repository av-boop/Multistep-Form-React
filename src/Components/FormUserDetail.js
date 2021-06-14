import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

class FormUserDetail extends Component {

    continue = (e) => {

        const {values} = this .props
        e.preventDefault();
        if(values.length<=0){

            alert("enter all values")
        }
        // else if(values.firstName.length<=0){

        //     alert("Please Enter First Name")
        // }
        // else if(values.lastName.length<=0){

        //     alert("Please Enter Last Name")
        // }
        // else if(values.email.length<=0){

        //     alert("Please Enter Email")
        // }

        else {

            this.props.nextStep();

        }

        
        //this.props.nextStep();
        
        
    }

    render() {

        const {values, handleChange} = this.props;
        
        return (
           
           <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter User Details" />

                    <TextField 
                    hintText="Enter Your First Name"
                    floatingLabelText="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                    
                    />
                    <br />
                   
                    <TextField 
                    hintText="Enter Your Last Name"
                    floatingLabelText="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                    
                    />

                    <br />
                    <TextField 
                    hintText="Enter Your Email"
                    floatingLabelText="Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    
                    />

                    <br />
                    <RaisedButton 
                     
                     label="Continue"
                     primary={true}
                     style={styles.button}
                     onClick={this.continue}

                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

//object for button style | object css
const styles = {

    button : {

        margin:15
    }

}

export default FormUserDetail
