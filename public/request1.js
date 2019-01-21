$( document ).ready(function() {

	// SUBMIT FORM
    $("#ins").click(function(event) {
		// Prevent the form from submitting via the browser.
		event.preventDefault();
		InsertData();

	});
	$("#del").click(function(event) {
		event.preventDefault();
		DeleteData();
	})

	$("#read").click(function(event) {
		event.preventDefault();
		ReadData();
	})

	$("#udt").click(function(event) {
		event.preventDefault();
		UpdateData();
	})
    function UpdateData(){
       var formData = {
       	 firstname : $("#firstname").val(),
    	 lastname :  $("#lastname").val()
       }
       $.ajax({
       	type : "PUT",
       	contentType : "application/json",
       	url :  "http://localhost:8585/api/ninjas/Update",
		data : JSON.stringify(formData),
		dataType : 'json',
		success : function(res) {
				console.log(res);
			},
			error : function(e) {
		
				alert("Error!")
				console.log("ERROR: ", e);
			}
       });
       resetData();
    };
	function ReadData(){
       var formData = {
       	 firstname : $("#firstname").val(),
    	 lastname :  $("#lastname").val()
       }
       $.ajax({
       	type : "GET",
       	contentType : "application/json",
       	url :  "http://localhost:8585/api/ninjas/Read",
		data : formData,
		dataType : 'json',
		success : function(res) {
				console.log(res);
				$("#display").html("<p>" + 
				"GET Successfully! <br>" +
					"--->" + JSON.stringify(res)+ "</p>"); 
				
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
       });
       resetData();
    };
    
    function DeleteData(){
       var formData = {
       	 firstname : $("#firstname").val(),
    	 lastname :  $("#lastname").val()
       }
       $.ajax({
       	type : "DELETE",
       	contentType : "application/json",
       	url :  "http://localhost:8585/api/ninjas/delete",
		data : JSON.stringify(formData),
		dataType : 'json',
		success : function(res) {
				console.log(res);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
       });
       resetData();
    };
   function InsertData(){
    	
    	// PREPARE FORM DATA
    	var formData = {
    		firstname : $("#firstname").val(),
    		lastname :  $("#lastname").val()
    	}
    	
    	// DO POST
    	$.ajax({
			type : "POST",
			contentType : "application/json",
			url :  "http://localhost:8585/api/ninjas",
			data : JSON.stringify(formData),
			dataType : 'json',
			success : function(res) {
				console.log(res);
			},
			error : function(e) {
				alert("Error!")
				console.log("ERROR: ", e);
			}
		});
    	
    	// Reset FormData after Posting
    	resetData();
 
    }
    
    function resetData(){
    	$("#firstname").val("");
    	$("#lastname").val("");
    }
})