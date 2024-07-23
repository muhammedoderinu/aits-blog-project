const BlogList = ({ blogs, title, handleDelete }) => {
    // const blogs = props.blogs;
    return (
        <>
            <h1>{title}</h1>
            <div className="blogs-list">
                {blogs.map((blog) => (
                    <div className='preview' key={blog.id}>


                        <h2>{blog.title}</h2>
                        <p>writen by {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>delete blog</button>

                    </div>
                ))}

            </div>
        </>
    );
}

export default BlogList;