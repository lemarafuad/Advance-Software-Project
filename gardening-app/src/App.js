import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [guides, setGuides] = useState([]);
  const [form, setForm] = useState({ title: '', content: '', author: '', category: '' });

  useEffect(() => {
    axios.get('http://localhost:3001/admin/guides').then((response) => {
      setGuides(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/admin/guides', form).then((response) => {
      setGuides([...guides, response.data]);
      setForm({ title: '', content: '', author: '', category: '' });
    });
  };

  return (
    <div>
      <h1>Gardening Guides</h1>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
        <input name="content" value={form.content} onChange={handleChange} placeholder="Content" />
        <input name="author" value={form.author} onChange={handleChange} placeholder="Author" />
        <input name="category" value={form.category} onChange={handleChange} placeholder="Category" />
        <button type="submit">Add Guide</button>
      </form>
      <ul>
        {guides.map((guide) => (
          <li key={guide.id}>
            <h2>{guide.title}</h2>
            <p>{guide.content}</p>
            <p><strong>Author:</strong> {guide.author}</p>
            <p><strong>Category:</strong> {guide.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
