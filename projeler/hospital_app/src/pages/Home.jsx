import { useState } from "react";
import AppointmentList from "../components/AppointmentList";
import Doctors from "../components/Doctors";
import { doctorData } from "../helper/data";
import { appointmentData } from "../helper/data";

const Home = () => {
  const [data, setData] = useState(appointmentData);

  const handleToggle = (id) => {
    let mappedData = data.map((item) =>
      item.id === id ? { ...item, consulted: !item.consulted } : item
    );
    setData(mappedData);
  };
  const deleteAppointment = (id) => {
    let filteredData = data.filter((item) => item.id !== id);
    setData(filteredData);
  };
  const addModal=()=>{}

  return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors
        doctorData={doctorData}
        setData={setData}
        data={appointmentData}
      />
      <AppointmentList
        deleteAppointment={deleteAppointment}
        appointments={data}
        handleToggle={handleToggle}
      />
    </main>
  );
};

export default Home;
