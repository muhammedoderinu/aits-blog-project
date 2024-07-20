
import React from 'react';
import './HighlightSection.css';

const HighlightSection = ({ blog }) => {
  return (
    <div className="highlight-section">
      {blog && (
        <>
          <img src={blog.image} alt={blog.title} className="highlight-image" />
          <p>{blog.description}</p>
        </>
      )}
    </div>
  );
};

export default HighlightSection;
