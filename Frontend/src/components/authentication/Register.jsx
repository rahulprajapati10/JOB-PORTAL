import React, { useState } from 'react'
import Navbar from '../components_lite/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_ENDPOINT } from '@/utils/data';
import { toast } from 'sonner';
// import { Toaster } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';

const Register = () => {

    const [input, setInput] = useState({
        fullname: "",
        email: "",
        phoneNumber: "",
        password: "",
        role: "",
        file: "",
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
        const formData = new FormData();
        formData.append("fullname", input.fullname);
        formData.append("email", input.email);
        formData.append("phoneNumber", input.phoneNumber);
        formData.append("password", input.password);
        formData.append("role", input.role);
        if (input.file) {
            formData.append("file", input.file);
        }
        try {
              dispatch(setLoading(true));
            const res = await axios.post(`${USER_API_ENDPOINT}/register`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                withCredentials: true,
            });
            if (res.data.success) {
                navigate("/login");
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
            <div className='flex items-center justify-center mx-auto max-w-7xl h-16 ' >
                <form onSubmit={submitHandler} className='w-1/2 border border-gray-500 rounded-md p-5 mt-145 bg-blue-300'>
                    <h1 className=' flex font-bold text-xl mb-5  justify-center' >Register</h1>
                    <div className='my-2'>
                        <Label className="mb-1">Name:</Label>
                        <Input type="text" value={input.fullname} name='fullname' onChange={changeEventHandler} placeholder="John Doe"></Input>
                    </div>
                    <div className='my-2'>
                        <Label className="mb-1">Email:</Label>
                        <Input type="email" value={input.email} name='email' onChange={changeEventHandler} placeholder="johndoe@gmail.com"></Input>
                    </div>
                    <div className='my-2'>
                        <Label className="mb-1">Phone Number:</Label>
                        <Input type="tel" value={input.phoneNumber} name='phoneNumber' onChange={changeEventHandler} placeholder="123456789"></Input>
                    </div>
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
                    <div className='flex items-center gap-2'>
                        <Label className='w-32'>Profile Photo:</Label>
                        <Input type='file' accept='image/*' onChange={changeFileHandler} className='cursor-pointer'></Input>
                    </div>

                    {
                        loading ? (
                            <div className='flex items-center justify-center my-10'>
                                <div className='spinner-border text-blue-600' role='status'>
                                    <span className='sr-only'>Loading...</span>
                                </div>
                            </div>
                        ) : <button type='submit' className='block w-full py-2 mt-3 text-white bg-green-600 hover:bg-green-800/90 rounded-md'>
                            Register
                        </button>
                    }


                    {/* if already have account */}
                    <p className='text-shadow-black text-sm my-2 text-center'>Already have an account ? <Link to='/login' className=' font-medium text-blue-700 '>Login</Link></p>

                </form>
            </div>
        </div>
    )
}

export default Register;
