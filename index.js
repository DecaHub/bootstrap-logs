/**
 * Created by DecaHub on 3/8/17.
 */

"use strict";


const chalk = require("chalk");
const aux = require("./aux");

const log = function (string) {
	
	console.log(string);
	
};

const danger = {
	
	value (string) {
		
		if (this.config.custom) {
			
			console.log(chalk.white.bgRed
				.bold(`${this.config.customAlerts.danger}${string} `));
			
		} else {
			
			console.log(chalk.white.bgRed.bold(`${string} `));
			
		}
		
	}
	
};

const info = {
	
	value (string) {
		
		if (this.config.custom) {
			
			console.log(chalk.blue.bgCyan
				.bold(`${this.config.customAlerts.info}${string} `));
			
		} else {
			
			console.log(chalk.blue.bgCyan.bold(`${string} `));
			
		}
		
	}
	
};

const warning = {
	
	value (string) {
		
		if (this.config.custom) {
			
			console.log(chalk.black.bgYellow
				.bold(`${this.config.customAlerts.warning}${string} `));
			
		} else {
			
			console.log(chalk.black.bgYellow.bold(`${string} `));
			
		}
		
	}
	
};

const success = {
	
	value (string) {
		
		if (this.config.custom) {
			
			console.log(chalk.black.bgGreen
				.bold(`${this.config.customAlerts.success}${string} `));
			
		} else {
			
			console.log(chalk.black.bgGreen.bold(`${string} `));
			
		}
		
	}
	
};

const config = {
	
	value: {
		
		custom: false,
		customAlerts: {
			
			danger: "",
			info: "",
			success: "",
			warning: ""
			
		}
		
	}
	
};


const custom = {
	
	value (obj) {
		
		if (obj) {
			
			this.config.custom = true;
			
			if (aux.isString(obj.danger)) {
				
				this.config.customAlerts.danger = obj.danger;
				
				
			} else {
				
				this.config.customAlerts.danger = "";
				
			}
			
			if (aux.isString(obj.warning)) {
				
				this.config.customAlerts.warning = obj.warning;
				
				
			} else {
				
				this.config.customAlerts.warning = "";
				
			}
			
			if (aux.isString(obj.info)) {
				
				this.config.customAlerts.info = obj.info;
				
				
			} else {
				
				this.config.customAlerts.info = "";
				
			}
			
			if (aux.isString(obj.success)) {
				
				this.config.customAlerts.success = obj.success;
				
				
			} else {
				
				this.config.customAlerts.success = "";
				
			}
			
		}
		
	}
	
};

Object.defineProperties(log,
	{
		
		config,
		danger,
		info,
		success,
		warning,
		custom
		
	}

);

module.exports = log;
