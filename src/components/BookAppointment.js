import NavigationBar from './NavigationBar';

function BookAppointment() {
  return (
    <>
      <div className="flex flex-row w-[100dvw]">
        <div className="flex w-[15%]">
          <NavigationBar />
        </div>
        <div className="flex flex-col w-[85%] bg-white justify-center items-center ">
          <h1>Book</h1>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
