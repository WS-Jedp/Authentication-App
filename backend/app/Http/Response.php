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
    header("Content-Type:application\json;charset=utf-8");
    $json = $this->data;        
    return $json;
  }

  private function setResponseType() {
    switch ($this->type) {
      case 'json':
        echo $this->getJson();      
      default:
        return "Bad type of request!";
    }
  }

  public function send()
  {
    return $this->setResponseType();
  }
  
}