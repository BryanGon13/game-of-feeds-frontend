import React from 'react';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      {/* Main content goes here */}
      <div style={{ marginLeft: '220px', padding: '30px' }}>
        <h1>Welcome to Game of Feeds</h1>
        <p>This is your main content area.</p>
      </div>
    </div>
  );
}

export default App;