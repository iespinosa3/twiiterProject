



var users= [{userName:"Ivan Espinosa",
            coverPhoto:"IvanEspinosa-cover.jpeg",
            userPhoto:"IvanEspinosa.jpg",
            tweets:"13.6K Tweets",
            address:"@IvanEspinosaArt",
            joinedDate:"June 2013",
            following:"5000K",
            followers:"500",
            tweet1:["Nothing much to see here","There is nothing here","Are you listening"] 

},         {userName:"Elon Musk",
            coverPhoto:"elonmusk-cover.jpeg",
            userPhoto:"elonmusk.jpg",
            tweets:"13.6K Tweets",
            address:"@elonmusk",
            joinedDate:"June 2009",
            following:"103",
            followers:"47.9M",
            tweet1:["I admit to judging books by their cover","I love rocket ships", "Mars exploration underway"] 

},          {userName:"Molesia",
coverPhoto:"Molesia-cover.jpeg",
userPhoto:"Molesia-cover.jpeg",
tweets:"13.6K Tweets",
address:"@molesia",
joinedDate:"June 2009",
following:"1001",
followers:"470",
tweet1:["I  love flowers","Enjoy your day", "Flowers make me happy"]            
}





];

var errorHandling = document.querySelector('.error-handling')
var u=0;

var userIdNumber;



var searchLog = document.getElementById('search');


var searchButton = document.querySelector('.search-btn'); // searching user name

 

/////////////////////////////////////////mainbody/////////////////////////

search();

 // function call of tweet  
//create to add tweets

for(var i =0; i< users[u].tweet1.length;i++){
                              
                     
  
  
 addTweet( users[u].userPhoto, users[u].userName,users[u].address,users[u].tweet1[i]);

// key press logger


 }
  



////////////////////////////////////////////////mainbody///////////////////////      

