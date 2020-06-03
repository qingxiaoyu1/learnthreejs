
  // 左边第一个


$.ajax({
    //几个参数需要注意一下
    type: "get",//方法类型 
    dataType: "json",//预期服务器返回的数据类型
    url: baseUrl+"category/list" ,
    success: function (result) {
        var data = result.data
        var htmlArray = []
        
        for(var  i in data){
            var itenHtml = []
            var itemArray = `<dt class="clickadd" showid="${data[i].id}">${data[i].categoryName}</dt>`
            var sonCategories = data[i]["sonCategories"]
            for(var  j in sonCategories){
                itenHtml.push(`<li class="clickadd" showid="${sonCategories[j].id}">${sonCategories[j].categoryName}</li>`)
            }
            htmlArray.push(itemArray +"<dd><ul>"+itenHtml.join("")+"</dd></ul>")
        }
        $(".toggle dl").html(htmlArray.join(""))


        $(".toggle dl dd").hide();
        $(".toggle dl dt").click(function(){
            if($(this).hasClass("current")){
                $(".toggle dl dd").not($(this).next()).hide();
                $(".current").removeClass("current");
                $(this).next().slideToggle(500);
                $(this).toggleClass("current");
            }else{
                // $(".toggle dl dd").not($(this).next()).hide();
                $(".current").next().slideUp(500);
                $(".current").removeClass("current");
                $(this).next().slideToggle(500);
                $(this).toggleClass("current");
            }
        });
        $(".clickadd").click(function(){
            var showId = $(this).attr("showid")
            loadRight(showId)
            loadCenter(showId)
        })
        $(".clickadd").eq(0).addClass("current")
        $(".clickadd").eq(0).next().slideToggle(500);
        loadRight($(".current").attr("showId"))
        loadCenter($(".current").attr("showId"))
    }
})
  

