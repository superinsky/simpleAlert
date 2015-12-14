var ping = require('net-ping');

var session = ping.createSession ();
targets = ["8.8.8.8", "192.168.14.200"]

for (var i = targets.length - 1; i >= 0; i--){

  target = targets[i]

  session.pingHost (target, function (error, target) {
      if (error)
          console.log (target + ": " + error.toString ());
      else
          console.log (target + ": Alive");
  });
}
