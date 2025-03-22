import { useEffect, useState } from "react";
import { fetchTopUsers } from "../api/api";

const TopUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchTopUsers().then(setUsers);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Top Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id} className="p-2 bg-gray-200 rounded-lg mb-2">
            {user.name} - {user.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
