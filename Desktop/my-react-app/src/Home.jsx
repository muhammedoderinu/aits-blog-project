import { useState, useEffect } from 'react';
import BlogList from './BlogList';

export default function Home() {
    const [blogs, setBlogs] = useState([
        {
            title: "my first blog",
            body: "why do you use it?  will be ",
            author: "mario",
            id: 1
        },
        {
            title: "opening party",
            body: "why do you use it   will be ",
            author: "yoshi",
            id: 2
        },
        {
            title: "my first blog",
            body: "why do you use it will be ",
            author: "mario",
            id: 3
        },
    ]);

    const [name, setName] = useState('mario')

    const handleDelete = (id) => {
        const newBlog = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlog);
    };

    useEffect(() => {
        console.log('useEffect ran')
    }, [])

    return (
        <div className='home'>
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
            {/* ge naame <button onClick={() => setName('lugi')}>chan</button> */}
            {/* <p>{name}</p> */}
        </div>
    );
}
