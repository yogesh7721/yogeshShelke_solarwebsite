import React, { useEffect } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import * as yup from 'yup'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCreateContactMutation } from "../redux/apis/contactApi";

const ContactForm = () => {
    const [createContact, { isSuccess, isError, isLoading }] = useCreateContactMutation()
    const navigate = useNavigate()

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            mobile: "",
            message: "",

        },
        validationSchema: yup.object({
            fullName: yup.string().required("Enter fullName"),
            email: yup.string().required("Enter email"),
            mobile: yup.string().required("Enter mobile"),
            message: yup.string().required("Enter message"),
        }),
        onSubmit: (values, { resetForm }) => {
            createContact(values)
            resetForm()
        }
    })
    const handleClasses = arg => clsx({
        "form-control my-2": true,
        "is-invalid": formik.touched[arg] && formik.errors[arg],
        "is-valid": formik.touched[arg] && !formik.errors[arg]
    })
    useEffect(() => {
        if (isSuccess) {
            // navigate("/adminpanel")
            toast.success("Contact Create Success!")
        }
    }, [isSuccess])
    return (<>
        <div className="flex flex-col md:flex-row justify-between items-start p-8 md:p-16 bg-white gap-10">
            {/* Left Section */}
            <div className="flex-1">
                <p className="text-sm text-gray-600 font-medium">Get In Touch</p>
                <h2 className="text-4xl md:text-5xl font-bold mt-2">
                    We are always ready to help you and answer your questions
                </h2>
                <p className="text-gray-500 mt-8">
                    Whether you have a question, a suggestion, or just want to say hello, this is the place
                    to do it. Please fill out the form below with your details and message, and we'll get
                    back to you as soon as possible.
                </p>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 text-gray-700">
                    <div className="flex items-start gap-3">
                        <span className="text-yellow-300 text-xl mt-1">⏰</span>
                        <div>
                            <p className="font-semibold">We're Open</p>
                            <p className="text-gray-500 text-sm">Monday - Friday 08.00 - 18.00</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-yellow-300 text-xl mt-1">📍</span>
                        <div>
                            <p className="font-semibold">Office Location</p>
                            <p className="text-gray-500 text-sm">100 Solar Ave, San Diego, CA</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-yellow-300 text-xl mt-1">📞</span>
                        <div>
                            <p className="font-semibold">Call Us Directly</p>
                            <p className="text-gray-500 text-sm">+1 800 987 654</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <span className="text-yellow-300 text-xl mt-1">✉️</span>
                        <div>
                            <p className="font-semibold">Send a Message</p>
                            <p className="text-gray-500 text-sm">support@solaria.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Section - Form */}
            <div className="flex-1 bg-gray-50 p-8 rounded-xl w-full">
                <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
                    <input
                        {...formik.getFieldProps("fullName")}
                        type="text"
                        placeholder="Your Name"
                        className={`${handleClasses("fullName")} p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                    />
                    {formik.touched.fullName && formik.errors.fullName && <div className="text-xs text-red-500 mt-1">{formik.errors.fullName}</div>}
                    <input
                        {...formik.getFieldProps("email")}
                        type="email"
                        placeholder="Your Email"
                        className={`${handleClasses("email")} p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                    />
                    {formik.touched.email && formik.errors.email && <div className="text-xs text-red-500 mt-1">{formik.errors.email}</div>}
                    <input
                        {...formik.getFieldProps("mobile")}
                        type="number"
                        placeholder="Your Phone"
                        className={`${handleClasses("mobile")} p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                    />
                    <textarea
                        {...formik.getFieldProps("message")}
                        type="text"
                        placeholder="Your Message"
                        rows="4"
                        className={`${handleClasses("mobile")} p-3 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-yellow-300`}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-300 font-semibold w-40 py-3 rounded-md transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </>
    );
}

export default ContactForm