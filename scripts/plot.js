window.addEventListener("load", Main_integrate, true);
function Main_integrate() {
  calculate_button.onclick = plot;

  function plot() {
      var
        container = document.getElementById('plotPhi'),
        data = [],
        graph, i;

      var degree = 0.39; //Radian
      var t = 0;
      var tMax = document.getElementById("time").value;

      var omega = 0;
      var dt = 0.005;

      // var degree = document.getElementById("angle").value;
      var A = document.getElementById("amplitude").value;
      var w = document.getElementById("frequency").value;
      var l = document.getElementById("length").value;

      while (t <= tMax) {
        omega -= (A * w * w * Math.cos(w * t) + 9.8) * Math.sin(degree) / l * dt;
        degree += omega * dt;
        x = l * Math.sin(degree);
        //y = l * Math.cos(degree) + A * w * w * Math.cos(w * t);
        y = l * Math.cos(degree) + A * Math.cos(w * t);
        data.push([x, y]);
        t += dt;
      }

      // Draw Graph
      // graph = Flotr.draw(container, [ data ], {
      //   yaxis : {
      //   max : 50,
      //   min : -50
      //   }
      // });
      graph = Flotr.draw(container, [ data ]);
  }
}

 