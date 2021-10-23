<?php    
	$number = filter_var(trim($_POST['number']),
	FILTER_SANITIZE_STRING);
	$password = filter_var(trim($_POST['password']),
	FILTER_SANITIZE_STRING);

	$remember = filter_var(trim($_POST['remember']),
	FILTER_SANITIZE_STRING);

	if (mb_strlen($number) != 8) {
		echo "Введите номер корректно.";
		exit();
	} else if (mb_strlen($password) < 8 ) {
		echo "Пароль должен соджержать...";
		exit();
	}

	$mysqli-> init();
	$mysqli = new mysqli('market-place-1','mysql','' ,'register-db');
	$mysqli::query("INSERT INTO `users` (`number`, `password`) 
	VALUES('$number', '$password')");

	$mysqli->close();
?>