import React, { useState } from 'react';
import Header from './header.jsx';
import PopularSection from './popular-section.jsx';
import MiddleSection from './middle-section.jsx';
import LatestSection from './latest-section.jsx';
import '../App.css';
import Post from '../post-page/Post.jsx';


function App() {
  const [postData, setPostData] = useState(null);

    // Function to handle post submission
  const handlePostSubmit = (data) => {
    setPostData(data);
  };

  return (
    <div className="App">
    <div className='pml'>
      <PopularSection />
      <MiddleSection/>
      <LatestSection />
    </div>
    <Header />
    <Post onPostSubmit={handlePostSubmit} />
    {postData && (
      <div>
          {/* Display the submitted post data */}
          <h2>New Blog Post</h2>
                    <p>Title: {postData.title}</p>
                    <p>Author: {postData.author}</p>
                    <p>Category: {postData.category}</p>
                    <p>Content: {postData.content}</p>
                    <img src={postData.image} alt="Blog Post Image" />
      </div>
    )}
    </div>
  );
}

export default App;