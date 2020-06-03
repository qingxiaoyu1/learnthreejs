

class initTree extends BasicBox{
    constructor(initOption) {
        super()
    }   
    animation(){   
 
        if(this.item["moon"] && this.item["earth"]){
            // console.log(this.sphere)
            this.item["earth"].rotation.y += 0.003;
            this.moonAngel += 0.01
            
            this.item["moon"].position.y = this.item["earth"].position.y
            this.item["moon"].position.z = 400* Math.sin( this.moonAngel ) + this.item["earth"].position.z
            this.item["moon"].position.x = 400* Math.cos( this.moonAngel ) + this.item["earth"].position.x
        }
        // 获取camera当前锁定的角度 然后更新
        var delta = this.clock.getDelta();
        this.controls.update(delta);

        // 改变视角需要重新初始化焦点  否则只会移动整体的坐标位置
        // this.camera.lookAt( 0,0, 0 );
        this.focus()

         // _this.camera.updateProjectionMatrix();
         this.renderer.render( this.scene,  this.camera);
         // 状态更新
         this.stats.update();
        this.item["boxGeo"].rotateX(0.01)
    }
    focus(){
        var _this = this
       
            _this.raycaster.setFromCamera(_this.mouse,_this.camera)
            var intersects = _this.raycaster.intersectObjects(_this.scene.children)
            if(intersects.length>0){
                // 聚焦物体没有发生改变
                if(_this.INTERSECTED != intersects[0].object) {
      
                        if ( _this.INTERSECTED ) _this.INTERSECTED.material.emissive.setHex(_this.INTERSECTED.currentHex)
                        _this.INTERSECTED = intersects[0].object
                    
                        _this.INTERSECTED.currentHex = _this.INTERSECTED.material.emissive.getHex()
                        _this.INTERSECTED.material.emissive.setHex(0xff0000)
               

                }
            } else {
                if ( _this.INTERSECTED ) _this.INTERSECTED.material.emissive.setHex(_this.INTERSECTED.currentHex)
                _this.INTERSECTED = null
            }

        
    }
    initObject() {
        // 添加XYZ轴平面
        var _this = this
        var listOption = [
            {
                name: "XYZ",
                type:"XYZ",
                size: 1000,
                pos:{x:0,y:0,z:0}
            },{
                name: "yuantai1", // 添加圆台面  set(400,-400,400)
                type: "addYuanTai",
                size: [40,100,200],
                pos:{x:400,y:-400,z:400},
                color:"#f00"
            },{ 
                name: "boxGeo",
                type: "addBoxGeo", // 添加长方体
                size:[100, 100, 100],
                pos:{x:-400,y:400,z:400},
                color:"#f00"
            },{
                name: "earth", 
                type: "addBool", // 添加地球仪
                size:[100, 100, 100],
                pos:{x:400,y:400,z:400},
                img:"./img/data-1565167424629-_VRUzTZn2.jpg"
            },{
                name: "moon",
                type: "addBool", // 添加月亮
                size:[40, 100, 100],
                pos:{x:800,y:400,z:400},
                img:"./img/moon.jpg"
            }
        ]
        for(var i in listOption){
            if(listOption[i]["name"]){
                this.addItem(listOption[i])
            }
        }
        this.moonAngel = 0
        // var geometry = new THREE.BoxGeometry( 100, 100, 100 );
        // var material = new THREE.MeshBasicMaterial( { color: 0xff0000} );
        // this.mesh1 = new THREE.Mesh( geometry,material);
        // this.mesh1.position.x = 100
        // this.scene.add(this.mesh1);
        // this.mesh1.translateX(500);


        this.raycaster = new THREE.Raycaster()
        this.mouse = new THREE.Vector2();//二维向量 
        document.addEventListener('mousemove', function(){
            event.preventDefault();
            _this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            _this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
        }, false);
    }
    
}