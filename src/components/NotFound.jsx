import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <FontAwesomeIcon icon={faLocation} />

      <div className="flex flex-col items-center justify-center">
        <p className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-gray-600 mt-8">
          404
        </p>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 mt-2">
          Server Error
        </p>
        <p className="md:text-lg xl:text-xl text-gray-500 mt-4">
          Whoops, something went wrong on our servers.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
