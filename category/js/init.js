
class Init{
    constructor(initOption) {
         // this.item 用来存储3D图像每一个Item
         this.item = {}
        // 初始化THREE
        this.initThree('canvas-frame');
        // 添加照相机
        this.initCamera();
        // 添加长久
        this.initScene();
        // 添加光源 后面移入到BasicBox类中
        this.initLight();
        // 渲染item
        this.initObject();
        this.renderer.clear();
        this.renderer.render( this.scene,  this.camera);
        // 渲染状态检测
        this.status()
        this.mouse = new THREE.Vector2()
    }
    initThree(id) {
        this.box = document.getElementById(id)
        this.width = this.box.clientWidth;
        this.height = this.box.clientHeight;
        // antialias 消除锯齿
        this.renderer = new THREE.WebGLRenderer({
            antialias : true
        });
        this.renderer.setSize( this.width,  this.height);
        this.renderer.setClearColor("#fff", 1.0);
        this.box.appendChild(this.renderer.domElement);
    }
    initCamera() {
        // fov: 表示相机的夹角;
        // aspect:水平长度和竖直长度的比值;
        // near:拍摄最近距离
        // far:拍摄最远距离
        this.camera = new THREE.PerspectiveCamera(45,  this.width /  this.height, 1, 10000);
     
        this.camera.position.set(2000, 2000, 3000)
        this.camera.lookAt( 0,0, 0 );

        // 使用OrbitControls增加camera自动旋转缩放功能
        this.controls = new THREE.OrbitControls(this.camera,this.renderer.domElement);
        this.controls.target = new THREE.Vector3(0,0,0);
        this.controls.autoRotate = false;
        this.clock = new THREE.Clock();
    }
    initScene() {
        this.scene = new THREE.Scene();
    }
    initLight() {
        // AmbientLight环境光
        var light1 = new THREE.AmbientLight("##E1E1E1");
        light1.position.set(0, 0, 0);
        this.scene.add(light1);
        // PointLight( color, intensity, distance )
        // Color：光的颜色
        // Intensity：光的强度，默认是1.0,就是说是100%强度的灯光，
        // distance：光的距离，从光源所在的位置，经过distance这段距离之后，光的强度将从Intensity衰减为0。 默认情况下，这个值为0.0，表示光源强度不衰减。
        var light2 = new THREE.PointLight("#fff");
        light2.position.set(5000, 5000,5000);
        this.scene.add(light2);
    }
    // 检测THREE 动画刷新频率状态
    status(){
        this.stats = new Stats();
        this.stats.domElement.style.position = 'absolute';
        this.stats.domElement.style.top = '0px';
        this.box.appendChild( this.stats.domElement );
    }
    
}