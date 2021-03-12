var folder = "/StoreOfTheFutureDemo/Database/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|JPG|png|gif)$/) ) { 
                $("body").append( "<img class='img-fluid' alt='100%x280' src='"+ folder + val +"'>");
            } 
        });
    }
});

