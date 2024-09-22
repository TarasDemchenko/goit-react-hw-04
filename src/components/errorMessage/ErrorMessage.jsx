import toast, { Toaster } from "react-hot-toast";
toast.error("This didn't work.");
const ErrorMessage = () => {
  return (
    <div>
      <Toaster position="top-left" reverseOrder={false} />
    </div>
  );
};

export default ErrorMessage;
