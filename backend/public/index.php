<?php

require_once __DIR__ . "/../vendor/autoload.php";
use Dotenv\Dotenv;

$PATH_ENV = __DIR__ . "/../";
$dotenv = Dotenv::createImmutable($PATH_ENV);
$dotenv->load();

use App\Http\Request;

$entry = new Request();
