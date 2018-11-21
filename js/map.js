function initMap(){
  var school={lat: 42.155948, lng: -88.147437};
  var college={lat: 42.0810643, lng: -88.072897};
  var tech={lat: 41.8348731, lng: -87.62700589999997};
  var claires={lat: 42.0456377, lng: -88.03761810000003};
  var math={lat: 42.07377229999999, lng: -88.18250369999998}; 
  var chase={lat: 42.182149, lng: -87.98877900000002}; 
  var bui={lat: 42.0236481, lng: -88.18100319999996}; 
  var hospital={lat: 42.0542081, lng: -88.1400453};

  var map=new google.maps.Map(
    document.getElementById('map'), {
    zoom: 5, center: school
    }
  );

  var marker1=new google.maps.Marker({
    position: school,
    map: map
  });

  var marker2=new google.maps.Marker({
    position: college,
    map: map
  });

  var marker3=new google.maps.Marker({
    position: tech,
    map: map
  });

  var marker4=new google.maps.Marker({
    position: claires,
    map: map
  });

  var marker5=new google.maps.Marker({
    position: math,
    map: map
  });

  var marker6=new google.maps.Marker({
    position: chase,
    map: map
  });

  var marker7 = new google.maps.Marker({
    position: bui,
    map: map
  });

  var marker8 = new google.maps.Marker({
    position: hospital,
    map: map
  });
}
