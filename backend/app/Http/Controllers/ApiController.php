<?php

namespace App\Http\Controllers;
use App\Http\Response;
use Models\UserModel;

class ApiController {
  public function user($id){
    $model = new UserModel();
    try {
      $user = $model->getOne($id);
      $json = [
        "status" => 200,
        "data" => $user[0]
      ];
      return new Response(json_encode($json), "json");
      
    } catch(\Exception $err) {
      return $err;
    }
  }
}