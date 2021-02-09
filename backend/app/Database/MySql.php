<?php

namespace Database;

use Helpers\ErrorReport;
use \Exception;
use \mysqli;

class MySql {
  private $database;
  private $connected = false;

  private $user = "root";
  private $passwrod = "Jedp05022001082";
  private $db_name = "authentication_app";
  private $host = "localhost:3306";

  public function __construct()
  {
    $this->connect();
  }

  protected function createColumnsStatements($columns) {
    $columns_statment = "";
    for ($i=0; $i < count($columns); $i++) { 
      $columns_statment .= "$columns[$i]";
      if(!$i == count($columns)) {
        $columns_statment .= ", ";
      }
    }
    
    return $columns_statment;
  }

  protected function createConditionStatement($conditions) {
    $conditions_statement = "";
    foreach ($conditions as $key => $value) {
      $conditions_statement .= "$key=$value,";
    }
    return $conditions_statement;
  }

  public function connect(){
    try {
      if(!$this->connected) {
        $this->database = new mysqli($this->host, $this->user, $this->passwrod, $this->db_name);
        $this->connected = true;
      }

      return true;

    } catch(Exception $exception) {
      
      $error = new ErrorReport("Something went wrong in the connection -> " . $exception->getMessage());
      return $error->database();
    }
  }

  public function disconnect()
  {
    $this->connected ? $this->database->close() : true;
  }

  public function getOne($table, $columns, $id)
  {
    if(!$this->connected) {
      $this->connect();
    }

    $columns_statment = $this->createColumnsStatements($columns);
    
    
    $result = $this->database->query("SELECT $columns_statment FROM $table WHERE id=$id");

    // var_dump($this->database->error);
    // die();

    if($this->database->error) {
      $error = new ErrorReport("We can't found the id $id in our Database");
      return $error->database();
    }

    $data = [];
    if($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        array_push($data, $row);
      }
    }
    return $data;
  }

  public function getAll($table, $columns, $condition = null){
    if(!$this->connected)
    {
      $this->connect();
    }

    $columns_statment = $this->createColumnsStatements($columns);

    $statement = "SELECT $columns_statment FROM $table";
    if($condition) {
      $conditions = $this->createConditionStatement($condition);
      $statement .= " WHERE $conditions";
    }

    $result = $this->database->query($statement);

    if($this->database->error) {
      $error = new ErrorReport("Something went wrong in the query -> " . $this->database->error);
      return $error->database();
    }

    $data = [];
    if($result->num_rows > 0)
    {
      while($row = $result->fetch_assoc())
      {
        array_push($data, $row);
      }
    }

    return $data;
  }

  public function createOne($table, $columns, $values) {
    if(!$this->connected) {
      $this->connect();
    }

    $columns_statment = $this->createColumnsStatements($columns);
    $values_statement = $this->createColumnsStatements($values);
    $result = $this->database->query("INSERT INTO $table ($columns_statment) VALUES ('$values_statement')");
    if($result  === TRUE) {
      $last_id = $this->database->insert_id;
      return $last_id; 
    } else if($this->database->error) {
      $error = new ErrorReport("We can't create the user! -> " . $this->database->error);
      return $error->database();
    }
     
  }

  public function deleteOne(){}
}