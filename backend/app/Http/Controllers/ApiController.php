<?php

namespace App\Http\Controllers;
use App\Http\Response;
use Models\UserModel;

class ApiController {
  public function user($id){

    $model = new UserModel();
    $user = $model->getOne($id);

    $json = [
      "status" => 200,
      "data" => [
        "user" => $user
      ]
    ];
    return new Response(json_encode($json), "json");
  }
}