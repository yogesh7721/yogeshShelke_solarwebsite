
import React, { useEffect, useState } from "react";
import { FaSolarPanel, FaUsers, FaEnvelope, FaSignOutAlt, FaUserCircle, FaTrash, FaEdit, FaEye, FaSearch } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FiSettings } from "react-icons/fi";
import { toast } from "react-toastify";
import { useAdminLogoutMutation } from "../redux/apis/adminApi";
import { useNavigate } from "react-router-dom";
import { useDeleteContactMutation, useGetContactQuery } from "../redux/apis/contactApi";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const { data } = useGetContactQuery();
    const [adminLogout, { isSuccess: isLogoutSuccess }] = useAdminLogoutMutation();
    const [deleteContact, { isSuccess: isDeleteSuccess }] = useDeleteContactMutation();
    const [selectedContact, setSelectedContact] = useState(null);
    const [profileOpen, setProfileOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (isDeleteSuccess) {
            toast.success("Contact Delete Success!");
        }
    }, [isDeleteSuccess]);

    useEffect(() => {
        if (isLogoutSuccess) {
            toast.success("Admin Logout Success!");
            navigate("/");
        }
    }, [isLogoutSuccess, navigate]);

    const filteredContacts = data?.filter(contact =>
        contact.fullName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800">
            <aside className="w-64 bg-white/90 backdrop-blur-md border-r border-gray-200 hidden md:flex flex-col p-6 shadow-lg">
                <div className="flex items-center gap-3 mb-10">
                    <FaSolarPanel className="text-yellow-500 text-5xl animate-pulse" />
                    <h1 className="text-2xl font-bold tracking-wide text-gray-500">
                        Solar Admin
                    </h1>
                </div>

                <nav className="space-y-4 text-gray-500 ">
                    <button className="flex items-center gap-3 w-full text-gray-600 hover:text-sky-500 transition font-medium">
                        <MdDashboard /> Dashboard
                    </button>
                    <button className="flex items-center gap-3 w-full text-gray-600 hover:text-sky-500 transition font-medium">
                        <FaUsers /> Contacts
                    </button>
                    <button className="flex items-center gap-3 w-full text-gray-600 hover:text-sky-500 transition font-medium">
                        <FiSettings /> Settings
                    </button>
                </nav>
            </aside>

            <div className="flex-1 flex flex-col">
                <header className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-white shadow-md border-b border-gray-200 gap-3">
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                        <h2 className="text-2xl font-semibold text-gray-500">
                            Dashboard Overview
                        </h2>
                    </div>

                    <div className="flex flex-1 sm:flex-none items-center gap-8 w-full sm:w-auto">
                        <div className="relative flex-1">
                            <input
                                type="text"
                                placeholder="Search contacts..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-24 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            />
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>

                        <FaEnvelope className="text-sky-500 text-xl cursor-pointer hover:scale-110 transition" />
                        <FaUserCircle
                            onClick={() => setProfileOpen(true)}
                            className="text-gray-700 text-2xl cursor-pointer hover:text-sky-500 transition"
                        />
                        <div className="">
                            <button
                                onClick={() => adminLogout()}
                                className="flex items-center gap-3 w-full text-red-500 hover:text-red-600 transition font-medium"
                            >
                                <FaSignOutAlt /> Logout
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        <h3 className="text-gray-500 font-medium">Total Contacts</h3>
                        <p className="text-3xl font-bold text-sky-500 mt-2">{data?.length}</p>
                    </div>

                    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        <h3 className="text-gray-500 font-medium">Unread Messages</h3>
                        <p className="text-3xl font-bold text-sky-500 mt-2">5</p>
                    </div>

                    <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1">
                        <h3 className="text-gray-500 font-medium">Active Admins</h3>
                        <p className="text-3xl font-bold text-sky-500 mt-2">2</p>
                    </div>
                </div>

                <div className="px-6 pb-10">
                    <div className="bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex justify-between items-center px-6 py-4  text-black">
                            <h3 className="text-xl font-semibold tracking-wide">📋 Contact Form Entries</h3>
                            <p className="text-sm opacity-90">{filteredContacts?.length || 0} records</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="min-w-full text-left text-sm">
                                <thead className="bg-gray-100 text-gray-700 uppercase tracking-wide">
                                    <tr>
                                        <th className="px-6 py-3 font-semibold">#</th>
                                        <th className="px-6 py-3 font-semibold">Full Name</th>
                                        <th className="px-6 py-3 font-semibold">Email</th>
                                        <th className="px-6 py-3 font-semibold">Mobile</th>
                                        <th className="px-6 py-3 font-semibold">Message</th>
                                        <th className="px-6 py-3 font-semibold text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredContacts && filteredContacts.length > 0 ? (
                                        filteredContacts.map((entry, index) => (
                                            <tr
                                                key={entry._id}
                                                className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                                                    } border-b border-gray-200 hover:bg-sky-50 transition-all duration-300`}
                                            >
                                                <td className="px-6 py-4 font-medium text-gray-600">{index + 1}</td>
                                                <td className="px-6 py-4 font-semibold text-gray-800">
                                                    {entry.fullName}
                                                </td>
                                                <td className="px-6 py-4 text-gray-700">{entry.email}</td>
                                                <td className="px-6 py-4 text-gray-700">{entry.mobile}</td>
                                                <td className="px-6 py-4 text-gray-600 max-w-[250px] truncate">
                                                    {entry.message}
                                                </td>
                                                <td className="px-6 py-4 flex justify-center gap-4">
                                                    <button
                                                        title="View Details"
                                                        onClick={() => setSelectedContact(entry)}
                                                        className="p-2 rounded-full bg-sky-100 text-sky-600 hover:bg-sky-600 hover:text-white transition-all"
                                                    >
                                                        <FaEye />
                                                    </button>
                                                    <button
                                                        title="Edit Entry"
                                                        onClick={() => alert('Update feature coming soon')}
                                                        className="p-2 rounded-full bg-amber-100 text-amber-600 hover:bg-amber-600 hover:text-white transition-all"
                                                    >
                                                        <FaEdit />
                                                    </button>
                                                    <button
                                                        title="Delete Entry"
                                                        onClick={() => deleteContact(entry._id)}
                                                        className="p-2 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all"
                                                    >
                                                        <FaTrash />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td
                                                colSpan="6"
                                                className="text-center py-8 text-gray-400 italic bg-gray-50"
                                            >
                                                No contacts found
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="text-center py-4 text-gray-500 border-t border-gray-200 bg-white">
                    © {new Date().getFullYear()} Solar Admin Dashboard. All Rights Reserved.
                </footer>
            </div>

            {/* Profile Modal */}
            {profileOpen && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl w-[90%] max-w-md relative">
                        <button
                            onClick={() => setProfileOpen(false)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                        >
                            ✕
                        </button>
                        <div className="flex flex-col items-center gap-3">
                            <FaUserCircle className="text-6xl text-sky-500" />
                            <h3 className="text-xl font-semibold">Admin Profile</h3>
                            <p className="text-gray-500">admin@gmail.com</p>
                        </div>

                        <div className="mt-6 space-y-3">
                            <button
                                onClick={() => alert("View Profile clicked")}
                                className="w-full py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                            >
                                View Profile
                            </button>
                            <button
                                onClick={() => alert("Update Profile clicked")}
                                className="w-full py-2 bg-sky-100 text-sky-700 rounded-lg hover:bg-sky-200 transition"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {selectedContact && (
                <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-lg relative">
                        <button
                            onClick={() => setSelectedContact(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
                        >
                            ✕
                        </button>
                        <h3 className="text-xl font-semibold text-sky-500 mb-3">{selectedContact.fullName}</h3>
                        <p className="text-gray-600 mb-1"><strong>Email:</strong> {selectedContact.email}</p>
                        <p className="text-gray-600 mb-1"><strong>Phone:</strong> {selectedContact.mobile}</p>
                        <p className="text-gray-600 mb-3"><strong>Message:</strong> {selectedContact.message}</p>
                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(JSON.stringify(selectedContact));
                                alert("Copied to clipboard");
                            }}
                            className="w-full py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition"
                        >
                            Copy Info
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AdminDashboard;
