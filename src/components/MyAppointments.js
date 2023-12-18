import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from './NavigationBar';
import { fetchAppointments } from '../features/appointments/appointmentsSlice';

function MyAppointments() {
  const dispatch = useDispatch();
  const { appointments, isLoading, error } = useSelector((state) => state.appointments);

  useEffect(() => {
    dispatch(fetchAppointments());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-row w-screen">
        <div className="w-1/6">
          <NavigationBar />
        </div>
        <div className=" flex flex-col w-5/6 bg-white  text-gray-700 dark:text-gray-800 p-4 gap-8">
          <h1 className="text-right text-slate-800 pr-8 pt-12 text-6xl font-bold font-['Inter'] leading-[72px]">My Appointments</h1>
          {appointments.length === 0 ? (
            <p>No appointments found.</p>
          ) : (
            <div className="flex flex-col">
              <table className="w-full text-sm table-auto">
                <thead className="text-xs bg-primary main-bg-dark dark:bg-secondary dark:text-gray-800">
                  <tr>
                    <th className="text-start text-base px-2 md:px-6 py-2">Doctor Name</th>
                    <th className="text-start text-base px-2 md:px-6 py-2">Appointment Time</th>
                    <th className="text-start text-base px-2 md:px-6 py-2">City</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="bg-white border-b dark:border-gray-300">
                      <td className="text-gray-600 px-2 md:px-6 py-2 font-medium">{appointment.doctor_name}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{appointment.appointment_time}</td>
                      <td className="text-gray-600 px-2 md:px-6 py-2">{appointment.city}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default MyAppointments;
