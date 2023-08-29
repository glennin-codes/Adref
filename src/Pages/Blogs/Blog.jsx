import React, { useState, useEffect } from 'react';
import {  Flex, Spinner } from '@chakra-ui/react';
import { BlogCard } from './BlogCard';

// Define the BlogList component that renders a list of blog posts
const BlogList = () => {
  // Define the state for the blogs data
  const [blogs, setBlogs] = useState([]);

  // Define the state for the loading status
  const [loading, setLoading] = useState(true);

  // Define the API URL to fetch the blogs data
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';

  // Define a function to fetch the blogs data from the API
  const fetchBlogs = async () => {
    try {
      // Make a GET request to the API URL
      const response = await fetch(API_URL);

      // Check if the response is successful
      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();

        // Map the data to add an image property for each blog post
        const blogs = data.map((blog) => ({
          ...blog,
          image: `https://source.unsplash.com/random/300x200?sig=${blog.id}`,
        }));

        // Update the state with the blogs data
        setBlogs(blogs);

        // Update the state with the loading status as false
        setLoading(false);
      } else {
        // Throw an error if the response is not successful
        throw new Error('Something went wrong');
      }
    } catch (error) {
      // Log the error to the console
      console.error(error);
    }
  };

  // Use useEffect hook to fetch the blogs data when the component mounts
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Return the JSX code for the blog list
  return (
    <Flex wrap="wrap" justify="center" align="center"
    sx={{
        width: "100%",
        
    }}
    >
      {/* Check if the loading status is true */}
      {loading ? (
        <Spinner size="xl" color="blue.500"
        sx={{
         mt:"20vh",
                    mb:"60vh",
        }}
         />
      ) : (
        // Display a list of blog cards if loading is false
        blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
      )}
    </Flex>
  );
};

export default BlogList;


