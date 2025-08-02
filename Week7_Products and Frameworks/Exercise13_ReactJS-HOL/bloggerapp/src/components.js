// src/Components.js
import React from 'react';

// Component for displaying Book Details
function BookDetails(props) {
  const bookList = props.books.map(book => (
    <div key={book.id}>
      <h3>{book.bname}</h3>
      <h4>{book.price}</h4>
    </div>
  ));
  
  return (
    <div>
      <h1>Book Details</h1>
      <ul>{bookList}</ul>
    </div>
  );
}

// Component for displaying Blog Details
function BlogDetails(props) {
  const blogList = props.blogs.map(blog => (
    <div key={blog.id}>
      <h3>{blog.title}</h3>
      <h4>{blog.author}</h4>
      <p>{blog.content}</p>
    </div>
  ));
  
  return (
    <div>
      <h1>Blog Details</h1>
      <ul>{blogList}</ul>
    </div>
  );
}

// Component for displaying Course Details
function CourseDetails(props) {
  const courseList = props.courses.map(course => (
    <div key={course.id}>
      <h3>{course.name}</h3>
      <h4>{course.date}</h4>
    </div>
  ));

  return (
    <div>
      <h1>Course Details</h1>
      <ul>{courseList}</ul>
    </div>
  );
}

export { BookDetails, BlogDetails, CourseDetails };