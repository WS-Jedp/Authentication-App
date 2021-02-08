<?php

namespace App\Http\Controllers;

use App\Http\Response;


class AuthenticationController {

  public function Login() {


    $json = [];
    return new Response(json_encode($json), "json");
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