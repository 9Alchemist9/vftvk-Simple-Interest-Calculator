function compute()
		{   
            // Set the reference to the amount variable;

        	var principal = document.getElementById("principal").value;
        
            /* Establishes the condition to execute the operation. If amount is zero or
            a negative number, it returns an alert and reset the input field; */

        	if(principal <= 0){
            alert("Insert a positive number!"); // Shows an alert
            var resetprincipal = document.getElementById("principal"); // Sets the reference for the variable;
        	resetprincipal.value = resetprincipal.defaultValue; // Sets the default value for the amount input field ;
            var resetresult = document.getElementById("result"); // Sets the reference for the variable;
            resetresult.innerHTML = ""; // Sets the default value for the result span;
            resetprincipal.focus(); // Sets focus at the amount input field;
            
            } else {
        
            /* If the amount field value is a positive number; */    
    		
    		var rate = document.getElementById("rate").value; // Defines a variable to the interest rate value;
    		var years = document.getElementById("years").value; // Defines a variable to the number of years;
    		var interest = principal * years * rate / 100; // Defines a variable to the calculation value;
    		var year = new Date().getFullYear()+parseInt(years); // Function to calculate the year, based on the actual;

            // Defines the output message shown after the calculation and includes its variable values;

            document.getElementById("result").innerHTML = "If you deposit <mark>"+ principal +"</mark>, \
            <br\> at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of 							<mark>"+interest+"</mark>,\
            <br\>in the year <mark>"+year+"</mark>\<br\>"
		}
        }

        // Function to link the span content with the range input value;

    	function updateRate() {
        		var rateval = document.getElementById("rate").value;
        		document.getElementById("rate_val").innerText = rateval+"%";
    	}
        