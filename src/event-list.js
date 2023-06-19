import { useEffect, useState } from "react";
import { Button, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import axios from 'axios';
import { FaCalendar,FaCalendarCheck } from "react-icons/fa";
import  {useNavigate}  from "react-router-dom";

function EventList() {
    const [list,setList]=useState([]);
    const [filteredList,setFilteredList]=useState([]);
    const history = useNavigate();
    const navigateTo = (item) => history('/event-creation',{state:item});
    useEffect(()=>{
        const fetchData = async () => {
           axios.get('./event.json').then((res)=>{
            console.log(res.data)
            setList(res.data);
            setFilteredList(res.data);
           }).catch((err)=>console.log(err));
           
        }
        fetchData();
    },[])
    const searchEvent=(event)=>{
        var filteredList=list
        var searchText=event.target.value;
        console.log(event)
        if(searchText)
        {
            filteredList=filteredList.filter((x)=>x.name.toLowerCase().indexOf(searchText.toLowerCase())!=-1)
        }
        setFilteredList([...filteredList]);
    }
    return (
        <>
        <div className="row">
            <div className="col-sm-1"></div>
            <div className="col-sm-6 p-0 m-1 ">
                <Form.Control onChange={(event)=>searchEvent(event)} type="text" placeholder="Search By Event title" />
            </div>
        </div>
        {filteredList && filteredList.length>0 &&
        <div className="row"><div className="col-sm-3 ms-2"> <h4>Events({filteredList.length})</h4></div></div>}
        <div  className="row">
            {
               
                filteredList && filteredList.length>0 && filteredList.map((item)=>{
                    return(
                        <div className="col-sm-3 offset-1">
                            <div className="row">
                                <div className="col  p-0">
                                    <img src={item.img} width="280"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col p-0">
                                  <label className="item-text-overflow"> <strong> {item.name}</strong></label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-5  p-0">
                                    {item.date}
                                </div>
                                <div className="col-md-7  p-0">
                                   <label>Tickets Available: {item.ticketsAvailability}</label> 
                                </div>
                            </div>
                            <div className="row">
                                <div className="col m-1">
                                    <Button className="btn-orange" onClick={()=>navigateTo(item)} disabled={item.ticketsAvailability==0}> <FaCalendarCheck /><label className="m-1">Book Event</label></Button>
                                </div>
                            </div>
                           
                        </div>
                    )
                })
                
            }
            {
                filteredList.length==0 && <div className="col"><h3>No Record Found!</h3></div>
            }
        </div>
        </>
      );
    
}

export default EventList;
