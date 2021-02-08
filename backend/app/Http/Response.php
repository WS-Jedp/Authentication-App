<?php

namespace App\Http;


class Response {
  protected $data;
  protected $type;


  public function __construct($data, $type)
  {
    $this->data = $data;
    $this->type = $type;
  }

  private function getJson(){
    $json = $this->data;
    header("Content-Type:application/json;charset=utf-8");
    return $json;
  }

  private function setResponseType() {
    switch ($this->type) {
      case 'json':
        return $this->getJson();      
      default:
        return $this->getJson();

    }
  }

  public function send()
  {
    return $this->setResponseType();
  }
  
}