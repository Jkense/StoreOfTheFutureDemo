var folder = "/StoreOfTheFutureDemo/Database/";

$.ajax({
    url : folder,
    success: function (data) {
        console.log(data);

        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                var _img = document.getElementById('body');
                var newImg = new Image;
                newImg.onload = function() {
                    _img.src = this.src;
                }
                newImg.src = 'http://'+folder + val;
                console.log('http://'+folder + val);
            } 
        });
    }
});