function search(){

userIdNumber = u;
  searchButton.addEventListener('click',function(){
  
    // cleaning up string
    var lowerCaseUserName = searchLog.value.toLowerCase();


    //Static



   for( u in users){

   if(users[u].userName.toLowerCase() == lowerCaseUserName ){
    console.log(u)


   removeElementTweets();
    
errorHandling.style.cssText="display:none;"
    var header = document.querySelector('.header');
    header.innerHTML = `<div class = "left-arrow">
                       <img  class = "arrow" src ="arrow-left.png"></img></div>
                       <div class="user-header-title" >
                       <h2>${users[u].userName}<span><img src ="verified logo.png" class ="verified-logo"></img></span></h2>
                       <p>${users[u].tweets}</p></div>`
  
  var coverPhoto = document.querySelector('.cover-photo');
    coverPhoto.innerHTML = `<img src = ${users[u].coverPhoto} width ="100%" height="200px">`;
  
  
  
  var  profileDetails = document.querySelector('.profile-details');
     profileDetails.innerHTML =`<div class = "profile-container">
                                <div class = "profile-block"><img src = ${users[u].userPhoto} class ="profile-photo"></img>
                                <h2 class ="profile-h2">${users[u].userName}<span><img src ="verified logo.png" class ="verified-logo"></img></span></h2>
                                <p class="address">${users[u].address}</p>
                               <div class = "date-container"> <div class = "calendar">
                               
                             
                               
                               </div>
                               <p class= "joined">Joined ${users[u].joinedDate}</p></div>
                                <p class ="followers"><span class = "color-change">${users[u].following}</span>  
                                Following <span class = "color-change margin-direction"> ${users[u].followers}</span> Followers</p>
                                    </div>
                                <div class = "btn-div"><button class = "btn">Following</button></div>
                               
                               </div>
                               <div class = "tweet-tabs">
                               <div class="tab tab-high-lighter high-lighter"><p class="p">Tweets</p></div>
                               <div class="tab"><p  class="p">Tweets & replies</p></div>
                               <div class="tab"><p  class="p">Media</p></div>
                               <div class="tab"><p  class="p">Likes</p></div>
                               </div>
                               
                                `
                               
                                var rowTabs = document.querySelectorAll('.tab');
                                var highLights = document.querySelectorAll('.high-light');
                             
                               for(var rT of rowTabs){                          // tab- highlight selection
  
                                   rT.addEventListener('click',function(e){
  
                                  for(rT of rowTabs){
  
                                    rT.classList.remove('tab-high-lighter')
                                  }
                                    e.currentTarget.classList.add('tab-high-lighter')
                                 
                                for(var rT of rowTabs){
  
                                    rT.classList.remove('high-lighter')
  
  
                                }
                                   e.currentTarget.classList.add('high-lighter')
                                     
                                
                      

                                   
                                       
                                   })

                                   

       
                                  // highLights[3].classList.add('high-lighter')
                               }
                            
                               
                               for(var i =0; i< users[u].tweet1.length;i++){
                              
                                
                                addTweet( users[u].userPhoto, users[u].userName,users[u].address,users[u].tweet1[i]);
                                
                                // key press logger
                                
                                
                                 }

                               

                              
   }else{    
            
             errorHandling.innerHTML = "the name is not present within our database or you may have entered the wrong information";
             var searchContainer =document.querySelector('.search-container')
             searchContainer.appendChild(errorHandling);
  }
   }
    
  })


  var header = document.querySelector('.header');
  header.innerHTML = `<div class = "left-arrow">
                     <img  class = "arrow" src ="arrow-left.png"></img></div>
                     <div class="user-header-title" >
                     <h2>${users[u].userName}<span><img src ="verified logo.png" class ="verified-logo"></img></span></h2>
                     <p>${users[u].tweets}</p></div>`

var coverPhoto = document.querySelector('.cover-photo');
  coverPhoto.innerHTML = `<img src = ${users[u].coverPhoto} width ="100%">`;



var  profileDetails = document.querySelector('.profile-details');
   profileDetails.innerHTML =`<div class = "profile-container">
                              <div class = "profile-block"><img src = ${users[u].userPhoto} class ="profile-photo"></img>
                              <h2 class ="profile-h2">${users[u].userName}<span><img src ="verified logo.png" class ="verified-logo"></img></span></h2>
                              <p class="address">${users[u].address}</p>
                             <div class = "date-container"> <div class = "calendar">
                             
                           
                             
                             </div>
                             <p class= "joined">Joined ${users[u].joinedDate}</p></div>
                              <p class ="followers"><span class = "color-change">${users[u].following}</span>  
                              Following <span class = "color-change margin-direction"> ${users[u].followers}</span> Followers</p>
                                  </div>
                              <div class = "btn-div"><button class = "btn">Following</button></div>
                             
                             </div>
                             <div class = "tweet-tabs">
                             <div class="tab tab-high-lighter high-lighter"><p class="p">Tweets</p></div>
                             <div class="tab"><p  class="p">Tweets & replies</p></div>
                             <div class="tab"><p  class="p">Media</p></div>
                             <div class="tab"><p  class="p">Likes</p></div>
                             </div>
                             
                              `
                             
                              var rowTabs = document.querySelectorAll('.tab');
                              var highLights = document.querySelectorAll('.high-light');
                           
                             for(var rT of rowTabs){                          // tab- highlight selection

                                 rT.addEventListener('click',function(e){

                                for(rT of rowTabs){

                                  rT.classList.remove('tab-high-lighter')
                                }
                                  e.currentTarget.classList.add('tab-high-lighter')
                               
                              for(var rT of rowTabs){

                                  rT.classList.remove('high-lighter')


                              }
                                 e.currentTarget.classList.add('high-lighter')
                                   
                              
                                 
                                     
                                 })

                                // highLights[3].classList.add('high-lighter')
                             }







};

