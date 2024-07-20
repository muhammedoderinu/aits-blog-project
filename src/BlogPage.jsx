
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import BlogSection from './BlogSection';
import HighlightSection from './HighlightSection';
import Footer from './Footer';
import image from "./images-150.jpg"
import image2 from "./images-151.jpg"
import image3 from "./images-147.jpg"
import './BlogPage.css';

const BlogPage = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [highlightBlog, setHighlightBlog] = useState(null);

  useEffect(() => {
    fetchPopularBlogs();
    fetchLatestBlogs();
    fetchHighlightBlog();
  }, []);

  const fetchPopularBlogs = () => {
    setPopularBlogs([
      { id: 1, title: 'Popular Blog 1', image: image2 },
      { id: 2, title: 'Popular Blog 2', image: image },
    ]);
  };

  const fetchLatestBlogs = () => {
    setLatestBlogs([
      { id: 1, title: 'Latest Blog 1', image: image3 },
      { id: 2, title: 'Latest Blog 2', image: image },
    ]);
  };

  const fetchHighlightBlog = () => {
    setHighlightBlog({ id: 1, title: 'Highlight Fashion Design', image: image, description: 'Welcome to Firdausi Fashion design blog. Here, we provide you with latest information on fashion design.' });
  };

  return (
    <div className="blog-page">
      <Navbar />
      <div className="blog-container">
        <BlogSection title="Popular" blogs={popularBlogs} />
        <HighlightSection blog={highlightBlog} />
        <BlogSection title="Latest" blogs={latestBlogs} />
      </div>
      <Footer />
    </div>
  );
};

export default BlogPage;
