import React from 'react'
import screenlyLogo from '../../../assets/Logo.png'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-hot-toast';


export default function Login({SaveLoginData}) {
let navigate=useNavigate();

async function AuthApi(values) {
  let {data}=await axios.post(`https://note-sigma-black.vercel.app/api/v1/users/signIn`,values)
  console.log(data);
  localStorage.setItem('usertoken',data.token);
  SaveLoginData()
  toast.success("Welcome To Home",{position:"top-right"})
  navigate("/home")
  
}

  let validationSchema=Yup.object({
    email:Yup.string().email("Email is Invalid").required("Email is required"),
    password:Yup.string().matches(/^[A-Z][a-z0-9]{5,8}$/,"Password Should Start With Capital").required("Password is required")
  })

  let formikAuth=useFormik({
initialValues:{
  email:"",
    password:"",
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
<h3 className='text-center text-white py-2 mb-3 bg-pink'>Login</h3>
<form onSubmit={formikAuth.handleSubmit}>
  <div className="form-group">
    <label htmlFor="Email" className='mb-2 h5 notfound'>Email</label>
    <input className='form-control trend' id='Email'
     type="email" name='email' placeholder='Email'
     value={formikAuth.values.email}
     onChange={formikAuth.handleChange}
     onBlur={formikAuth.handleBlur}
     />
     {formikAuth.errors.email&&formikAuth.touched.email?<div className='alert alert-danger'>{formikAuth.errors.email}</div>:""}
  </div>
  <div className="form-group">
    <label htmlFor="Password" className='mb-2 h5 notfound mt-2'>Password</label>
    <input className='form-control trend' id='Password'
     type="password" name='password' placeholder='Password'
     value={formikAuth.values.password}
     onChange={formikAuth.handleChange}
     onBlur={formikAuth.handleBlur}
     />
          {formikAuth.errors.password&&formikAuth.touched.password?<div className='alert alert-danger'>{formikAuth.errors.password}</div>:""}

  </div>

<div className=" d-flex justify-content-center mt-3">
<button type='submit' className=' border border-none p-2 px-4 rounded rounded-2 bg-pink text-white '>Login</button>
</div>
</form>
      </div>
    </div>
  </div>
  
  </>

}
