import React from 'react';

const UserCard = ({ user, pic, onRemove }) => {
  const { fullName, email, role, id, gender } = user;
  const imgSrc = pic || (gender === 'f' ? 'https://randomuser.me/api/portraits/women/1.jpg' : 'https://randomuser.me/api/portraits/men/1.jpg');

  return (
    <li className="bg-white shadow-md rounded-lg overflow-hidden flex mb-4">
      <img src={imgSrc} alt={fullName} className="w-1/4 object-cover" />
      <div className="p-4 flex-grow">
        <h5 className="text-xl font-bold mb-2">{fullName}</h5>
        <p className="text-gray-700 mb-2">Email: {email}</p>
        <p className="text-gray-700 mb-2">Role: {role}</p>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600"
      >
        Remove
      </button>
    </li>
  );
};

export default UserCard;
