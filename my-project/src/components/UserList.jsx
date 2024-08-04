import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

const UserList = ({ users, onRemoveUser, onAddUser }) => {
  const [randUserPics, setRandUserPics] = useState([]);
  const [formData, setFormData] = useState({ fullName: '', email: '', role: 'player', password: '' });

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10&inc=picture')
      .then(response => response.json())
      .then(data => setRandUserPics(data.results.map(user => user.picture.large)))
      .catch(err => console.error(err));
  }, []);

  const getRandPic = () => randUserPics.length > 0 ? randUserPics[Math.floor(Math.random() * randUserPics.length)] : '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = { ...formData, id: Date.now(), gender: 'm' }; // יצירת ID ייחודי והגדרת מגדר לברירת מחדל 'm'
    onAddUser(newUser);
    setFormData({ fullName: '', email: '', role: 'player', password: '' }); // איפוס הטופס לאחר הוספת המשתמש
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">User List</h1>
      </div>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto mb-8">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Full Name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
          >
            <option value="player">Player</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
          Add User
        </button>
      </form>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length > 0 ? (
          users.map(user => (
            <UserCard key={user.id} user={user} pic={getRandPic()} onRemove={onRemoveUser} />
          ))
        ) : (
          <p className="text-xl">This is a sociopathic game: no users</p>
        )}
      </ul>
    </div>
  );
};

export default UserList;
