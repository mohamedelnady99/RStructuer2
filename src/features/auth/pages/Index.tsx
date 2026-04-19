// import Intro from "../components/Intro";
// import ResetPassword from "../components/ResetPassword";
// import Verification from "../components/Verification";
// import NewPassword from "../components/NewPassword";
// import { useAuthSelector } from "@/stores/reducers/AuthSlice";

function Index() {
  // const { isResetSuccessful, isVerifySuccessful } = useAuthSelector(
  //   (store) => store.auth,
  // );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2">
        {/* <Intro /> */}


        <div className="flex items-center justify-center h-full">
          <img src={""} alt="Intro Image" className="w-40 mb-8" />
          <h1 className="text-white text-2xl md:text-5xl font-bold mb-4">
            Welcome To
          </h1>
          <h2 className="text-white text-4xl md:text-7xl font-bold">AIRGATE</h2>
        </div>
      </div>

      {/* {isVerifySuccessful ? (
        <NewPassword />
      ) : isResetSuccessful ? (
        <Verification />
      ) : (
        <ResetPassword />
      )} */}
    </div>
  );
}

export default Index;
