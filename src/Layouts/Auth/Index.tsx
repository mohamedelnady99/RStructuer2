// import useGetAirlines from "@/Hooks/GetAirlines";
// import useGetAirports from "@/Hooks/GetAirports";
import { Outlet } from "react-router-dom";

const App = () => {

  // const {isLoading}=useGetAirports()
  // const {isLoading:AirlinesLoading}=useGetAirlines()
//   if (isLoading||AirlinesLoading) {
//     return(
//       <div className="flex h-screen justify-center items-center">
// <span className="loading loading-dots loading-lg bg-Main"></span>
// </div>
//     ) 
//   }
  return (
    <main>
      <Outlet />
    </main>
  );
};

export default App;
