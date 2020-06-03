class Earth extends BasicBox{
    constructor() {
        super()
        this.item ={}
        this.initThree('canvas-frame');
        this.initCamera();
        this.initScene();
        this.initLight();
        this.initObject();
        this.renderer.clear();
        this.renderer.render( this.scene,  this.camera);

    }   
    animation(){   

        if(this.item["moon"] && this.item["earth"]){
            // console.log(this.sphere)
            this.item["earth"].rotation.y += 0.003;
            this.moonAngel += 0.01
            this.item["moon"].position.y = this.item["earth"].position.y
            this.item["moon"].position.z = 1800* Math.sin( this.moonAngel ) + this.item["earth"].position.z
            this.item["moon"].position.x =1800* Math.cos( this.moonAngel ) + this.item["earth"].position.x
        }
        // 
        
        // 获取camera当前锁定的角度 然后更新
        var delta = this.clock.getDelta();
        this.controls.update(delta);

        // 改变视角需要重新初始化焦点  否则只会移动整体的坐标位置
        this.camera.lookAt( 0,0, 0 );
        // _this.camera.updateProjectionMatrix();
        this.renderer.render( this.scene,  this.camera);
    }
    initThree(id) {
        var box = document.getElementById(id)
        this.width = box.clientWidth;
        this.height = box.clientHeight;
        this.renderer = new THREE.WebGLRenderer({
            antialias : true
        });
        this.renderer.setSize( this.width,  this.height);
        this.renderer.setClearColor("#fff", 1.0);
        box.appendChild(this.renderer.domElement);
        
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
        var light1 = new THREE.AmbientLight("#fff");
        light1.position.set(400, 400, 400);
        this.scene.add(light1);
        // PointLight( color, intensity, distance )
        // Color：光的颜色
        // Intensity：光的强度，默认是1.0,就是说是100%强度的灯光，
        // distance：光的距离，从光源所在的位置，经过distance这段距离之后，光的强度将从Intensity衰减为0。 默认情况下，这个值为0.0，表示光源强度不衰减。
        
        var light2 = new THREE.PointLight("#E1E1E1");
        light2.position.set(8000, 400,800);
        this.scene.add(light2);
    }
    initObject() {



        // var geometryBox = new THREE.BoxGeometry(3600, 3600, 1);
        // var matarial = new THREE.MeshLambertMaterial({color: "#00f",opacity:0.2});

        // var cube = new THREE.Mesh(geometryBox, matarial);
        // cube.position.set(0,0,0)
        // this.scene.add(cube);


        // var geometryBox = new THREE.BoxGeometry(1, 3600, 3600);
        // var matarial = new THREE.MeshLambertMaterial({color: '#ff0',opacity:0.2});
        // var cube = new THREE.Mesh(geometryBox, matarial);
        // cube.position.set(0,0,0)
        // this.scene.add(cube);

        var geometryBox = new THREE.BoxGeometry(3600, 1, 3600);
        var matarial = new THREE.MeshLambertMaterial({color: '#0ff'});

        var cube = new THREE.Mesh(geometryBox, matarial);
        cube.position.set(0,0,0)
        this.scene.add(cube);
        // 地球
        // this.addBool("./img/data-1565167424629-_VRUzTZn2.jpg",600,{x:0,y:0,z:0},"earth")
        this.addItem({
            name: "earth",
            type: "addBool",
            size:[600, 100, 100],
            pos:{x:0,y:0,z:0},
            img:"./img/data-1565167424629-_VRUzTZn2.jpg"
        })
        // 月球
        // this.addBool("./img/moon.jpg",100,{x:1800,y:0,z:0},"moon")
        this.addItem({
            name: "moon",
            type: "addBool",
            size:[100, 100, 100],
            pos:{x:0,y:0,z:0},
            img:"./img/moon.jpg"
        })

        this.moonAngel = 0
        // 星星
        // var starsGeometry = new THREE.Geometry();
        // for (var i = 0; i < 5000; i ++) {
        //     var starVector = new THREE.Vector3(
        //         THREE.Math.randFloatSpread(6000)-3000,
        //         THREE.Math.randFloatSpread(6000)-3000,
        //         THREE.Math.randFloatSpread(6000)-3000
        //     );
        //     starsGeometry.vertices.push(starVector);
        // }
        // var starsMaterial = new THREE.PointsMaterial({color: 0x888888})
        // var starsPoint = new THREE.Points(starsGeometry, starsMaterial);
        // this.scene.add(starsPoint);
        // 飞机形状(不想画的，可以下载个 飞机模型 使用加载器加载进来)


        // var planeShape = new THREE.Shape();
        // planeShape.moveTo( 0, 0);
        // planeShape.lineTo(0.2, -0.2);
        // planeShape.lineTo(0.2, -1.3);
        // planeShape.lineTo(1.6,-2.7);
        // planeShape.lineTo(1.6,-3);
        // planeShape.lineTo(0.2, -2.1);
        // planeShape.lineTo(0.2, -3);
        // planeShape.lineTo(0.5, -3.4);
        // planeShape.lineTo(0.5, -3.7);
        // planeShape.lineTo(0, -3.3);
        // planeShape.lineTo(-0.5, -3.7);
        // planeShape.lineTo(-0.5, -3.4);
        // planeShape.lineTo(-0.2, -3);
        // planeShape.lineTo(-0.2, -2.1);
        // planeShape.lineTo(-1.6,-3);
        // planeShape.lineTo(-1.6,-2.7);
        // planeShape.lineTo(-0.2, -1.3);
        // planeShape.lineTo(-0.2, -0.2);
        // var planeGeometry = new THREE.ShapeGeometry(planeShape);
        // // 飞机材质
        // var planeMaterial = new THREE.MeshPhongMaterial({color: 0x0FB4DD, side: THREE.DoubleSide, depthTest: true});

        // var plane = new THREE.Mesh(planeGeometry, planeMaterial);
        // plane.position.set(601,0,0)
        // this.scene.add(plane);
    }

}