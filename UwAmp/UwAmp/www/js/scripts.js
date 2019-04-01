window.onload = init;

function init() {

    // var query; 
    // var input = document.getElementById("query"); 

    // input.addEventListener("keypress", function(e){
    //     if(e.key == "Enter"){
    //         query = input.value; 
    //         console.log(query); 
    //         getTweets(); 

    //     }
    // })

    var main; 
    var input = document.getElementById("button"); 
    input.addEventListener("click", function(){
        var main_array= ["burger", "pizza", "steak", "sandwich"]
        var rand = Math.floor(Math.random() * 4);
        console.log(main_array[rand]); 
        callAjax(main_array[rand]); 
    }); 

    var veggies; 
    var input = document.getElementById("button2"); 
    input.addEventListener("click", function(){
        callAjax("veggies"); 
    }); 

    var surprise; 
    var input = document.getElementById("button3"); 
    input.addEventListener("click", function(){
        callAjax("surprise"); 
    }); 



    var mainContainer = document.getElementById("main-info")
    
    function callAjax(food){
        var xhr = new XMLHttpRequest()
        xhr.open("GET", "get_tweets.php?q=" + food, true); 
        xhr.send(null);
        xhr.onload = function(){
            if(xhr.status == 200){
            var tweets = JSON.parse(xhr.responseText);
            tweets = tweets.statuses; 
            console.log(tweets)
        var newFig = document.createElement("FIGURE"); 

     var newImage = document.createElement("IMG"); 
     newImage.setAttribute("src", "imgs/01_mains/" + food + ".png");  

     var newCap = document.createElement("FIGCAPTION"); 

     //Add Elements to the DOM 
     newFig.appendChild(newImage)
     newFig.appendChild(newCap)
     document.getElementById("main-info").appendChild(newFig); 
    
            
        } else {
            console.log(xhr);
            document.getElementById("results").innerHTML = xhr.responseText;
        }
        }
        // var imageLoop = "mainTweets"; 
        // for (i = 0; i < main.length; i++){ // this is where i want to put tweets + image 
        //     imageLoop += "images"; 
        // }
        // mainContainer.insertAdjacentHTML('beforeend', 'mainTweets + image')
    }
    //MAIN IMAGES// 
    var m_images =["imgs/01_mains/sandwich.png"]; 

    m_images.forEach(function(i)
{
    //Create Elements 
     var newFig = document.createElement("FIGURE"); 

     var newImage = document.createElement("IMG"); 
     newImage.setAttribute("src", i);  

     var newCap = document.createElement("FIGCAPTION"); 

     //Add Elements to the DOM 
     newFig.appendChild(newImage)
     newFig.appendChild(newCap)
     document.getElementById("main-info").appendChild(newFig); 
    })

    //VEGGIE IMAGES// 
    var v_images =["imgs/02_veggies/corn.png"]; 

    v_images.forEach(function(i){

     //Create Elements 
     var newFig = document.createElement("FIGURE"); 

     var newImage = document.createElement("IMG"); 
     newImage.setAttribute("src", i);  

     var newCap = document.createElement("FIGCAPTION"); 

     //Add Elements to the DOM 
     newFig.appendChild(newImage)
     newFig.appendChild(newCap)
     document.getElementById("main-info").appendChild(newFig); 
    })

    //SURPRISE IMAGES// 
    var s_images =["imgs/03_desserts/cake.png"]; 
    s_images.forEach(function(i){

     //Create Elements 
     var newFig = document.createElement("FIGURE"); 

     var newImage = document.createElement("IMG"); 
     newImage.setAttribute("src", i);  

     var newCap = document.createElement("FIGCAPTION"); 

     //Add Elements to the DOM 
     newFig.appendChild(newImage)
     newFig.appendChild(newCap)
     document.getElementById("main-info").appendChild(newFig); 
    })

    // var m_img = {
    //     url: "imgs/01_mains/sandwich.png", 
    //     title: "sandwich", 
    // }

    // var m_img2 = {
    //     url: "imgs/01_mains/taco.png", 
    //     title: "taco", 
    // }


    // var newFig = document.createElement("FIGURE"); 

    // var newImage = document.createElement("IMG"); 
    // newImage.setAttribute("src", m_img.url); 
    // newImage.setAttribute("alt", m_img.title) 
    // newImage.setAttribute("src", m_img2.url); 
    // newImage.setAttribute("alt", m_img2.title) 


    // var newCap = document.createElement("FIGCAPTION"); 
    // var newCapText = document.createTextNode(m_img.title); 
    // newCap.appendChild(newCapText);  
    // var newCapText = document.createTextNode(m_img2.title); 
    // newCap.appendChild(newCapText);  


    // newFig.appendChild(newImage)
    // newFig.appendChild(newCap)
    // document.getElementById("main-info").appendChild(newFig); 

//     function getTweets(){
//     var xhr = new XMLHttpRequest();
//     // xhr.open('GET', 'get_tweets.php?q=taco'+ main, true);
//     xhr.open('GET', 'get_tweets.php?q='+query, true); //this changes the state of xmlhttp
//     xhr.send(null);
//     xhr.onload = function() {
        
//         if(xhr.status == 200){
//             var tweets = JSON.parse(xhr.responseText);
//             tweets = tweets.statuses; 
//             console.log(tweets)
            
//             //  EXAMPLE OUTPUT TO A LIST
//             var tweetList = "<ul>";
//             tweets.forEach(function(tweet) {
//                 tweetList += "<li>" + tweet.text + "</li>";
//             });
//             tweetList += "</ul>"

//             document.getElementById("results").innerHTML = tweetList;

            
//         } else {
//             console.log(xhr);
//             document.getElementById("results").innerHTML = xhr.responseText;
//         }

//     }
// }


} 


  
