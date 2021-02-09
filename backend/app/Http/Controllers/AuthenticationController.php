<?php

namespace App\Http\Controllers;

use App\Http\Response;
use Helpers\ErrorReport;
use Models\UserModel;


class AuthenticationController {

  protected $userModel;

  public function __construct()
  {
    $this->userModel = new UserModel();
  }

  public function Login() {
    if($_SERVER["REQUEST_METHOD"] === "POST" || $_SERVER["REQUEST_METHOD"] === "post") {

      $email = $_POST["email"];
      $password = $_POST["password"];

      $user = $this->userModel->login($email, $password);
      $json = [];

      if($user) {
        $json = [
          "status" => 200,
          "data" => [
            "user" => $user
          ]
        ];
      } else {
        $json = [
          "status" => 401,
          "data" => null,
          "message" => "Bad information given!"
        ];
      }

      return new Response(json_encode($json), "json");
    } else {
      $error = new ErrorReport("Bad request to Login, must be POST");
      $error->badRequest();
    }
  }

  public function Register() {

    
    $json = [];
    return new Response(json_encode($json), "json");
  }

  public function Logout() {

    
    $json = [];
    return new Response(json_encode($json), "json");
  }

}