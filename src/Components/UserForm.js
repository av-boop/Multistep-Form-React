import React, { Component } from 'react'
import FormUserDetail from './FormUserDetail'
import FormPersonalDetails from './FormPersonalDetails'
import Confirm from './Confirm'
import Sucess from './Sucess'

class UserForm extends Component {

    //creating object of state
    state = {

        step:1,
        firstName:'',
        lastName:'',
        email:'',
        occupation:'',
        city:'',
        bio:''
    }

    //proceed to next step
    nextStep = () => {

        const {step} = this.state;

        this.setState({
           
            step:step + 1
        })

    }

    //proceed to prev step
    prevStep = () => {

        const {step} = this.state;

        this.setState({
           
            step:step - 1
        })

    }

    //handle field changes
    handleChange = (input) => (e) => {

        this.setState({
            
            [input] : e.target.value
        
        })
    }


    render() {

        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio}

        switch(step) {

            case 1:
                return(

                    <FormUserDetail 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}

                    
                    />
                )

            case 2:
                return(

                    <FormPersonalDetails 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep} handleChange = {this.handleChange}
                    values = {values}
                    
                    />
                )
            case 3:
                return(

                    <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep} 
                    values = {values}
                    
                    />
                )
            case 4:
                return <Sucess />  
                
                   
        }


    }
}

export default UserForm
