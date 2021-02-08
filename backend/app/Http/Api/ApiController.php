<?php

namespace App\Http\Controllers;
use App\Http\Response;

class ApiController {
  public function user($id){

    $json = [
      "id" => $id
    ];
    return new Response(json_encode($json), "json");
  }
}