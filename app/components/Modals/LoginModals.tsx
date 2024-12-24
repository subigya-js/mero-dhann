import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import google from "../../assets/google.png";
import Button from "../UI/button";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-500/95 rounded-lg w-full max-w-md sm:max-w-lg md:max-w-lg lg:max-w-xl h-auto sm:h-auto md:h-[50%] relative">
        <button
          className="absolute top-2 right-2 text-gray-100 hover:text-gray-300 p-2"
          onClick={onClose}
        >
          <IoMdClose size={24} />
        </button>
        <div className="flex justify-between h-full p-4 sm:p-6 md:p-8">
          <div className="w-full rounded-md flex flex-col items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-green-100 mb-4">
              Create Dhani Account
            </h1>

            <button className="w-full sm:w-[80%] md:w-[70%] bg-gray-200 border border-gray-300 text-gray-700 py-2 px-4 rounded-md flex items-center justify-center mb-2">
              <Image
                src={google}
                alt="Google"
                width={20}
                height={20}
                className="mr-2"
              />
              Continue with Google
            </button>

            <p className="text-center text-gray-300 ">Or</p>

            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-[80%] md:w-[70%] border-b border-gray-300 rounded-md py-2 px-4 mb-2 outline-none text-gray-950"
            />

            <Button
              onClick={() => {/* Add continue logic here */}}
              className="w-full sm:w-[80%] md:w-[70%] mt-5"
            >
              Continue
            </Button>

            <p className="text-xs text-gray-300 text-center mt-4 px-4">
              By proceeding, I agree to{" "}
              <a href="#" className="text-blue-300 hover:text-blue-400">
                T&C
              </a>
              ,{" "}
              <a href="#" className="text-blue-300 hover:text-blue-400">
                Privacy Policy
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-300 hover:text-blue-400">
                Tariff Rates
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
