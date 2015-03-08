ChatController = {};

$(document).ready(function(){
	var socket = 
		window.location.href.indexOf('rhcloud.com')>-1?
	    io("http://nodejs-creweb.rhcloud.com:8000/chat"):
		io("/chat");
	  
	ChatController.submitMessage = function(){
	    socket.emit('chat message', $('#m').val());
	    $('#m').val('');
	    return false;
	  };

	socket.on('chat message', function(msg){
	    $('#messages').append($('<li>').text(msg));
	  });	  
});