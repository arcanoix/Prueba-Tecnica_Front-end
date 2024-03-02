import axios from "axios";
import { useState } from "react";
import UsersList from "./Users";
import Spiner from "./Spiner";
import { validateMinLength, validateNotString } from "../utils";

const SearchingForm = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [isValid, setIsValid] = useState({status: false, message: ''});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setIsValid({status: false, message: ''})
    let validationMin = validateMinLength(user.toLowerCase());
    let validationName = validateNotString(user.toLowerCase());
    
    if(!validationMin)
    {
      setIsValid({status: true, message: 'El campo debe tener al menos 4 caracteres'})
      setLoading(false)
      setData([])
      return;
    }

    if(!validationName)
    {
      setIsValid({status: true, message: `El usuario ${user} no esta permitido para realizar la busqueda`})
      setLoading(false)
      setData([])
      return;
    }

    let { data } = await axios.get(
      `https://api.github.com/search/users?q=${user}&per_page=10`
    );
    console.log(data.items[0]);

    setData(data.items);
    setLoading(false);
  };

  return (
    <div className="flex-col">
      <div className="flex items-center justify-center mt-5">
        <form onSubmit={handleSubmit}>
          <div className="flex w-screen items-center justify-center p-5">
            <div className="rounded-lg bg-gray-200 p-5 w-2/4">
              <div className="flex">
                <div className="flex w-10 items-center justify-center rounded-tl-lg rounded-bl-lg border-r border-gray-200 bg-white p-5">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-5 fill-gray-500 transition"
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
                <input
                  type="text"
                  className="w-full bg-white pl-2 text-base font-semibold outline-0"
                  placeholder="Search User"
                  onChange={(e) => setUser(e.target.value)}
                />
                

                {loading ? (
                  <button
                    type="button"
                    disabled
                    className="border-gray-200 bg-white p-2 rounded-tr-lg border-l rounded-br-lg text-white font-semibold  "
                  >
                    <Spiner width="6" height="6" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="border-gray-200 bg-white p-2 rounded-tr-lg border-l rounded-br-lg text-black font-semibold hover:bg-black hover:text-white transition-colors"
                  >
                    Search
                  </button>
                )}
              </div>
              {!isValid.status ? null : <p className="text-red-600 ">{isValid.message}</p>}
            </div>
          </div>
        </form>
      </div>

      {data.length > 0 && user !== "" ? (
        <div className="flex items-center justify-center p-6">
          <UsersList users={data} />
        </div>
      ) : null}
    </div>
  );
};

export default SearchingForm;
