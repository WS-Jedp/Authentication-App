<?php

namespace App\Http\Controllers;

use App\Http\Response;
use Models\UserModel;
use Helpers\ErrorReport;
use Helpers\TokenJWT;


class AuthenticationController {

  protected $userModel;

  public function __construct()
  {
    $this->userModel = new UserModel();
  }

  public function Login() {
    if($_SERVER["REQUEST_METHOD"] === "POST" || $_SERVER["REQUEST_METHOD"] === "post") {

      try {

        $email = $_POST["email"];
        $password = $_POST["password"];

        $user = $this->userModel->login($email, $password);
        $json = [];

        if($user) {

          $JWT = new TokenJWT();
          $payload = [
            "id" => $user["id"],
            "email" => $user["email"],
            "exp" => 159382822200
          ];
          $token = $JWT->create($payload);

          $json = [
            "status" => 200,
            "data" => [
              "user" => $user,
              "token" => $token
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

      } catch(\Exception $err) {
        $error = new ErrorReport("Auth Error, the information given is wrong! -> " . $err->getMessage());
        return $error->normal();
      }  

    } else {
      $error = new ErrorReport("Bad request to Login, must be POST");
      return $error->badRequest();
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