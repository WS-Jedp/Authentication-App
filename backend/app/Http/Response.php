<?php

namespace App\Http;


class Response {
  protected $data;
  protected $type;


  public function __construct($data, $type)
  {    
    $this->data = $data;
    $this->type = $type;

    var_dump($this->data);

  }

  private function getJson(){
    $json = $this->data;    
    var_dump($this->data);
    die();
    
    return $json;
  }

  private function setResponseType() {
    switch ($this->type) {
      case 'json':
        return $this->getJson();      
      default:
        return "Bad type of request!";

    }
  }

  public function send()
  {
    return $this->setResponseType();
  }
  
}