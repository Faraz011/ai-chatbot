import React from 'react';
import ReactDOM from 'react-dom';
import ChatbotHeader from './components/ChatbotHeader';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="container mt-5">
      <ChatbotHeader />
      <div className="d-flex justify-content-center mt-5">
        <SearchBar />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
