<?php

namespace App\Http\Controllers;

use App\Http\Response;

class HomeController {

  public function index() {

    $json = [
      "status" => 200, 
      "hello" => "world",
    ];

    return new Response(json_encode($json), "json");

  }

}
