// Code PasswordInput Component Here

function PasswordInput() {
  // Event handler for tracking when the user types a password
  const handleChange = (event) => {
    console.log("Entering password...");
  };

  return (
    // Render a password input element that calls handleChange on change events
    <input 
      type="password" 
      onChange={handleChange} 
      placeholder="Enter password"
    />
  );
}

export default PasswordInput;