<?php

namespace Models;

use Database\MySql;
use Helpers\ErrorReport;

class UserModel {

  private $database;
  private $table = "persons";
  private $columns = ["id", "name", "username", "email", "description", "age"];

  public function __construct()
  {
    $this->database = new MySql();
  }

  public function login($email, $password)
  {
    try {
      $columns = ["id", "email", "password"];
      $condition = ["email" => $email];

      $user = $this->database->getAll($this->table, $columns, $condition);
      
      if($user[0]["password"] === $password) {
          unset($user["pasword"]);
          return $user[0];
      } else {
        return false;
      }
    } catch(\Throwable $th) {
      $error = new ErrorReport("Auth Error, the information given is wrong! -> " . $th->getMessage());
      return $error->normal();
    }
    
  }

  public function getOne($id){
    
    try {
      $result = $this->database->getOne($this->table, $this->columns, $id);

      return $result;

    } catch(\Throwable $err) {
      $error = new ErrorReport("Something went wrong! -> " . $err->getMessage());
      return $error->normal();
    }
  }

  public function createOne($data){
    global $json;
    try {
      $columns = [];
      $values = [];
      
      foreach ($data as $key => $value) {
        array_push($columns, $key);
        array_push($values, $value);
      }

      $id = $this->database->createOne($this->table, $columns, $values);
      $json = [
        "status" => 201,
        "data" => [
          "id" => $id
        ],
      ];

      return $json;
    } catch (\Throwable $th) {
      $error = new ErrorReport("We can't create the user -> " . $th->getMessage());
      return $error->database();
    }
  }

  public function deleteOne(){}
} 
