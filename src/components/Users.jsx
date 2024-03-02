import { Link } from "react-router-dom";

const UsersList = (props) => {
  return (
    
    
      <div className="flex flex-col border-gray-300 border bg-white divide-y rounded-lg flex-none w-full md:w-1/2 lg:w-1/3">
          <div className="flex flex-col space-y-2 divide-y">
          { props.users.length > 0 ? props.users.map((user, index) => (
              
              <div className="flex justify-between space-x-6 items-center p-6" key={index}>
                  <div className="flex items-center space-x-4">
                      <img src={user.avatar_url} className="rounded-full h-14 w-14" alt="" />
                      <div className="flex flex-col space-y-2">
                          <span>@{user.login}</span>
                          <small> {user.id}</small>
                          
                      </div>
                      
                  </div>
                  <div>
                  <Link to={`/user/${user.login}`}>
                      <button className="border rounded-md px-4 py-2 hover:bg-black hover:text-white">
                          View
                      </button>
                      </Link>
                  </div>
              </div>
              
          ) 
          ) : null}
           </div>
      </div>
    
  );
};

export default UsersList;
