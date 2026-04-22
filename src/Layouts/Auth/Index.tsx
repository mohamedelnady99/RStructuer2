import { Outlet } from "react-router-dom";

const App = () => {
  // const {isLoading}=useGetAِuth()
  // const {isLoading:useGetAِuth}=useGetAِuth()
  //   if (isLoading||useGetAِuth) {
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
