import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function UserProfile(params) {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="relative text-white">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <div className="flex items-center space-x-6">
        <div className="relative">
          <img
            src={user.image.url ? user.image.url : "/default-profile.png"}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full"
          />
          <Link to="/me/account">
            <button className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
              Edit Profile
            </button>
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-bold">{user.name}</h2>
          <p className="text-gray-600">Email: {user.email}</p>
          <p className="text-gray-600">
            Joined on: {new Date(user.createdAt).toDateString()}
          </p>
          <div className="mt-4">
            <Link
              to="/password/account"
              className="text-blue-500 hover:underline"
            >
              Change Password
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