function addTweet(userPhoto,userName,userAddress, userTweet) {
  
  var newTweet = document.createElement('div');
      newTweet.classList.add('tweets');

      var contentColumn = document.querySelector('.content-column');
          contentColumn.appendChild(newTweet)

 
   var date = new Date();

   var  dateStr =date.toDateString().substring(0,15);
                
   newTweet.innerHTML =`<div class ="tweet">
   <div class = "tweet-inner-container-1"><img src = "${userPhoto}" class ="tweet-profile-img"></img></div>
   <div class = "tweet-inner-container-2"> 
   <div class= "tweet-inner-container-a"><div class= "tweet-inner-container-a-1"><strong>${userName}</strong>
   <img src= "verified logo.png" class = "tweet-verfied-logo"></img><span class ="address-2"> ${userAddress} <span class= "date">${dateStr}</span>  <br><p class="tweet-comment">${userTweet} </p></div>
   <div class= "tweet-inner-container-a-2"></div><div class="circle-container " ><div class = "circle"></div><div class = "circle"></div><div  class = "circle"></div></div></div>   
   <div class="tweet-inner-container-b">
   <div class="tweet-inner-container-b-1"><img class="icon comment-icon" src="comment icon.png"></img><span class="icon-numbers">120.3K</span ></div> 
   <div class="tweet-inner-container-b-2"><img  class="icon" src="retweet icon.png">
   </img><span class="icon-numbers">120.3K</span ></div>
   <div class="tweet-inner-container-b-3"><div class="view-1"></div>
   <div class="view-2"></div><div class="view-3"></div><div class="view-4"><span  class="icon-numbers num">120.3K</span></div></div>
   <div class="tweet-inner-container-b-4"><img  class="icon" src="heart icon.png"</img><span  class="icon-numbers">120.3K</span></div><div class="tweet-inner-container-b-5"><img  class="icon" src="download icon.png"</img></div>
   </div></div>

    </div>`

   
   

}


function addTweetTextArea(userIdNum){


    var characterLength = document.querySelector('.character-length');
    var textarea = document.getElementById('text-area');
    var character = 250;
    
    
              var addComment = document.querySelector('.comment-icon');

                 

                       addComment.addEventListener('click', function(){
                         console.log(u)
                        document.querySelector('.add-comment').style.cssText ="display:block;"
    
                        textarea.addEventListener('keydown',function(e){
                         
                          console.log(e.key)
                      
                          
                           if(e.key == "Delete" || e.key == "Backspace" && character < 250){
                           
                              character++;
                            
                           }else{
                              character--;
                              
          
                           }
                           characterLength.innerHTML=`You have ${character} characters left`
                        })
                        
                     
          
          
                    
                   var okButton = document.querySelector('.ok-btn');
                       
                       okButton.addEventListener('click', function(){
          
                  
                  //adding text value to the tweet array      
                   
                   if(textarea.value.length > 0  && textarea.value.length < 251 && textarea.value != "*"){  // if ok is press then these thing should happen
                        users[userIdNum].tweet1.push(textarea.value);
                        textarea.value="";
      
                        
      
                        document.querySelector('.add-comment').style.cssText ="display:none;"
                        character = 250;
                       removeElementTweets();

                        
                        for(var i =0; i< users[u].tweet1.length;i++){
                              
                                
                          addTweet( users[u].userPhoto, users[u].userName,users[u].address,users[u].tweet1[i]);
                          
                        
                          
                          
                           }
                        
                        
                   }
          
          
                       })
          
                   var cancelButton = document.querySelector('.cancel-btn');
      
                      textarea.value="";
                      cancelButton.addEventListener('click',function(){
          
                      document.querySelector('.add-comment').style.cssText ="display:none;"
                      character = 250;
          
                      })



                       })


                  
                  
              
    


}


function removeElementTweets(){

  var remove = document.querySelectorAll('.tweets'); //  removing default tweets
  for(var r of remove)  {

      r.remove();
  }     


}