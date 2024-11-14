import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./doctor.css";
import { Link } from "react-router-dom";

const Doctor = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:8000/api/getall");
      setDoctors(response.data);
    };
    
    fetchData();
  }, []);

  const deleteDoctor = async (doctorId) => {
    await axios
      .delete(`http://localhost:8000/api/delete/${doctorId}`)
      .then((respones) => {
        setDoctors((prevDoctor) => prevDoctor.filter((doctor) => doctor._id !== doctorId));
        toast.success(respones.data.msg, { position: "top-right" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="doctorTable">
      <Link to={"/add"} className="addButton">Add Doctor</Link>
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Doctor Name</th>
            <th>Specialization</th>
            <th>Location</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor, index) => {
            return (
              <tr key={doctor._id}>
                <td>{index + 1}</td>
                <td>
                  {doctor.name} 
                </td>
                <td>{doctor.technology}</td>
                <td className="actionButtons">
                  <button onClick={() => deleteDoctor(doctor._id)}><i className="fa-solid fa-trash"></i></button>
                  <Link to={`/edit/` + doctor._id}><i className="fa-solid fa-pen-to-square"></i></Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Doctor