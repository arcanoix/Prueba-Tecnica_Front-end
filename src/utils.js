
export const validateMinLength = (value) => {
                return value.length >= 4;
}

export const validateNotString = (value) => {
                
                if(value.includes('iseijasunow'))
                {
                                return false
                }

                return true;
}

/**
 * 
 * @param {users} data array
 * @returns 
 */
export const getDataUser = (data) => {

                const users = data.map((user) => user.login);
                
                return users;
}


export async function fetchDataUser(data)
  {
    
                let arrayUsers = [];
                

                for (const user of data) {
                                try {
                                                await fetch(`https://api.github.com/users/${user.login}`)
                                                .then((response) => response.json())
                                                .then((information) => {
                                                
                                                arrayUsers.push({ name: information.login, following: information.following, followers: information.followers });
                                                //setUsers({ name: data.login, following: data.following, followers: data.followers })
                                                });

                                } catch (error) {
                                  console.error(`Error fetching data for user ${user.login}:`, error);
                                }
                              }
                              
                              return arrayUsers;
  }
