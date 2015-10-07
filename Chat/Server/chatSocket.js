var onConnection = function(socket){
		console.log('user connected');
		
		socket.broadcast.emit('chat message', 'hi !');
	  
		socket.on('disconnect', function(){
			socket.broadcast.emit('chat message', 'bye !');
			console.log('user disconnected');
		});
  
		socket.on('chat message', function(msg){
			console.log('message: ' + msg);
			socket.nsp.emit('chat message', msg);
		});
};

module.exports = onConnection;