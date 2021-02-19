//main file that contains code need to run app
//code below is purely illustrative and not specific to webpack
import "./main.scss"; //example import of scss file 
//example import of functions from multiple js files
import { run } from "./app/app"; 
import { AlertService } from "./app/alert.service"; 
import { ComponentService } from "./app/component.service";
const alertService = new AlertService();
const componentService = new ComponentService();
run(alertService, componentService); 
