var start = new Date();

function stopTime(){
    var stop = new Date();
    var time = (stop-start)/600;
    alert("You been on this page page for " + time.toFixed(2) + " seconds");
}