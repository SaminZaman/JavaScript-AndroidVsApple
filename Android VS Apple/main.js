"use strict"; 


//clicking a button
document.getElementById("android-btn").addEventListener("click", setAndroid)
document.getElementById("apple-btn").addEventListener("click", setApple)


//event functions
function setAndroid() {
    console.log("android");

    //change android vs apple image to android logo
    document.getElementById("VS").src = "images/Android.jpg";

    //change link to android
    document.getElementById("link").href = "https://www.android.com/";

    //change debate button to android home
    document.getElementById("debateText").innerHTML = "Android Home";

    //change the explore the debate  background color
    document.getElementById("debate-btn").style.backgroundColor = "#a4c93b";

    //change the background to #a4c93b
    document.getElementById("html").style.backgroundColor = "#a4c93b";


}

function setApple() {
    console.log("apple")

    //change android vs apple image to apple logo
    document.getElementById("VS").src = "images/Apple.png";

    //change link to apple
    document.getElementById("link").href = "https://www.apple.com/";

    //change debate button to apple home
    document.getElementById("debateText").innerHTML = "Apple Home";

    //change the explore the debate background color
    document.getElementById("debate-btn").style.backgroundColor = "#b6bcca";

    //change the background to #b6bcca
    document.getElementById("html").style.backgroundColor = "#b6bcca";

}


