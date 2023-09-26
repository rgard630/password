document.addEventListener('DOMContentLoaded', function () {
    // Define character sets for password criteria
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numericChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?';
  
    // Function to generate a random password based on criteria
    function generatePassword() {
      // Prompt for password length
      let passwordLength = parseInt(prompt('Enter password length (between 8 and 128 characters):'));
  
      // Validate password length
      if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
        alert('Please enter a valid password length between 8 and 128 characters.');
        return;
      }
  
      // Prompt for character types to include
      let includeLowerCase = confirm('Include lowercase characters?');
      let includeUpperCase = confirm('Include uppercase characters?');
      let includeNumeric = confirm('Include numeric characters?');
      let includeSpecial = confirm('Include special characters?');
  
      // Validate at least one character type is selected
      if (!(includeLowerCase || includeUpperCase || includeNumeric || includeSpecial)) {
        alert('At least one character type must be selected.');
        return;
      }
  
      // Generate the character set based on selected criteria
      let characterSet = '';
      if (includeLowerCase) characterSet += lowerCaseChars;
      if (includeUpperCase) characterSet += upperCaseChars;
      if (includeNumeric) characterSet += numericChars;
      if (includeSpecial) characterSet += specialChars;
  
      // Generate the password
      let password = '';
      for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet.charAt(randomIndex);
      }
  
      // Display the generated password
      document.getElementById('password').value = password;
    }
  
    // Event listener for the Generate Password button
    document.getElementById('generate').addEventListener('click', generatePassword);
  });