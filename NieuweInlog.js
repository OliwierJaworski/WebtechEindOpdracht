const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

// Route voor de inlogpagina
app.post('/nieuweinlog', (req, res) => {
  const { username, password } = req.body;

  // Lees de gebruikersgegevens uit het JSON-bestand
  fs.readFile('users.json', (err, data) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    const users = JSON.parse(data);

    // Controleer of de gebruikersnaam en wachtwoord overeenkomen
    if (users[username] === password) {
      // Inloggen is geslaagd
      return res.status(200).json({ message: 'Login successful' });
    } else {
      // Inloggen is mislukt
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  });
});

app.listen(3000, () => {
  console.log('Node API app is running on port 3000');
});