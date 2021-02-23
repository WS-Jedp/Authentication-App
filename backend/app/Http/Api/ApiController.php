<?php

namespace App\Http\Controllers;
use App\Http\Response;
use Models\UserModel;
use Helpers\TokenJWT;
use Helpers\ErrorReport;

class ApiController {
  public function user($id){
    $JWT = new TokenJWT();
    
    if(!$_COOKIE["token"]) {
      $error = new ErrorReport("You must need a token!");
      return $error->normal();
    }

    $token = $_COOKIE["token"];
    $valid = $JWT->verify($token);

    if(!$valid) {
      $error = new ErrorReport("You must need a token!");
      return $error->normal();
    }

    $model = new UserModel();
    $user = $model->getOne($id);

    if($user)
    {
      $json = [
        "status" => 200,
        "data" => [
          "user" => $user,
          "working" => true
        ]
      ];
      return new Response(json_encode($json), "json");
    }
  }
}