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

      $user = $this->database->getLogin($this->table, $columns, $condition);
      if($user[0]["password"] === $password) {
          $data = [
            "id" => $user[0]["id"],
            "email" => $user[0]["email"]
          ];
          return $data;
      } else {
        return false;
      }
    } catch(\Exception $th) {
      throw new \Exception($th->getMessage());
    }
    
  }

  public function getOne($id){
    
    try {
      $result = $this->database->getOne($this->table, $this->columns, $id);
      return $result;

    } catch(\Exception $ex) {
      throw new \Exception($ex->getMessage());
    }
  }

  public function createOne($data){
    try {
      $columns = [];
      $values = [];
      
      foreach ($data as $key => $value) {
        array_push($columns, $key);
        array_push($values, $value);
      }

      $id = $this->database->createOne($this->table, $columns, $values);
      return $id;
    } catch (\Exception $ex) {
      throw new \Exception("We can't create the user -> " . $ex->getMessage());
    }
  }

  public function deleteOne($id){
    try {

      $user = $this->getOne($id);
      $deleted = $this->database->deleteOne($this->table ,$id);

      $data = [
        "data" => [
          "user" => $user,
          "deleted" => $deleted
        ]
      ];

      return $data;

    } catch(\Exception $err) {
      throw new \Exception($err->getMessage());
    }
  }
} 
