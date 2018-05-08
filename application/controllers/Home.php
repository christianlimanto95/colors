<?php
defined('BASEPATH') OR exit('No direct script access allowed');

//include general controller supaya bisa extends General_controller
require_once("application/core/General_controller.php");

class Home extends General_controller {
	public function __construct() {
		parent::__construct();
	}
	
	public function index()
	{
		$data = array(
			"title" => "HEX to RGB Converter"
		);
		
		parent::view("home", $data);
	}
}
