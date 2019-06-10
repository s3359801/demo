$(function(){
    $.ajax({
        type:'get',
        url:'./data/mi.json',
        dataType:'json',
        success: function (data) {
             console.log(data);
             var results ="";
            $.each(data,function(index,value){
                if(index<=3){
                results += '<li code="'+value.code+'"><a href="javascript:void(0);"><img src="'+value.imgurl+'"><span>'+value.shopName+value.RAM[0]+'+'+value.RAMsize[1]+'</span></a><p>'+value.shopIntroduce+'</p><em>'+value.price[0]+'</em><strong class="shop_status">新品</strong></li>'
                }
                else{
                results += '<li code="'+value.code+'"><a href="javascript:void(0);"><img src="'+value.imgurl+'"><span>'+value.shopName+value.RAM[0]+'+'+value.RAMsize[1]+'</span></a><p>'+value.shopIntroduce+'</p><em>'+value.price[0]+'</em><strong class="shop_status1">减500</strong></li>'
                }
            });
            $('.sb_right ul').html(results);
        }
    });
})
