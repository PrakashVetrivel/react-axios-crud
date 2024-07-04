import React, { useState, useEffect } from 'react';
import { createUser, updateUser } from '../services/api';

const UserForm = ({ selectedUser, onFormSubmit }) => {
  const [user, setUser] = useState({ name: '' });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({ name: '' });
    }
  }, [selectedUser]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.id) {
        await updateUser(user.id, user);
      } else {
        await createUser(user);
      }
      onFormSubmit();
      setUser({ name: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
