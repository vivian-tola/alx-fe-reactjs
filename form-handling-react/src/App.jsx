
import './App.css'

  import React from 'react';
  import RegistrationForm from './components/RegistrationForm';
  import FormikForm from './components/FormikForm';
  
  function App() {
    return (
      <div className="App">
        <h1>User Registration</h1>
        <RegistrationForm />
      </div>
    );
  }
  
  export default App;