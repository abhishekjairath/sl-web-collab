define(function (require) {
    var activity = require("sugar-web/activity/activity");
    var collab = require('sugar-web/collab');

    // Manipulate the DOM only when it is ready.
    require(['domReady!'], function (doc) {

        // Initialize the activity.
        activity.setup();
        var activityName = 'splash';
        collab.init(activityName);

        var input = document.getElementById('splashInput');
        var button = document.getElementById('splashButton');
        var wall = document.getElementById('wall');
        function sendMessage(){
        	collab.sendMessage(input.value);
        	input.value = "";
        };

        button.onclick = sendMessage;

        collab.onReceive(function(data){
        	console.log(data);
        	var msg = data.msg;
			var author = data.user.replace('<','&lt;').replace('>','&gt;');
			var authorElem = '<span style = "color:#24edff">' + author + '</span>';
			var myElem = document.createElement('li');
			myElem.innerHTML = authorElem + msg;
			wall.appendChild(myElem);
		});

    });

});
