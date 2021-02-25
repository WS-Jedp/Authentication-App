<?php

namespace App\Http\Controllers;
use App\Http\Response;
use Models\UserModel;
use Helpers\ErrorReport;
use Helpers\TokenJWT;

class ApiController {

  public function __construct()
  {
    header("Access-Control-Allow-Origin: http://localhost:8080");
    header('Access-Control-Allow-Credentials: false');
    header("Access-Control-Allow-Methods: GET");
  }

  public function user($id){
    try {
      $JWT = new TokenJWT();
      if(!$_COOKIE["token"]) {
        $error = new ErrorReport("You must need a token!");
        return $error->unauthorized();
      }
  
      $token = $_COOKIE["token"];
      $valid = $JWT->verify($token);
  
      if(!$valid) {
        $error = new ErrorReport("You must need a token!");
        return $error->unauthorized();
      }

      $model = new UserModel();
      $user = $model->getOne($id);

      if($user)
      {
        $json = [
          "status" => 200,
          "data" => [
            "user" => $user,
          ]
        ];
        return new Response(json_encode($json), "json");
      }

    } catch(\Exception $err) {
      $error = new ErrorReport($err->getMessage());
      return $error->normal();
    }    
  }
}