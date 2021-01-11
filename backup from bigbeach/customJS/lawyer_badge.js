

//<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js"></script>
//  <script src="https://threejs.org/examples/js/controls/TrackballControls.js"></script>
//  <script src="https://mamboleoo.be/learnThree/demos/OBJLoader.js"></script>

//<script>

  var mesh = 0;
  var material;


  var width = window.innerWidth;
  var height = width * 0.8;

  //console.log(width, height);


 // window.addEventListener ('resize', onWindowResize, false);


 // function onWindowResize() {
   // width = window.innerWidth;
    //height  = width * 0.8;

   // renderer.setSize(width, height);
  //}

  function getScene() {
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x779ECB);
    return scene;
  }

  function getCamera() {
    var aspectRatio = width/ height;
    //var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    //camera.position.set(0, 0, 1.5);

    var camera = new THREE.OrthographicCamera( width / - 500, width / 500, height / 500, height/ -500, 1, 1000); 

    camera.position.set(0, 0, 5);
    return camera;
  }

  function getLight(scene) {
   // var light = new THREE.PointLight(0xFFD700);
   // light.position.set(3, 3, 3);
   // scene.add(light);

   // var ambientLight = new THREE.AmbientLight(0xD4AF37);
   // scene.add(ambientLight);
   // return light;

    var sunlight = new THREE.DirectionalLight();
    sunlight.intensity = 0.3;
    sunlight.position.set(0, 0, 10);
    scene.add(sunlight);
    return sunlight;

  }

  function getRenderer() {
    // Create the canvas with a renderer
    var renderer = new THREE.WebGLRenderer({antialias: true});
    // Add support for retina displays
    renderer.setPixelRatio(window.devicePixelRatio);
    // Specify the size of the canvas
    renderer.setSize(width, height);

    // Add the canvas to the DOM
    document.body.appendChild(renderer.domElement);
    //document.getElementById("3d_lawyer_badge").appendChild(renderer.domElement);
    return renderer;
  }

  function getControls(camera, renderer) {
    var controls = new THREE.TrackballControls(camera, renderer.domElement);
    controls.zoomSpeed = 0.4;
    controls.panSpeed = 0.4;

    return controls;
  }

  function loadModel() {
    var loader = new THREE.OBJLoader();
    loader.load( 'https://bigbeach.kr/wp-content/uploads/artwork/3d_model/3d_lawyer.obj', function ( object, materials ) {
       object.scale.set(5, 5, 5);


    material = new THREE.MeshPhongMaterial();
    material.emissive.setRGB(0.7313, 0.5862, 0.1156);

    material.specular.setRGB(0.5, 0.5, 0.5);
 
    object.traverse( function(child) {
      if(child instanceof THREE.Mesh) {
          child.material = material;
      }
    });
       
      mesh = object;

       scene.add( mesh);
      //document.querySelector('h1').style.display = 'none';
    } );
  }

  function render() {
    requestAnimationFrame(render);
    
if( mesh != 0) {
    //mesh.rotation.x += 0.010;
    mesh.rotation.y += 0.010;
    //mesh.rotation.z += 0.010;
}
    renderer.render(scene, camera);
    controls.update();
  };

  var scene = getScene();
  var camera = getCamera();
  var light = getLight(scene);
  var renderer = getRenderer();
  var controls = getControls(camera, renderer);

  loadModel();

  render();

//</script>
