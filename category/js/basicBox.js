class BasicBox extends Init{
    constructor() {
        super()
    }  
    addItem(initOption){
        // name，type是必输入
        var name = initOption.name
        if(name){
            // 判断name是否已经存在同名的，一个name对应唯一一个item
            if(this.item[initOption.name]){
                alert("item的name已存在")
                return ""
            }
            if(initOption.type){
                // 调用对应组件的方法
                this[initOption.type](initOption)
            }else{
                alert("请设置Item的Type")
                return ""
            }
            // 判断该ITEM是否存在 如果存在添加到scene中
            if(this.item[initOption.name]){
                this.scene.add(this.item[initOption.name]);
            }
        }else{
            alert("请设置Item的name")
            return ""
        }
    }
    /**
     * 地球仪
     * @initOption size Array 组件尺寸 默认为1000 
     * @initOption img String 地球仪表面包裹
     * @initOption pos XYZ三个平面的中心点
     * @returns
    **/
    addBool(initOption){
        // 添加球形 在上面覆盖地球图片即地球仪
        var pos = initOption.pos || {x:0,y:0,z:0}
        var img = initOption.img
        var loader = new THREE.TextureLoader()
        loader.load(img, (texture) => {
            var geometryRound = new THREE.SphereGeometry(initOption.size[0], 100, 100);
            var matarialEarth = new THREE.MeshLambertMaterial();
            matarialEarth.map = texture;

            this.item[initOption.name]= new THREE.Mesh(geometryRound, matarialEarth);
            this.item[initOption.name].position.set(pos.x,pos.y,pos.z)
            this.scene.add( this.item[initOption.name]);
            this.scene.add( new THREE.BoxHelper( this.item[initOption.name] ) );
        })
    }


    /**
     * 画三维XYZ轴平面
     * @initOption size number 组件尺寸 默认为1000 
     * @initOption color Array 三个平面XYZ的颜色  默认 ["#00f","#ff0","#0ff"]
     * @initOption pos XYZ三个平面的中心点
     * @returns
    **/
    XYZ(initOption){
        var size = initOption.size || 1000;
        var color = initOption.color || ["#00f","#ff0","#0ff"]
        var pos = initOption.pos || {x:0,y:0,z:0}

        this.addItem({
            name: "xPing",
            type: "addBoxGeo",
            size:[size, size, 1],
            pos:{x:pos.x,y:pos.y,z:pos.z},
            color: color[0]
        })
        this.addItem({
            name: "yPing",
            type: "addBoxGeo",
            size:[1, size, size],
            pos:{x:pos.x,y:pos.y,z:pos.z},
            color: color[1]
        })
        this.addItem({
            name: "zPing",
            type: "addBoxGeo",
            size:[size, 1, size],
            pos:{x:pos.x,y:pos.y,z:pos.z},
            color: color[2]
        })

    }
    /**
     * 自定义CylinderGeometry 添加一个圆台
     * @initOption size Array 组件尺寸 默认为[100,100,100]  圆台由三个尺寸组成 上半径 下半径 高度
     * @initOption pos 圆台的中心点
     * @initOption color  圆台的基础颜色
     * @returns
    **/
    addYuanTai(initOption){
        var size = initOption.size || [100,100,100]
        var pos = initOption.pos || {x:0,y:0,z:0}
        var color = initOption.color || "#333"

        // size.upSize, size.downSize, size.height
        var geometry = new THREE.CylinderGeometry( size[0], size[1], size[2])
        var material = new THREE.MeshLambertMaterial( { color: color} )

        this.item[initOption.name] = new THREE.Mesh( geometry,material)
        // 设置CylinderGeometry的初始位置
        this.item[initOption.name].position.set(pos.x,pos.y,pos.z)
        
    }
    /**
     * 自定义CylinderGeometry 添加一个圆台
     * @initOption size Array 组件尺寸 默认为{upSize:100,downSize:100,height:100}  圆台由三个尺寸组成 上半径 下半径 高度
     * @initOption pos 圆台的中心点
     * @initOption color  圆台的基础颜色
     * @returns
    **/
   addBoxGeo(initOption){
        var size = initOption.size || [100,100,100]
        var pos = initOption.pos || {x:0,y:0,z:0}
        var color = initOption.color || "#ff0"

        var geometry = new THREE.BoxGeometry( size[0], size[1], size[2])
        var material = new THREE.MeshLambertMaterial( { color: color} )
        this.item[initOption.name] = new THREE.Mesh( geometry,material)
        // 设置CylinderGeometry的初始位置
        this.item[initOption.name].position.set(pos.x,pos.y,pos.z)
        
    }
    
}