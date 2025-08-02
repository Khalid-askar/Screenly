import React from 'react'
import screenlyLogo from '../../../assets/Logo.png'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast';

export default function Register() {
    let navigate=useNavigate();

async function AuthApi(values) {
  let {data}=await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signUp`,values)
  console.log(data);
  toast.success("Welcome To Login",{position:"top-right"})
  navigate("/")
  
}
let validationSchema=Yup.object({
    name:Yup.string().min(4,"name should be more than 4 characters").max(15,"name should be less than 15 characters").required("Name is required"),
    email:Yup.string().email("Email is Invalid").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"Password Should Start With Capital").required("Password is required"),
    age:Yup.number().max(80,"Age should be less than 80").min(18,"Age should be more than 18").required("Age is required "),
    phone:Yup.string().matches(/^01[0125][0-9]{8}$/,"Phone is Invalid").required("Phone is Required")

  })

  let formikAuth=useFormik({
initialValues:{
  name:"",
  email:"",
  password:"",
  age:"",
  phone:"",
},
validationSchema:validationSchema,
onSubmit:(value)=>AuthApi(value)

  })
  return <>
  <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
  <img src={screenlyLogo} className='w-100 mt-5 mb-5' alt="" />
        </div>
        <div className="col-md-6 mt-5">
  <h3 className='text-center text-white py-2 mb-3 bg-pink'>Register</h3>
  <form onSubmit={formikAuth.handleSubmit}>
  <div className="form-group">
      <label htmlFor="Name" className='mb-2 h5 pink-text'>Name</label>
      <input className='form-control trend' id='Name'
       type="text" name='name' placeholder='Name'
       value={formikAuth.values.name}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
       {formikAuth.errors.name&&formikAuth.touched.name?<div className='alert alert-danger'>{formikAuth.errors.name}</div>:""}
    </div>
    <div className="form-group">
      <label htmlFor="Email" className='mb-2 h5 pink-text'>Email</label>
      <input className='form-control trend' id='Email'
       type="email" name='email' placeholder='Email'
       value={formikAuth.values.email}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
       {formikAuth.errors.email&&formikAuth.touched.email?<div className='alert alert-danger'>{formikAuth.errors.email}</div>:""}
    </div>
    <div className="form-group">
      <label htmlFor="Password" className='mb-2 h5 pink-text mt-2'>Password</label>
      <input className='form-control trend' id='Password'
       type="password" name='password' placeholder='Password'
       value={formikAuth.values.password}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
            {formikAuth.errors.password&&formikAuth.touched.password?<div className='alert alert-danger'>{formikAuth.errors.password}</div>:""}

    </div>
    <div className="form-group">
      <label htmlFor="Age" className='mb-2 h5 pink-text mt-2'>Age</label>
      <input className='form-control trend' id='Age'
       type="number" name='age' placeholder='Age'
       value={formikAuth.values.age}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
            {formikAuth.errors.age&&formikAuth.touched.age?<div className='alert alert-danger'>{formikAuth.errors.age}</div>:""}

    </div>

    <div className="form-group">
      <label htmlFor="Phone" className='mb-2 h5 pink-text mt-2'>Phone</label>
      <input className='form-control trend' id='Phone'
       type="tel" name='phone' placeholder='phone'
       value={formikAuth.values.phone}
       onChange={formikAuth.handleChange}
       onBlur={formikAuth.handleBlur}
       />
            {formikAuth.errors.phone&&formikAuth.touched.phone?<div className='alert alert-danger'>{formikAuth.errors.phone}</div>:""}

    </div>
  
  <div className=" d-flex justify-content-center mt-3">
  <button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 bg-pink text-white '>Register</button>
  </div>
  </form>
        </div>
      </div>
    </div>


  </>
}
