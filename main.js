//var PAS = function() {
  // alert("starting PAS");
  // var buses = [...];
  var buses = [
    {"bus":0,
     "status":"shopc",
    "routes":[
      {"route":"0"}
      ]
    },
    
    {"bus":1,
      "routes": [
        {"route":"129am",
          "driver":"Terry Tingle",
          "times":["6:10 - 8:15"]
        },
        {"route":"129pm",
          "driver":"Peter Shank",
          "times": ["1:35 - 4:48"]
        }
      ],
      "mfg":"Blue Bird", 
      "series":"2011"
    },
    
    {"bus":2,
      "routes": [
        {"route": 2,
          "driver":"Harry",
          "times":[
            "6:11 - 8:16",
            "1:36 - 4:31"
          ]
        }
      ],
      "mfg": "Blue Bird",
      "series":"2015"
    },
    
    {"bus":3, 
      "routes": [
        {"route": 2,
          "driver":"3 dude",
          "times":[
            "1:55 - 4:55"
          ]
        }
      ],
      "mfg": "Blue Bird",
      "series":"2015"
    },
    
    {"bus":4, "routes":[{"route":"41 am IH/IM"}]},
    
    {"bus":5, "routes":[{"route":"51 am BR"}]}
  ];

  
  var routes = [
  {}
];

var processButton = function() {
  
};

var clearRoute = function() {
  document.getElementById("route").value = "";
  document.getElementById("id01").value = "";
};

var clearBus = function() {
  document.getElementById("bus").value = "";
  document.getElementById("id01").value = "";
};


var displayRoute = function() {
  
  //empty the div which will hold the route info
  document.getElementById("id01").innerHTML = "";
  
  function myFunction(routes) {
    var routeInfo = "";
    var routeCount = routes.length;
    var i;
    for (i = 0; i < routeCount; i++) {
      routeInfo += "Route " + routes[i].route + " - " + routes[i].driver + "<br>";
      for (j = 0; j < routes[i].times.length; j++) {
        routeInfo += routes[i].times[j] + "<br>";
      }
      routeInfo += "<br>";
    }
    document.getElementById("id01").innerHTML = routeInfo;
  }

  
  var bus = document.getElementById("bus").value;
  if ((typeof buses[bus] === "undefined") || bus === 0) {
    // no variable "buses[bus]" is defined in the current scope
    // *or* some variable "buses[bus]" exists and has been assigned the value undefined  
    document.getElementById("id01").innerHTML = "can't find bus " + bus;
  } else {
    // some variable (global or local) "buses[bus]" is defined in the current scope
    // *and* it contains a value other than undefined
    myFunction(buses[bus].routes);

  }

  //document.getElementById("route").value = buses[bus].routes[0].route;
  
};

// displayBus
var displayBus = function() {
  
  var getBusesWithRoute = function(route) {
    output = [];
    busCount = buses.length;

    for (i = 0; i < busCount; i++) {
      for (j = 0; j < buses[i].routes.length; j++) {    
        if (buses[i].routes[j].route == route) {
          output.push(i);
        }
      }    
    }

    return output;
  };

 //empty the div which will display the bus info
 document.getElementById("id01").innerHTML = "";
 var busList = [];
 var out = "";
  
 var routeToSearchFor = document.getElementById("route").value;
 console.log("will search for: " + routeToSearchFor);
 out = getBusesWithRoute(routeToSearchFor);
 console.log(out);
//   for (i = 0; i < busList.length; i++) {
//     out += buses[busList[i]].bus + "<br>";
//   }
  
  document.getElementById("id01").innerHTML = out;
};


