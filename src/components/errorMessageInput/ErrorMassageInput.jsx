import toast, { Toaster } from "react-hot-toast";

toast("Please fill ion the search field.", {
  duration: 1000,
});

const ErrorMassageInput = () => {
  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default ErrorMassageInput;
