// script.js
document.getElementById('calculateBtn').addEventListener('click', function () {
    const dobInput = document.getElementById('dob').value;
  
    if (!dobInput) {
        document.getElementById('output').textContent = 'Please select a valid date of birth.';
        document.getElementById('output').style.color = "yellow";
      return;
    }
  
    const dob = new Date(dobInput);
    const today = new Date();
  
    if (dob > today) {
      document.getElementById('output').textContent = 'Date of birth cannot be in the future.';
      document.getElementById('output').style.color = "red";
      return;
    }
  
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();
    let days = today.getDate() - dob.getDate();
  
    if (days < 0) {
      months--;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
  
    if (months < 0) {
      years--;
      months += 12;
    }
  
    document.getElementById('output').textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
  });
  