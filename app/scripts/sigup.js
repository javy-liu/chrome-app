'use strict';


document.addEventListener('DOMContentLoaded', function() {
   
   AV.initialize("msy5aeox3o1anchktsgafuxw96o89cpuoojutji53ttkvyh4", "3ggqutcvwllp5i5a2r6elpfvxjock2o8nr094g37m5ua282g");

	

	document.getElementById('IAgree').addEventListener("click",setIAgree);
   	
   	var agreeBtn = document.getElementById("agreeBtn");
   	agreeBtn.addEventListener("click",changeAgree);
	
   	var agree = document.getElementById("agree");

   	var submitBtn = document.getElementById("submit");
	submitBtn.addEventListener("click",submitForm);

}, false);

function setIAgree(ev){
	agree.value = 1;
	var classList = agreeBtn.classList;
	classList.remove("btn-danger");
	classList.add("btn-success");
}

function changeAgree(ev){
	var classList = agreeBtn.classList;
	if (agree.value == "1") {
		agree.value = 0;
		agreeBtn.innerText = "不同意";
		classList.remove("btn-success");
		classList.add("btn-danger");
	}else{
		agree.value = 1;
		agreeBtn.innerText = "同意";
		classList.remove("btn-danger");
		classList.add("btn-success");
	}
}

function submitForm(ev){
	var form = $("#sigupForm");
	var array = form.serializeArray();
    var json = {};
    
    jQuery.each(array, function() {
        json[this.name] = this.value || '';
    });

    console.log(json);

    var user = new AV.User();
    user.set(json);

    user.signUp(null, {
	  success: function(user) {
	    // 发布事件
	    var evt = form[0].createEvent("Event");
	    evt.initEvent("submit",false,false);
	    evt.status = "success";
	    form[0].dispatchEvent(evt);
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    var evt = form[0].createEvent("Event");
	    evt.initEvent("submit",false,false);
	    evt.status = "fail";
	    form[0].dispatchEvent(evt);
	  }
	});
}