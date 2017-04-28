angular.module('BubX').controller('Tester', ['$scope', function($scope) {
    $scope.bags =12;
    console.log($scope.bags)
    }]);
   
angular.module('BubX').controller('HUD', ['$scope','$window', function($scope,$window){
   //zxe = $window.data_stream;
   //$scope.aird = $scope.dta.VFR_HUD.airspeed.toString();  
   //console.log($window.data_stream.ATTITUDE.pitch)
   // console.log($window.data_stream["STATUSTEXT"])
//   console.log($window.data_stream)

  
   // $scope.dta = $window.vehicle_offset_x;
  var work = {};
  //$scope.work = JSON.Stringify($window.data_stream.VFR_HUD.throttle);
  //console.log(work);
  console.log($window.xxs1)
  //console.log($window.xxs.VFR_HUD.throttle)
  // if (zxe.VFR_HUD) {
  //       // canvas.font="30px Arial";
  //       // canvas.fillText('Thr: '+(data_stream.VFR_HUD.throttle).toFixed(0)+' %', 15, top_offset+300);
  //       console.log(zxe.VFR_HUD.throttle);

  //       }

  }]);