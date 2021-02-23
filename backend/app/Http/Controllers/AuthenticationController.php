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
        $now = (new \DateTime('now'))->getTimestamp();

        $user = $this->userModel->login($email, $password);
        $json = [];

        if($user) {

          $JWT = new TokenJWT();
          $payload = [
            "id" => $user["id"],
            "email" => $user["email"],
            "exp" => $now + 5000
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

    if($_SERVER["REQUEST_METHOD"] === "POST" || $_SERVER["REQUEST_METHOD"] === "post") {

      $requiredColumns = ["name", "username", "email", "description", "age", "password"];

      for($i = 0; $i < count($requiredColumns); $i++) {
        if(!array_key_exists($requiredColumns[$i], $_POST)) {
          $error = new ErrorReport("Miss the value of '$requiredColumns[$i]'");
          return $error->normal();
        }
      } 

      $data = [
        "name" => $_POST["name"],
        "username" => $_POST["username"],
        "email" => $_POST["email"],
        "description" => $_POST["description"],
        "age" => $_POST["age"],
        "password" => $_POST["password"]
      ];

      try {
  
      $id = $this->userModel->createOne($data);
            
      $json = [
        "status" => 201,
        "data" => [
          "id" => $id
        ]
      ];
      return new Response(json_encode($json), "json");
  
      } catch(\Exception $err) {
          $error = new ErrorReport("Register Error -> " . $err->getMessage());
          return $error->normal();
      }

    } else {
      $error = new ErrorReport("Bad Request");
      return $error->badRequest();
    }
  }

  public function Logout() {
      try {
        if(empty($_COOKIE["token"])) {
          throw new \Exception("There is no token to invalid!");
        }

        $token = $_COOKIE["token"];
        $JWT = new TokenJWT();
        $invalidToken = $JWT->delete($token);

        $json = [
          "status" => 200,
          "data" => [
            "invalid_token" => $invalidToken
          ]
        ];

        return new Response(json_encode($json), "json");

      } catch(\Exception $err) {
        $error = new ErrorReport("Something went wrong -> " . $err->getMessage());
        return $error->normal();
      }
    
    $json = [];
    return new Response(json_encode($json), "json");
  }

  public function delete($id) 
  {
    if($_SERVER["REQUEST_METHOD"] === "GET" || $_SERVER["REQUEST_METHOD"] === "get")
    {
      try {

        $data = $this->userModel->deleteOne($id);
        $json = [
          "status" => 200,
          "data" => $data
        ];

        return new Response(json_encode($json), "json");
        
      } catch(\Exception $err) {
        $error = new ErrorReport("We can't delete the user -> " . $err->getMessage());
        return $error->badRequest();
      }
    } else {
      $error = new ErrorReport("Bad method request!");
      return $error->badRequest();
    }

  }

}