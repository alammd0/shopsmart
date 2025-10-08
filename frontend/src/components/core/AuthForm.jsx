import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { createUser, login } from "../../service/auth/authAPI";
import { useState } from "react";
import Loader from "../common/Loader";

export default function AuthForm({type}) {

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (data) => {
        if(type === "signup"){
            setIsLoading(true);
            const response = await createUser(data);
            console.log(response);
            navigate("/login")
            setIsLoading(false);
        }else{
            setIsLoading(true);
            const response = await login(data);
            console.log(response);
            navigate("/products");
            setIsLoading(false);
        }

        reset();
    }

    if(isLoading){
        return <Loader />
    }

    return (
        <div className="h-screen flex justify-center items-center">
            <div className="bg-primary/10 px-4 py-8 max-w-sm w-full rounded-md">
                {/* heading */}
                <div className="text-center text-2xl font-bold text-primary">
                    {
                        type === "signup" ? "Create Your account" : "Welcome Back"
                    }
                </div>

                {/* form */}
                <form className="mt-4 flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    {
                        type === "signup" &&

                        <div className="flex gap-2 flex-col">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text"
                                name="name"
                                id="name"
                                className="w-full border-1 outline-none"
                                placeholder="Enter your name"
                                {...register("name", { require : true })}
                            />
                            {errors.name && <span>This field is required</span>}
                        </div>
                    }

                    {/* Email */}
                    <div className="flex gap-2 flex-col">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                            className="w-full border-1 outline-none"
                            {...register("email", { require : true })}
                        />
                        {errors.email && <span>This field is required</span>}
                    </div>

                    {/* Role */}
                    {
                        type === "signup" &&
                        <div className="flex gap-2 flex-col">
                            <label htmlFor="role">Role</label>
                            <select 
                                name="role"
                                id="role"
                                {...register("role", { require : true })}
                                className="w-full border-1 outline-none"
                            >
                                <option value="Seller">Seller</option>
                                <option value="Buyer">Buyer</option>
                            </select>
                            {errors.role && <span>This field is required</span>}
                        </div>
                    }

                    {/* Password */}
                     <div className="flex gap-2 flex-col">
                        <label htmlFor="password">Password</label>
                        <input 
                            className="w-full border-1 outline-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter your password"
                            {...register("password", { require : true })}
                        />
                        {errors.password && <span>This field is required</span>}
                    </div>

                    {/* button */}
                    <div>
                        {
                            type === "signup" ? 
                            <button className="bg-primary/30 px-3 py-1 flex items-center justify-center rounded-sm" type="submit">
                               Register
                            </button> : 
                            <button className="bg-primary/30 px-3 py-1 flex items-center justify-center rounded-sm" type="submit">
                                Login
                            </button>
                        }
                    </div>
                </form>
                
                {/* login or signup */}
                <div>
                    {
                        type === "signup" ? 
                        <Link to="/login">
                            Already have an account? Login
                        </Link> : 
                        <Link to="/register">
                            Don't have an account? Register
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}