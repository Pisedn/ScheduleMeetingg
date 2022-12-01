import React from 'react'
import "./App.css";
import {  useForm } from "react-hook-form";
import { MdWatchLater } from 'react-icons/md';
import { IconContext } from "react-icons";
import {AiTwotoneCalendar} from "react-icons/ai";
import {BiWorld} from "react-icons/bi";
import { confirm } from "react-confirm-box";





const Schedulemeeting =() =>{
      const {
        register,
        handleSubmit,
        formState: { errors },
       reset,
        trigger,
      } = useForm();
    
      

      
      
      
      const onSubmit = (data) => {
        console.log(data);
    confirm(`${data.name} , ${data.email} and ${data.message}`);
       
        
      reset();
      };


      return (
        <div className="container pt-5">
          <div className="row justify-content-sm-center justify-content-xs-center justify-content-md-center pt-5">
          <div className="col-xs-12 col-sm-12  col-md-4 col-lg-4  col-xl-4 shadow round pt-3 " style={{width:"430px", paddingBottom:'20px'}} >
         <div className="pt-1 mx-3">
         <small className="text-small pt-3">Gaurav Garg</small>
          <h4 > <b>15 Minute Meeting </b></h4>
          <div className="pt-2">
          <IconContext.Provider value={{size:25}}>
      <MdWatchLater/>
    </IconContext.Provider>
     <small> 15 min</small>
     </div>
     <div className="pt-2">
     <IconContext.Provider value={{size:25}}> <AiTwotoneCalendar/></IconContext.Provider>
     <small> 9:30am-9:45am, Friday, September 16, 2022</small></div>
     <div className="pt-2">
     <IconContext.Provider value={{size:25}}> <BiWorld/></IconContext.Provider>
     <small> Indian Standared Time</small>
     </div>

         </div>
          


            </div>
            <div className="col-xs-12 col-sm-12  col-md-6 col-lg-6 col-xl-6 shadow round pb-3" style={{width:"430px"}}>
              <form onSubmit={handleSubmit(onSubmit)} className="ms-3">
                <div className="form-group"  >
                <h5 className="pt-3"><b>Enter Details</b></h5>
                  <label className="col-form-label"><b>Name*</b></label>
                  <input
                    type="text"
                    className={`form-control ${errors.name && "invalid"} `}
                    {...register("name", { required: "Name is Required" })}
                    onKeyUp={() => {
                      trigger("name");
                    }}
       
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name.message}</small>
                  )}
                </div>
                
                <div className="form-group">
                  <label className="col-form-label"><b>Email*</b></label>
                  <input
                    type="text" 
                    className={`form-control ${errors.email && "invalid"}`}
                    {...register("email", { required: "Email is Required" ,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    }})}
                    onKeyUp={() => {
                      trigger("email");
                    }}
                    
                    
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email.message}</small>
                  )}
                </div>

                <button className="btn btn-outline-primary rounded-pill my-3"> Add Guests</button> 
                   
                
                <div className="form-group">
              <label className="col-form-label"><b>Please share anything that will help prepare for meeting</b></label>
              <textarea
                className={`form-control ${errors.message && "invalid"}`}
                {...register("message", { 
                minLength: {
                  value: 10,
                  message: "Minimum Required length is 10",
                },
                maxLength: {
                  value: 50,
                  message: "Maximum allowed length is 50 ",
                }
               })}
               onKeyUp={() => {
                trigger("message");
              }}
               ></textarea>
              {errors.message && (
                <small className="text-danger">{errors.message.message}</small>
              )}
            </div>
                <input
                  type="submit"
                  className="btn btn-primary rounded-pill my-3"
                  value="Schedule Event"/> 
                   
                   
              </form>
            </div>
          </div>
        </div>
      );
    }
    
   

export default Schedulemeeting
