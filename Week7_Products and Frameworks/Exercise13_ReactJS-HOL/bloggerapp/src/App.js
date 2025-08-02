// src/App.js
import React from 'react';
import './App.css';
import { BookDetails, BlogDetails, CourseDetails } from './components';
import { books, courses, blogs } from './data';

function App() {
  return (
    <div className="App">
      <div className="mystyle1">
        <CourseDetails courses={courses} />
      </div>
      <div className="st2">
        <BookDetails books={books} />
      </div>
      <div className="v1">
        <BlogDetails blogs={blogs} />
      </div>
    </div>
  );
}

export default App;