import React, { useEffect, useState } from "react";
import axios from "axios";

function Data() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  async function fetchUsers() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-sky-700 to-white p-10">
      
      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-center text-white mb-12 tracking-wide drop-shadow-lg">
        User List
      </h1>

      {/* User Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {users.map((user) => (
          <div
            key={user.id}
            className="
              bg-white/20
              backdrop-blur-xl
              border border-white/30
              rounded-3xl
              p-6
              shadow-2xl
              hover:scale-105
              hover:bg-white/30
              transition-all
              duration-300
              cursor-pointer
            "
          >
            <div className="flex flex-col items-center text-center">

              {/* Name */}
              <h2
                className="
                  text-2xl font-bold
                  text-white
                  hover:text-blue-100
                  transition
                "
                onClick={() =>
                  setSelectedUser(
                    selectedUser?.id === user.id ? null : user
                  )
                }
              >
                {user.name}
              </h2>

              {/* Email */}
              <p className="text-blue-100 mt-2 text-sm">
                {user.email}
              </p>

              {/* Details */}
              {selectedUser?.id === user.id && (
                <div
                  className="
                    mt-5 w-full
                    bg-white/10
                    rounded-2xl
                    p-4
                    text-white
                    space-y-2
                    shadow-inner
                  "
                >
                  <p>
                    <span className="font-semibold text-sky-200">
                      Username:
                    </span>{" "}
                    {user.username}
                  </p>

                  <p>
                    <span className="font-semibold text-sky-200">
                      Phone:
                    </span>{" "}
                    {user.phone}
                  </p>

                  <p>
                    <span className="font-semibold text-sky-200">
                      Website:
                    </span>{" "}
                    {user.website}
                  </p>

                  <p>
                    <span className="font-semibold text-sky-200">
                      Address:
                    </span>{" "}
                    {user.address.city}, {user.address.street}
                  </p>

                  <p>
                    <span className="font-semibold text-sky-200">
                      Company:
                    </span>{" "}
                    {user.company.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Data;