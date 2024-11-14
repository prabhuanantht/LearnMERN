import React, { useState } from "react";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, Link } from 'react-router-dom';
import "./add.css";

const Add = () => {
    const initialDoctor = {
        name: "",
        specialization: "",
        location: "",
        phone_number: ""
    };

    const [doctor, setDoctor] = useState(initialDoctor);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDoctor({ ...doctor, [name]: value });
    }

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/create", doctor);
            toast.success(response.data.message, { position: "top-right" });
            navigate("/Add");
        } catch (error) {
            toast.error("An error occurred. Please try again.", { position: "top-right" });
        }
    }

    return (
        <div>
            <Link to="/">Back</Link>
            <h3>Add New Doctor</h3>
            <form onSubmit={submitForm}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={doctor.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="specialization">Specialization</label>
                    <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        placeholder="Specialization"
                        value={doctor.specialization}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        placeholder="Location"
                        value={doctor.location}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                        type="text"
                        id="phone_number"
                        name="phone_number"
                        placeholder="Phone Number"
                        value={doctor.phone_number}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Add Doctor</button>
            </form>
        </div>
    );
}

export default Add;
