<?php
$host = "localhost";
$port = "3000";
$dbname = "your_database_name";
$user = "your_username";
$password = "your_password";

$connection = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");

if (!$connection) {
    echo "Failed to connect to PostgreSQL.";
} else {
    echo "Successfully connected to PostgreSQL.";
}

pg_close($connection);
?>
