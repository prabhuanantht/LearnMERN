import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../addDoctor/add.css";
import toast from "react-hot-toast";

const Edit = () => {
  const doctors = {
    fname: "",
    lname: "",
    email: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(doctors);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
    console.log(doctor);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setDoctor(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, doctor)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="addDoctor">
      <Link to={"/"}>Back</Link>
      <h3>Update user</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="Name">First name</label>
          <input
            type="text"
            value={doctor.name}
            onChange={inputChangeHandler}
            id="name"
            name="name"
            autoComplete="off"
            placeholder="Name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="specialization">Specialization</label>
          <input
            type="text"
            value={doctor.specialization}
            onChange={inputChangeHandler}
            id="specialization"
            name="specialization"
            autoComplete="off"
            placeholder="Specialization"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="location">Location</label>
          <input
            type="location"
            value={doctor.phone_no}
            onChange={inputChangeHandler}
            id="location"
            name="location"
            autoComplete="off"
            placeholder="Location"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="phone_no">Phone_no</label>
          <input
            type="phone_no"
            value={doctor.phone_no}
            onChange={inputChangeHandler}
            id="phone_no"
            name="phone_no"
            autoComplete="off"
            placeholder="Phone_no"
          />
        </div>
        <div className="inputGroup">
          <button type="submit">UPDATE DOCTOR</button>
        </div>
      </form>
    </div>
  );
};

export default Edit;