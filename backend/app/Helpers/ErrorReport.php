<?php

namespace Helpers;

use App\Http\Response;

class ErrorReport {

  protected $type = "json";
  protected $message;

  public function __construct($message)
  {
    $this->message = $message;
  }

  public function normal()
  {
    $json = [
      "message" => $this->message,
      "status" => 401
    ];
    return new Response(json_encode($json), $this->type);
  }

  public function database($message)
  {
    $json = [
      "message" => $this->message,
      "status" => 401,
      "where" => "database"
    ];
    return new Response(json_encode($json), $this->type);
  }
}
