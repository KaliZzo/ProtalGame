import React, { useState } from 'react';

const AddUser = ({ onAddUser }) => {
  const [formData, setFormData] = useState({ fullName: '', email: '', role: 'player', password: '' });

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
      <h1 className="text-3xl font-bold mb-8">Add New  User</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
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
    </div>
  );
};

export default AddUser;
