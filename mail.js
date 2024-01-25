
    function saveMailPassword() {
      // Implement logic to save mail and password
      var mail = document.getElementById('mail').value;
      var password = document.getElementById('password').value;

      // Add your save logic here...
      console.log('Email:', mail);
      console.log('Password:', password);
    }
    function saveMailPassword() {
      var name = document.getElementById('name').value;
      var mail = document.getElementById('mail').value;
      var password = document.getElementById('password').value;

      if (!name || !mail || !password) {
        alert('Please fill in all fields.');
        return;
      }

      var tableBody = document.getElementById('emailTableBody');
      var newRow = tableBody.insertRow();
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      cell1.innerHTML = name;
      cell2.innerHTML = mail;
      cell3.innerHTML = maskPassword(password);
      cell3.setAttribute('data-password', password);
      cell3.addEventListener('mouseover', function () { revealPassword(this); });
      cell3.addEventListener('mouseout', function () { hidePassword(this); });

      document.getElementById('name').value = '';
      document.getElementById('mail').value = '';
      document.getElementById('password').value = '';

      console.log('Name:', name);
      console.log('Email:', mail);
      console.log('Password:', password);
    }

    function maskPassword(password) {
      return '*'.repeat(password.length);
    }

    function revealPassword(cell) {
      cell.innerHTML = cell.getAttribute('data-password');
    }

    function hidePassword(cell) {
      cell.innerHTML = '*'.repeat(cell.getAttribute('data-password').length);
    }
  
  