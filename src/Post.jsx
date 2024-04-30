import React, { useState } from 'react';
import img from './imageicon.png'

export default function Post() {
    const [imageUrl, setImageUrl] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImageUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const title = e.target.elements.title.value.trim();
        const author = e.target.elements.author.value.trim();
        const category = e.target.elements.category.value.trim();
        const content = e.target.elements.content.value.trim();
        const image = imageUrl;

        if (!title || !author || !category || !content || !image) {
            alert('Please fill in all fields and upload an image.');
            return;
        }
    };

    return (
        <div>
            <form className="custom-form" onSubmit={handleSubmit}>
                <div className="flex-form">
                    <div>
                        <h2>Title</h2>
                        <input type="text" name="title" placeholder="Enter title" />
                        <h2>Author</h2>
                        <input type="text" name="author" placeholder="Enter author" />
                        <h2>Category</h2>
                        <input type="text" name="category" placeholder="Enter category" />
                    </div>

                    <div className="file-input">
                        <label htmlFor="file-upload" className="file-label">
                            {imageUrl ? (
                                <img src={imageUrl} alt="Upload Image" />
                            ) : (
                                <img src={img} alt="Upload Image" />
                            )}
                        </label>
                        <input id="file-upload" type="file" onChange={handleImageChange} />
                    </div>
                </div>


                <h2>Content</h2>
                <textarea name="content" placeholder="Enter content" />

                <input type="submit" value="Add blog" />
            </form>
        </div>
    );
}
