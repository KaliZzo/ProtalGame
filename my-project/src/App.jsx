import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import Login from './components/Login';
import UserList from './components/UserList';
import AddUser from './components/AddUser';

// Import game components
import GuessingGame from './components/Games/GuessingGame';
import RockPaperScissors from './components/Games/RockPaperScissors';
import TicTacToe from './components/Games/TicTacToe';

const App = () => {
  const [users, setUsers] = useState([
    { id: 77, fullName: 'Harleen Frances Quinzel', nick: 'Harley Quinn', email: 'harley@gmail.com', phone: '555-5555', gender: 'f', role: 'player', password: '12345' },
    { id: 121, fullName: 'Joakin Phoenix', nick: 'Joker', email: 'joker@gmail.com', gender: 'm', role: 'player', password: '12346' },
    { id: 123, fullName: 'Bruce Wayne', nick: 'Batman', email: 'bat@gmail.com', phone: '555-5557', role: 'player', password: '12348' },
    { id: 111, fullName: 'Princess Diana of Thymiscira', nick: 'Wonder Woman', email: 'gal.gadot@gmail.com', phone: '555-5558', role: 'admin', password: '12349' }
  ]);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem('user', JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const handleAddUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleRemoveUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <Router >
      <NavBar user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp onSignUp={handleLogin} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} users={users} />} />
        <Route path="/all-users" element={<UserList users={users} onRemoveUser={handleRemoveUser} onAddUser={handleAddUser} />} />
        <Route path="/guessing-game" element={<GuessingGame />} />
        <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
      </Routes>
    </Router>
  );
};

export default App;
