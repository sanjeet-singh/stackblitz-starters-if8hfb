import { useEffect, useReducer, useState } from "react";
import { Button, Form, Nav, Navbar, NavDropdown ,Toast} from "react-bootstrap";
import {useLocation, useNavigate} from 'react-router-dom';
import ToastComponent from "./toastcomponent";


const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }
const validationErrors={
    name:"",
    email:"",
    phone:"",
    seats:"",
    attendees:""
}
function EventCreation() {
    const location = useLocation();
    const history = useNavigate();
    
    console.log(location);
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);   
    const [errors, setErrors] = useState(null);   
    const [showToast,setShowToast]=useState(false);
    const cancel=()=>{
        history('/event-list');
    }
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);
    
        // setTimeout(() => {
        //   setSubmitting(false);
        // }, 3000);
      }
    
      const handleChange = event => {
        setFormData({
          name: event.target.name,
          value: event.target.value,
        });
      }
    useEffect(()=>{
        const _error={...validationErrors};
        var RegTextExpression = /^[a-zA-Z]*$/;
        var RegEmailExpression = /\S+@\S+\.\S+/;
        if(submitting || formData){
            console.log(formData);

            if(!formData.name)
                _error.name="Please enter your name";
            else if(formData.name && !RegTextExpression.test(formData.name))
                _error.name="Only letters and spaces are allowed";

            if(!formData.email)
                _error.email="Please enter your email";
            else if(formData.email && !RegEmailExpression.test(formData.email))
                _error.email="Invalid email";

            if(!formData.seats)
                _error.seats="Please enter the number of seats";
            else if(formData.seats && formData.seats>location.state.ticketsAvailability)
                _error.seats="Number of seats selected is more than available seats";

            if(!formData.phone)
                _error.phone="Please enter your phone";
            else if(( !formData.phone.match(/\d/g) || formData.phone && formData.phone.match(/\d/g).length>10) )
                _error.phone="Invalid phone no";

            if(!formData.attendees)
                _error.attendees="Please enter the name of Attendee";
            
            setErrors({..._error});
            if(submitting)
            {
                if(Object.values(_error).find(x=>x)!==undefined){
                    setShowToast(true);
                    setTimeout(() => {
                        history('/event-list');
                    }, 4000);
                }
            }   
        }
        
    },[submitting,formData])
    return (
        <>
           { showToast &&
            <ToastComponent></ToastComponent>
           }
           <div className="row">
                <div className="col-sm-12">
                    <h4>{location.state.name}</h4>
                </div>
                <div className="col-sm-12">
                    <label>Number of available seats: {location.state.ticketsAvailability}</label>
                </div>
           </div>
           <div className="row mt-3">
            <div className="col-sm-3">
                <img src={location.state.img} width={290}/>
            </div>
            <div className="col-sm-8 ms-4">
                <Form onSubmit={handleSubmit}>
                <div className="row mt-1">
                    <div className="col-sm-4 text-start">
                        <Form.Label htmlFor="inputPassword5">Name</Form.Label>
                    </div>
                    <div className="col-sm-8">
                        <Form.Control
                        type="text"
                        id="name"
                        name="name"
                        aria-describedby="nameHelpBlock"
                        onChange={handleChange}
                        />
                        {submitting && errors.name &&
                         <Form.Text id="nameHelpBlock" muted>
                           {errors.name}
                        </Form.Text>
                        }
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4  text-start">
                        <Form.Label htmlFor="inputPassword5">Email</Form.Label>
                    </div>
                    <div className="col-sm-8">
                        <Form.Control
                        type="text"
                        id="email"
                        name="email"
                        aria-describedby="emailHelpBlock"
                        onChange={handleChange}
                        />      
                         {submitting && errors.email &&
                         <Form.Text id="emailHelpBlock" muted>
                           {errors.email}
                        </Form.Text>
                        }                 
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4  text-start">
                        <Form.Label htmlFor="inputPassword5">Phone No.</Form.Label>
                    </div>
                    <div className="col-sm-8">
                        <Form.Control
                        type="text"
                        id="phone"
                        name="phone"
                        aria-describedby="phoneHelpBlock"
                        onChange={handleChange}
                        />    
                         {submitting && errors.phone &&
                         <Form.Text id="phoneHelpBlock" muted>
                           {errors.phone}
                        </Form.Text>
                        }                   
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4  text-start">
                        <Form.Label htmlFor="inputPassword5">Number Of seats</Form.Label>
                    </div>
                    <div className="col-sm-8">
                        <Form.Control
                        type="text"
                        id="seats"
                        aria-describedby="seatsHelpBlock"
                        name="seats"
                        onChange={handleChange}
                        />  
                         {submitting && errors.seats &&
                         <Form.Text id="seatsHelpBlock" muted>
                           {errors.seats}
                        </Form.Text>
                        }                     
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4  text-start">
                        <Form.Label htmlFor="inputPassword5">Number Of attendees</Form.Label>
                    </div>
                    <div className="col-sm-8">
                        <Form.Control
                        type="text"
                        id="attendees"
                        name="attendees"
                        aria-describedby="attendeesHelpBlock"
                        onChange={handleChange}
                        /> 
                         {submitting && errors.attendees &&
                         <Form.Text id="attendeesHelpBlock" muted>
                           {errors.attendees}
                        </Form.Text>
                        }                      
                    </div>
                </div>
                <div className="row mt-1">
                    <div className="col-sm-4">
                        <Button className="btn-orange"  type="submit"> <label className="m-1">Submit</label></Button>
                    </div>
                    <div className="col-sm-8">
                        <Button className="btn-orange" onClick={()=>cancel()}> <label className="m-1">Cancel</label></Button>
                    </div>
                </div>
                </Form>
            </div>
           </div>
        </>
      );
    
}

export default EventCreation;
