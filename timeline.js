$(function(){
    $("#timeline").load("timeline.html", 
        function () {
            var currentTimeline = document.querySelector('#timeline').getAttribute('data-currentTime');
            var timelines = document.getElementsByClassName("timelineInput");

            for(let i = 0; i < timelines.length; i++){
                if(i == currentTimeline-1){
                    timelines[i].classList.add("active");
                    console.log(i);
                }else{
                    timelines[i].classList.remove("active");
                }
            }
        }
    ); 
});