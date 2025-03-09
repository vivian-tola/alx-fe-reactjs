
import './App.css'

  import React from 'react';
  import RegistrationForm from './components/RegistrationForm';
  // eslint-disable-next-line no-unused-vars
  import formikForm from './components/formikForm';
  
  function App() {
    return (
      <div className="App">
        <h1>User Registration</h1>
        <RegistrationForm />
        <h2>Form Components</h2>
        <formikForm /> 
      </div>
    );
  }
  
  export default App;