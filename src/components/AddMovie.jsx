// src/components/AddMovie.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddMovie.css';

const AddMovie = () => {
  const navigate = useNavigate();

  return (
    <div className="add-movie-container">
      <h2>Add a New Movie</h2>
      <form>
        <input type="text" placeholder="Title" required />
        <input type="text" placeholder="Director" required />
        <select>
          <option value="">Select Genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
        <input type="number" placeholder="Release Year" required />
        <textarea placeholder="Synopsis"></textarea>
        <input type="url" placeholder="Poster Image URL" required />
        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;