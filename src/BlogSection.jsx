
import React from 'react';
import './BlogSection.css';

const BlogSection = ({ title, blogs }) => {
  return (
    <div className="blog-section">
      <h2>{title}</h2>
      {blogs.map(blog => (
        <div key={blog.id} className="image-item">
          <img src={blog.image} alt={blog.title} />
          <p>{blog.title}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogSection;
