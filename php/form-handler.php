<?php

if ($_SERVER["REQUEST_METHOD"] == 'POST') {

    //Data Fetch
    $username = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $companyName = htmlspecialchars($_POST["company-name"]);
    $teamSize = htmlspecialchars($_POST["team-size"]);

    // Errors Handling
    $errors = false;

    if (empty($username) || empty($email) || empty($companyName) || empty($teamSize)) {
        echo '<p class="error__input_empty">Please complete this required field</p>';
        $errors = true;
    }

    if (!is_string($username) || !is_string($email) || !is_string($companyName) || !is_string($teamSize)) {
        echo '<p class="error__input_wrong-value">Please complete this required field</p>';
        $errors = true;
    }

    //Data Submission
    if (!$errors) {
        echo "These are the data: \r\n";
        echo $username + "\r\n";
        echo $email + "\r\n";
        echo $companyName + "\r\n";
        echo $teamSize + "\r\n";
    } else {
        header("Location: ../index.php");
    }

    header("Location: ../index.php");
}

else {
    header("Location: ../index.php");
}