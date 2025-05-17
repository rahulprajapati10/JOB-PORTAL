import React, { useState } from 'react'
import Navbar from '../components_lite/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/data.js';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '@/redux/authSlice';

const Login = () => {

    const [input, setInput] = useState({
        email: "",
        password: "",
        role: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const  loading =  useSelector(store => store.auth.loading);

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    }

    const changeFileHandler = (e) => {
        setInput({ ...input, file: e.target.files?.[0] });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        // const formData = new FormData();

        try {
            dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_ENDPOINT}/login`, input, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                // alert("account created Successfully");
                dispatch(setUser(res.data.user));
                navigate("/");
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            const errorMessage = error.response ? error.response.data.message : "An unexpected error occurred.";
            toast.error(errorMessage);
        }

        finally {
            dispatch(setLoading(false));
        }
    };


    return (
        <div>
            <Navbar />
            <div className='flex items-center justify-center mx-auto max-w-7xl h-16 '>
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-500 rounded-md p-5 mt-145 bg-red-300'>
                    <h1 className=' flex font-bold text-xl mb-5  justify-center' >Login</h1>

                    <div className='my-2'>
                        <Label className="mb-1">Email:</Label>
                        <Input type="email" value={input.email} name='email' onChange={changeEventHandler} placeholder="johndoe@gmail.com"></Input>
                    </div>
                    {/* <div className='my-2'>
                        <Label className="mb-1">Phone Number:</Label>
                        <Input type="Number" value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler} placeholder="123456789"></Input>
                    </div> */}
                    <div className='my-2'>
                        <Label className="mb-1">Password:</Label>
                        <Input type="password" value={input.password} name='password' onChange={changeEventHandler} placeholder="**********"></Input>
                    </div>
                    <div className='flex items-center justify-center'>
                        {/* <Label htmlFor="r2">Role</Label> */}
                        <RadioGroup className='flex items-center justify-center gap-4 my-5'>

                            <div className="flex items-center space-x-2" >
                                <Input type='radio' name='role' value='Student' checked={input.role === 'Student'} onChange={changeEventHandler} className='cursor-pointer'></Input>
                                <Label htmlFor="r2">Student</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Input type='radio' name='role' value='Recruiter' checked={input.role === 'Recruiter'} onChange={changeEventHandler} className='cursor-pointer'></Input>
                                <Label htmlFor="r3">Recruiter</Label>
                            </div>
                        </RadioGroup>
                    </div>

                    {
                        loading ? (
                            <div className='flex items-center justify-center my-10'>
                                <div className='spinner-border text-blue-600' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            </div>
                        ) : <button className='block w-full py-2 mt-3 text-white bg-blue-600 hover:bg-blue-800/90 rounded-md'>
                            Login
                        </button>
                    }


                    {/* if already have account */}
                    <p className='text-shadow-black text-sm my-2 text-center'>No Account ? <Link to='/register' className=' font-medium text-blue-700 text-center '>Register</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Login;


