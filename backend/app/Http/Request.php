<?php

namespace App\Http;

class Request {
  protected $segments = [];
  protected $controller;
  protected $method;
  protected $parameter;

  public function __construct()
  {
    $this->segments = explode("/", $_SERVER["REQUEST_URI"]);

    $this->setController();
    $this->setMethod();
    $this->setParam();
  }

  protected function setController()
  {
    $this->controller = empty($this->segments[1]) ? 'Home' : $this->segments[1];
  }
  protected function setMethod()
  {
    $this->method = empty($this->segments[2]) ? 'Index' : $this->segments[2];
  }
  protected function setParam()
  {
    $this->parameter = empty($this->segments[3] ? NULL : $this->segments[3]);
  }

  public function getController() {
    $controller = ucfirst($this->controller);
    return "App\Http\Controller\\{$controller}Controller";
  }
  public function getMethod() {
    return ucfirst($this->method);
  }

  private function send() {
    $controller = $this->getController();
    $method = $this->getMethod();
    $parameter = $this->parameter;

    $response = call_user_func([
      new $controller,
      $method
    ], $parameter);
  }
}