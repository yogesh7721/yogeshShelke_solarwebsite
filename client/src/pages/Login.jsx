import React, { useEffect } from "react";
import { GiSolarPower } from "react-icons/gi";
import solarimg from "/solar2.jpg";
import { useAdminLoginMutation } from "../redux/apis/adminApi";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [adminLogin, { isSuccess, isError, isLoading, error }] = useAdminLoginMutation();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: yup.object({
            email: yup
                .string()
                .email("Enter a valid email")
                .required("Email is required"),

            password: yup
                .string()
                .min(6, "Password must be at least 6 characters")
                .matches(
                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                    "Password must be strong password"
                )
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            adminLogin(values);
        },
        validateOnChange: false,
        validateOnBlur: false,
    });

    useEffect(() => {
        if (isSuccess) {
            toast.success("Admin Login Success!");
            navigate("/adminpanel");
        }
    }, [isSuccess, navigate]);

    useEffect(() => {
        if (isError && error?.data?.message) {
            toast.error(error.data.message);
        }
    }, [isError, error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = formik.validateForm();

        formik.handleSubmit();

        errors.then((err) => {
            if (Object.keys(err).length > 0) {
                Object.values(err).forEach((msg) => toast.error(msg));
            }
        });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${solarimg})`,
            }}
        >
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative flex w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden z-10">
                {/* Left Side */}
                <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-b from-blue-700 to-blue-500 text-white relative px-10 py-12">
                    <div className="text-yellow-400 text-8xl mb-2 animate-pulse">
                        <GiSolarPower />
                    </div>
                    <h1 className="text-4xl font-bold mb-2">Welcome to</h1>
                    <h2 className="text-2xl font-semibold mb-4">NewRa Grids</h2>
                    <p className="text-sm text-center max-w-xs opacity-90">
                        Harness the limitless energy of the sun to power your future. With clean,
                        sustainable solar solutions, you can reduce costs, protect the environment,
                        and brighten your world every day.
                    </p>
                    <div className="absolute right-0 top-0 bottom-0 w-10 bg-white rounded-l-full"></div>
                </div>

                <div className="w-full md:w-1/2 p-16 flex flex-col justify-center bg-white/95">
                    <h1 className="mt-[-40px] ml-40">{`Email : admin@gmail.com`}</h1>
                    <h1 className=" ml-40">{`Pass : Pass@123`}</h1>
                    <h2 className="text-3xl font-semibold mb-6">Sign In</h2>

                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-1">E-mail Address</label>
                            <input
                                {...formik.getFieldProps("email")}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-3 border-b border-gray-300 focus:border-blue-600 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-1">Password</label>
                            <input
                                {...formik.getFieldProps("password")}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full p-3 border-b border-gray-300 focus:border-blue-600 outline-none"
                            />
                        </div>

                        <div className="flex items-start space-x-2 text-sm">
                            <input type="checkbox" id="terms" className="mt-1 accent-blue-600" />
                            <label htmlFor="terms">
                                By signing in, I agree with{" "}
                                <a href="#" className="text-blue-600 underline">
                                    Terms & Conditions
                                </a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                            disabled={isLoading}
                        >
                            {isLoading ? "Signing In..." : "Sign In"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}


export default Login;