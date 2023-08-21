//console.log("script")

const editableInput=document.querySelector(".editable")
//console.log(editableInput)

const placeHolder=document.querySelector(".placeHolder")
//console.log(placeHolder)

const counter = document.querySelector(".counter");
//console.log(counter)

const tweetButton = document.querySelector(".button");
//console.log(tweetButton)

const readonly = document.querySelector(".readonly");
//console.log(readonly)


//bizim veri aldığımız elemana tıklanıldığında rengi değiştirir
editableInput.onfocus=()=>{
    placeHolder.style.color="#c5ccd3";
};

//odaklanılan elemandan çıkıldığında tetiklenir
editableInput.addEventListener("blur",()=>{
    placeHolder.style.color="#98a5b1";
});

//klavye etkinliğini yakalamak içindir
editableInput.onkeypress=(e)=>{
   //console.log(e.target.innerText)

   placeHolder.style.display="none";
   validateTweet(e.target);
};

editableInput.onkeyup=(e)=>{
    //placeHolder.style.display='flex'
    validateTweet(e.target);
};

const validateTweet=(element)=>{
    let text;
    let tweetLimit=5;
    let tweetLength = element.innerText.length;
    //console.log(tweetLength)

    if(tweetLength <=0){
        placeHolder.style.display="block";
        counter.style.display = "none";
        tweetButton.classList.remove("active");
      } else {
        tweetButton.classList.add("active");
        counter.style.display = "block";
        placeHolder.style.display = "none";
      }
    
      counter.innerText = tweetLimit - tweetLength;
    
      if (tweetLength > tweetLimit) {
    
    
        let overText = element.innerText.substr(tweetLimit, tweetLength);
        //console.log(overText);
    
        overText = `<span class='overSpan'>${overText}</span>`;
        text = element.innerText.substr(0, tweetLimit) + overText;
        readonly.style.zIndex = "1";
    
        tweetButton.classList.remove("active");
    
        counter.style.color = "#e0245e";
      } else {
        counter.style.color = "#333";
      }
    
      readonly.innerHTML = text;
    };