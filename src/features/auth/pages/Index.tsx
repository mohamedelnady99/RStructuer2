import Intro from "../components/Intro";
import ResetPassword from "../components/ResetPassword";
import Verification from "../components/Verification";
import NewPassword from "../components/NewPassword";
import { useAuthSelector } from "@/stores/reducers/AuthSlice";

function ResetPasswordPage() {
  const { isResetSuccessful, isVerifySuccessful } = useAuthSelector(
    (store) => store.auth,
  );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2">
        <Intro />
      </div>

      {isVerifySuccessful ? (
        <NewPassword />
      ) : isResetSuccessful ? (
        <Verification />
      ) : (
        <ResetPassword />
      )}
    </div>
  );
}

export default ResetPasswordPage;
