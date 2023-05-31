<?php
// Controleer of er een POST-verzoek is verzonden
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Verkrijg de ingevulde gebruikersnaam en wachtwoord
  $username = $_POST["Username"];
  $password = $_POST["Password"];

  // Laad de gebruikersgegevens uit het JSON-bestand
  $usersData = file_get_contents('users.json');
  $users = json_decode($usersData, true);

  // Controleer of de gebruikersnaam en wachtwoord overeenkomen
  if (isset($users[$username]) && $users[$username] === $password) {
    // Inloggen is geslaagd, stuur door naar een andere website
    header("Location: Tijd.html");
    exit;
  } else {
    // Inloggen is mislukt, geef een foutmelding weer
    echo "Ongeldige gebruikersnaam of wachtwoord.";
  }
}
?>