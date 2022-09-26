// assining elements 

let setIcon=document.querySelector('.set-icon')
let myOptions=document.querySelector('.options-bar')
let myMessages=document.querySelector('.my-messages')
let back= document.querySelector('.back')
let leftArr=document.querySelector('.leftArr')
let rightArr=document.querySelector('.rightArr')
let slider=document.querySelector('.slider')
let wraper = document.querySelector('.wraper')
let msgReciever;
let theAnimal



let toSign = document.querySelector('#to-sign')
let logIn = document.querySelector('.log-in')
let signUp = document.querySelector('.sign-up')
let signOut = document.querySelector('.exit')
let firstSection=document.querySelector('.one')
let secondSection = document.querySelector('.two')
let contact=document.querySelector('.contact')
let layer=document.querySelector('.lay')


let animForm=document.querySelector('.anim-form')
let registerAnimal=document.querySelector('.register-animal')
let signbtn=document.querySelector('#signup')
let logo = document.querySelector('.user-logo')
let congrats=document.querySelector('.congrats')
let messagesWraper=document.querySelector('.messages-wraper')
let mainUser;
let backBtn =document.querySelector('#back')
let showAnimals = document.querySelector('.show-animals')

let successWraper=document.querySelector('.success-wraper')
let successStorys=document.querySelector('.success-storys')
let msgsNumber=document.querySelector('#msgs-number')
let myFilter=document.querySelector('.the-filter')
let searchIcon=document.querySelector('.search-icon')


let catFilter=document.querySelector('#f-category')
let typeFilter=document.querySelector('#f-type')
let colorFilter=document.querySelector('#f-color')

let filterInputs =document.querySelectorAll('.the-filter input[type="text"]')
let stateFilter=[...document.querySelectorAll('.f-state input')]

// events ****************************************************************************************************
// show filter

searchIcon.addEventListener('click',()=>{
    myFilter.classList.toggle('hide-filter')
})
// on domContentLoad

document.addEventListener('DOMContentLoaded',()=>{
    let myUsers=getArray('myUsers')
    if(myUsers.find((user)=>user.signIn==true)){
    mainUser=myUsers.find((user)=>user.signIn==true)
    setPage(mainUser)
    hideLayElement(successStorys)
    }

})






// show bar
setIcon.addEventListener('click',()=>{
    if(myOptions.classList.contains('bar-rotate'))
    {
        myOptions.classList.remove('bar-rotate')
        let myMessages=getArray('myMessages')
        readData(myMessages,"messages")

    }
    myOptions.classList.toggle('bar-hide')
   


// rotate bar

myMessages.addEventListener('click', ()=> {
    myOptions.classList.add('bar-rotate')

    setIcon.classList.remove('notification')

    let Messages=getArray('myMessages')



    Messages=Messages.map((msg)=>{
        if(msg.reciever==mainUser.userID)
        {
            msg.isRead=true;
            return msg
        }
        else
        return msg
            })
            setStorage('myMessages',Messages)
           
        
    })
    
})


// unrotate bar
back.addEventListener('click',()=>{
    myOptions.classList.remove('bar-rotate')
    let myMessages=getArray('myMessages')
        readData(myMessages,"messages")
})





// to sign 

toSign.addEventListener('click', ()=>{
    secToggle(signUp,logIn)

})



// sign out 
signOut.addEventListener('click',(e)=>{
    if(myOptions.classList.contains('bar-rotate'))
    {
        myOptions.classList.remove('bar-rotate')

    }
    myOptions.classList.add('bar-hide')

    myFilter.classList.add('hide-filter')
    
    document.querySelector('.lay-blur').classList.remove('disable')
    document.querySelector('.lay-blur').classList.add('show-self')
    secondSection.classList.add('blur')
   



    document.querySelector('.log-out').addEventListener('click',()=> {
        hideAny(secondSection);
        showAny(firstSection);
        let myUsers=getArray('myUsers')
      
        let inDex=   myUsers?.findIndex((user)=>user.userID===mainUser.userID)
        myUsers[inDex].signIn=false;
        setStorage('myUsers',myUsers)
       
        document.querySelector('.lay-blur').classList.remove('show-self')
        document.querySelector('.lay-blur').classList.add('vanish')
        setTimeout(() => {
            document.querySelector('.lay-blur').classList.add('disable')
            document.querySelector('.lay-blur').classList.remove('vanish')
            secondSection.classList.remove('blur')
           
            
        }, 300);
       

    })

    document.addEventListener('click',(e)=>
{
    if(e.target.classList.contains('cancel'))
    {
        secondSection.classList.remove('blur')
      
        document.querySelector('.lay-blur').classList.remove('show-self')
        document.querySelector('.lay-blur').classList.add('vanish')
     
     setTimeout(() => {
        document.querySelector('.lay-blur').classList.add('disable')
        document.querySelector('.lay-blur').classList.remove('vanish')
       
      
     }, 600);
       
      
    }
})


 

}
)


// contact - us 

document.addEventListener('click',(e)=>{
if(e.target.classList.contains('contact-us'))
{
    msgReciever=e.target.getAttribute('data-id')
    theAnimal=e.target.getAttribute('data-anim-id')
    let recieverName=document.querySelectorAll('.reciever-name')

    let recieverContact=document.querySelector('#reciever-contact')
    let myUsers=getArray('myUsers')
    let theReciever=myUsers.find((user)=>user.userID==msgReciever)
 recieverName.forEach((ele)=>ele.innerText=` ${theReciever.gender=="male"? "mr" : "ms"} ${theReciever.username}`)
  recieverContact.innerText=`${theReciever.contact}`

   
   
showLayElement(contact)
}
})



document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('dont-track'))
    hideLayElement(contact)
})



document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('track')){
        
      let animalCard=  document.querySelector(`[data-anim-id="${theAnimal}"]`)
      animalCard.innerText="message was sent"
      animalCard.parentElement.style.pointerEvents='none'
     
   let myUsers= getArray('myUsers')
   
   
 let message= {
    messageID:Date.now(),
    sender:mainUser.userID,
    reciever:msgReciever,
    animal:theAnimal,
    isApproved:false,
    isRead:false,
    type:"ask"
 } 
 let myMessages=getArray('myMessages')
 myMessages.push(message)
 setStorage('myMessages',myMessages)

putMessage('the message was sent successfully')
    hideLayElement(contact)
}
   
})




//register an animal 

registerAnimal.addEventListener('click',()=> {
showLayElement(animForm)
document.querySelector('#cancel').addEventListener('click',()=>{
    hideLayElement(animForm)
})
})


document.querySelector('#register').addEventListener('click',()=>{
    let myAnimals=getArray('myAnimals')
   
let animCat=document.querySelector('#anim-category')
let animType=document.querySelector('#anim-type')
let animColor=document.querySelector('#anim-color')
let animPhoto=document.querySelector('#anim-photo')
let animState=document.querySelector('.anim-form input[type="radio"]:checked')

animCat.onkeyup=()=>{animCat.classList.remove('invalid')}
animType.onkeyup=()=>{animType.classList.remove('invalid')}
animColor.onkeyup=()=>{animColor.classList.remove('invalid')}
animPhoto.onkeyup=()=>{animPhoto.classList.remove('invalid')}
if(animCat.value==='')
{
    animCat.classList.add('invalid')
}
if(animType.value==='')
{
    animType.classList.add('invalid')
}
if(animColor.value==='')
{
    animColor.classList.add('invalid')
}
if(animPhoto.value==='')
{
    animPhoto.classList.add('invalid')
}
if(animCat.value!=='' && animType.value !==''  && animColor.value!==''  && animPhoto.value!=='')
{

let animal = {

    animalcategory:animCat.value,
    animaltype:animType.value,
    animalcolor:animColor.value,
    animalphoto:animPhoto.value,
    animalstate:animState.value,
    animalID:Date.now(),
    user:mainUser.userID,
}
inputsReset('.anim-form')

myAnimals.push(animal)

setStorage("myAnimals",myAnimals)


    hideLayElement(animForm)
    putMessage('A new animal is registered')
    readData(myAnimals,'animals')
    document.querySelector('.no-data')? document.querySelector('.no-data').remove() : null
}
})








//signUp
signbtn.addEventListener('click',()=> {


    let myUsers=getArray('myUsers')
   


    let userName=document.querySelector('#name')
    let userPassword=document.querySelector('#password-input')
    let userPassApprov=document.querySelector('#password-approvement')
    let userGender=document.querySelector('input[type="radio"]:checked')
    let userInfo=document.querySelector('#contact-info')
    userName.onkeyup=()=>userName.classList.remove('invalid')
    userPassword.onkeyup=()=>userPassword.classList.remove('invalid')
    userPassApprov.onkeyup=()=>userPassApprov.classList.remove('invalid')
    userGender.onkeyup=()=>userGender.classList.remove('invalid')
    userInfo.onkeyup=()=>userInfo.classList.remove('invalid')
    let validName,validPassword, validApprove,validInfo
// check username

if(myUsers.length!=0)
{

 
   
if( myUsers.find((ele)=> ele.username===userName.value

    ))
{
    userName.nextElementSibling.innerText='this name  already exists'
    userName.classList.add('invalid')}





   else if(userName.value==='')
    {
        userName.nextElementSibling.innerText='enter a valid name'
        userName.classList.add("invalid")
    }

    else { validName = true}
    
 }
else {
    if(userName.value==='')
    {
        userName.nextElementSibling.innerText='enter a valid name'
        userName.classList.add("invalid")
    }

    else { validName = true}
}

if(userPassword.value.length<5 || userPassword.value.length>10)
{
userPassword.classList.add('invalid')
}

else
{ validPassword=true}


if(userPassApprov.value!==userPassword.value)
userPassApprov.classList.add('invalid')

else { validApprove=true}

let eReg= /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let tReg=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
if(!eReg.test(userInfo.value) && !tReg.test(userInfo.value))
userInfo.classList.add('invalid')
else {validInfo=true}

if(validName && validPassword && validApprove && validInfo)
{
    const theUser = {
userID :  Date.now(),
username: userName.value,
password:userPassword.value,
gender:userGender.value,
contact:userInfo.value ??'any',
signIn:true,



    }

    myUsers.push(theUser)
   
    inputsReset('.sign-up')
    
    setStorage('myUsers',myUsers)
    mainUser=theUser
   
   setPage(mainUser)
   secToggle(signUp,logIn)
   
}
})

// back
backBtn.addEventListener('click',()=>{
    secToggle(signUp,logIn)
})



// log in 

let logBtn=document.querySelector('#log')
let userLog = document.querySelector('#username')
let passwordLog = document.querySelector('#password')
userLog.onkeyup=()=>{
    userLog.classList.remove('invalid')
    passwordLog.onkeyup=()=>{
        passwordLog.classList.remove('invalid')
    }
}
logBtn.addEventListener('click',()=>
{
let myUsers=getArray('myUsers')
let user=myUsers.find((ele)=>ele.username==userLog.value)
if(!user)
{
userLog.classList.add('invalid')
}

else 
{
    if(passwordLog.value!=user.password)
    {
       
        passwordLog.classList.add('invalid')
    }

    else {

        mainUser=user
       
     let inDex=   myUsers.findIndex((user)=>user.userID===mainUser.userID)
myUsers[inDex].signIn=true;
setStorage('myUsers',myUsers)

        setPage(mainUser)
        inputsReset('.log-in')
    }
}
}
)



// approve amessage 
document.addEventListener('click',(e)=> {
if (e.target.classList.contains('request'))
{
    e.target.innerText='Approved'
    e.target.parentElement.classList.add('read')
    let msgId=e.target.getAttribute('data-msg')
  
    let senderID=e.target.dataset.id;
    let AnimalId=e.target.getAttribute('data-anim-id')
    
    let myMessages=getArray('myMessages')
   myMessages=myMessages.map((message)=>{
        if(message.messageID==msgId){
        message.isApproved=true
        return message }
        else 
        {
            return message
        }


    })


    let message= {
        messageID:e.target.getAttribute('data-msg'),
        sender:mainUser.userID,
        reciever:senderID,
        animal:AnimalId,
        isRead:false,
        isApproved:false,
        type:"approved"
     } 
     myMessages.push(message)
     setStorage('myMessages',myMessages)
   
}
})

// not the animal



document.addEventListener('click',(e)=>{
if (e.target.classList.contains('not-animal'))
{
    let msgID = e.target.getAttribute('data-msg')
    let myMessages=getArray('myMessages')
    myMessages=myMessages.filter(ele=>ele.messageID!=msgID)
    setStorage('myMessages',myMessages)
    
  e.target.parentElement.remove()
    let myAnimals=getArray('myAnimals')
    readData(myAnimals,'animals')
}
})


// approved Animal 

document.addEventListener('click',(e)=>{
    if(e.target.classList.contains('approved'))
    {
    let animID=e.target.getAttribute('data-anim-id')
    let msgID=e.target.getAttribute('data-msg')
    let personID = e.target.getAttribute('data-id')
    let myUsers=getArray('myUsers')
    let person=myUsers.find((user)=>user.userID=personID)
    let personName = person.username
    let gender=person.gender;
    let myMessages=getArray('myMessages')
    let myAnimals=getArray('myAnimals')
    
    let theAnimal={...myAnimals.find((animal)=>animal.animalID==animID),approvalName:mainUser.username}
    
    
    let theState=theAnimal.animalstate;
 
    let foundAnimals=getArray('foundAnimals')
    foundAnimals.push(theAnimal)
    setStorage("foundAnimals",foundAnimals)
   
    toSend=myMessages.filter((msg)=>msg.animal==animID&&msg.type=='ask'&&msg.sender!=mainUser.userID )
    toSend.forEach((msg)=>{
        let message={
            messageID:animID,
            sender:mainUser.userID,
            reciever:msg.sender,
            animal:'',
            isApproved:false,
            isRead:false,
            type:"found",
            animState:theState,
            person:personName,
            gender:gender,
            ID:Date.now()

            
        }
        myMessages.push(message)
        setStorage("myMessages",myMessages)
    })
   
    myMessages=myMessages.filter((msg)=>msg.animal!=animID)
    
    setStorage('myMessages',myMessages)
    e.target.parentElement.remove()
    let foundImg=document.querySelector('#foundImg')
    foundImg.src=`images/${theAnimal.animalphoto}.jpeg`;
    myAnimals=myAnimals.filter((anim)=>anim.animalID!=animID)
   
    setStorage('myAnimals',myAnimals)
    readData(myAnimals,'animals')
  

    showLayElement(congrats)
   
   document.querySelector('#foundP').innerHTML=`congratulations!! ${theState=='found'?` we congratulate you ${mainUser.gender=='male'?'mr':'ms'} ${mainUser.username} that you have found your animal  and wish you happy days . <br>This status is added to the success stories of our site` : `we thank you very much ${mainUser.gender=='male'?'mr':'ms'} ${mainUser.username} for your help. <br> This status is added to the success stories of our site. `}`
    
    
    }
})



// close found 




document.querySelector('.btn-found').addEventListener('click',()=>{
    hideLayElement(congrats)
})


// show Success

document.querySelector('.show-animals').addEventListener('click',()=>{
    showLayElement(document.querySelector('.success-storys'))
    let foundAnimals=getArray('foundAnimals')
   
    readData(foundAnimals,'success')
})

// close success

document.querySelector('#close-btn').addEventListener('click',()=>{
    hideLayElement(document.querySelector('.success-storys'))
})


//see results 
addEventListener('click',(e)=>{
    if (e.target.id==='see'){
   
    let msgID = e.target.getAttribute('data-msg')
    let msgAnim=e.target.getAttribute('data-id')
    let myMessages=getArray('myMessages')
   
        
 let msgIndex=myMessages.findIndex((msg)=>msg.ID==msgID&&msg.reciever==mainUser.userID)

 myMessages.splice(msgIndex,1)
 setStorage('myMessages',myMessages)

 e.target.parentElement.remove()
 let foundAnimals=getArray('foundAnimals')
 readData(foundAnimals,'success')
 showLayElement(document.querySelector('.success-storys'))
 let successAnim=document.querySelector(`.success[data-id='${msgAnim}']`)
 
 setTimeout(() => {
    successAnim.classList.add('glow')
   
    successAnim.scrollIntoView({block:'center',behavior:"smooth"})
 }, 300);
 successAnim.addEventListener('mousemove',()=>{
    successAnim.classList.remove('glow')
 })


    }
   
})




//filter
stateOption(stateFilter)
filterInputs.forEach(element => {
    element.addEventListener('keyup',()=>{
        
        
    

        let condition; 
        let myAnimals=getArray('myAnimals')
        let state= document.querySelector('.active')
         
        let filteredArray=myAnimals.filter((anim)=>{ 
            condition=''  
            if(catFilter.value){
               
                if(!condition){
                condition=`anim.animalcategory==catFilter.value`
             
            }
                else{
                    condition=`${condition}&&anim.animalcategory==catFilter.value`
                   
                }
            }
            if(typeFilter.value){
               
                if(!condition){
                condition=`anim.animaltype==typeFilter.value`
                

                }
                else {
                    condition=`${condition}&&anim.animaltype==typeFilter.value`
                }
            }
            if(colorFilter.value){
                if(!condition){
                    
                
                condition=`anim.animalcolor==colorFilter.value`
              
                }
                else {
                    condition= `${condition}&&anim.animalcolor==colorFilter.value`
                }
            }
            if(state?.value){
                if(!condition)
                condition=`anim.animalstate==state.value`
                else {
                    condition=`${condition}&&anim.animalstate==state.value`
                }
            }  
           
          
          console.log(condition)
            return (eval(condition))
            // return (anim.animalcategory==catFilter.value&&anim.animaltype==typeFilter.value&&anim.animalcolor==colorFilter.value&&anim.animalstate==state.value)
           
          
        })
        readData(filteredArray,'animals')
   
        }
      
    )
});

// reset the filter     
let reset=document.querySelector('#reset')
reset.addEventListener('click',()=> {
    let myAnimals=getArray('myAnimals')
    readData(myAnimals,'animals')

typeFilter.value=''
   catFilter.value='';
  
   colorFilter.value='';
   let activeRadio =document.querySelector('.active')
  activeRadio?.classList.remove('active')


   

})
//functions ********************************************************************************************************


function showLayElement(el){
    layer.classList.remove('disable')
    layer.classList.add('show-self')
    el.classList.remove('disable')
}

function showAny (el) {
    el.classList.remove('disable')
    el.classList.add('show-self')
}

function hideAny(el) {
    el.classList.add('vanish')
    setTimeout(() => {
       el.classList.remove('vanish')
       el.classList.remove('show-self')
       el.classList.add('disable')
     
    }, 300);
}



function hideLayElement(el){

     layer.classList.add('vanish')
     setTimeout(() => {
        layer.classList.remove('vanish')
        layer.classList.remove('show-self')
        layer.classList.add('disable')
        el.classList.add('disable')
     }, 300);
}


function putMessage(message){
    let sentMessage=document.createElement('p')
    sentMessage.appendChild(document.createTextNode(message))
    sentMessage.classList.add('sent-message','show-self')
    document.body.appendChild(sentMessage)

    setTimeout(() => {
        sentMessage.classList.add('vanish')
        sentMessage.onanimationend=()=>sentMessage.remove()
    }, 2500);
}

function getArray(name){
    return localStorage.getItem(name)? JSON.parse(localStorage.getItem(name)) : [];
}

function setStorage (name,array){

    localStorage.setItem(name,JSON.stringify(array))
}

function inputsReset (a) {
let textInputs = document.querySelectorAll(`${a} input[type="text"]`)
textInputs.forEach((input)=>{
input.value='';
})

let passwordsInputs = document.querySelectorAll(`${a} input[type="password"]`)
passwordsInputs.forEach((input)=>{
    input.value='';
    })

   
   
    
}

function setPage(user) {
    putMessage(`welcome ${user.gender=="male"? "mr" : "ms"}  ${user.username}`)

    showAny(secondSection)
    hideAny(firstSection)
    logo.firstElementChild.innerText=`hello   ${user.gender=="male"? "mr" : "ms"}`
   
 
    logo.children[1].innerText=`${user.username}`
    let myAnimals=getArray("myAnimals")
    let myMessages=getArray('myMessages')
    readData(myAnimals,'animals')
    readData(myMessages,"messages")
    document.querySelector('.new-msg')? setIcon.classList.add('notification') : setIcon.classList.remove('notification')

}

function secToggle(a,b){

    a.classList.toggle('disappear')
    b.classList.toggle('disappear')
}


function readData(array,section) {


    if (section==="animals")
    if(array.length!=0)
    {
        
if(document.querySelector('.no-animals'))
document.querySelector('.no-animals').remove();


        
        leftArr.classList.remove('btn-disable')
        rightArr.classList.remove('btn-disable')
let data='';
array.forEach((animal)=>{
   
    data+= `
    <div class="cart">
    <div class="img">
        <img src="images/${animal.animalphoto}.jpeg" alt="no photo">
    </div>
    <div class="cart-body">
        <div class="info">
            <div> <span>category</span> <span>${animal.animalcategory}</span> </div>
              <div> <span>type</span> <span>${animal.animaltype}</span></div>
              <div><span>color</span> <span>${animal.animalcolor}</span></div>
              <div><span>state</span> <span>${animal.animalstate}</span></div>
          </div>
          `
          if(animal.user=== mainUser.userID){
          data+= `<div class="contact-us btn-disable" >
              <button  class="btn contact-us">registerd by You</button>
          </div>
    </div>
</div>`
          }
          else {
            let myMessages=getArray('myMessages')
          
          let result=  myMessages.find((msg)=>msg.animal==animal.animalID && msg.sender==mainUser.userID)
         
      
            data+=`<div class="contact-us ${result? "btn-disable" : null} " >
            <button  class="btn contact-us " data-id="${animal.user}" data-anim-id="${animal.animalID}">${result? "message was sent" : "contact us"}</button>
        </div>
  </div>
</div>`
          }
    
    
    
})

slider.innerHTML=data;
let card = document.querySelectorAll('.cart')
let maxNum=card.length

let size=card[0].clientWidth;



//sliding bar
leftArr.addEventListener('click', ()=> {
   
       
        
        wraper.scrollBy({top:0,
        left:-size-10,
    behavior:"smooth"})
        
    })


rightArr.addEventListener('click', ()=> {
   
   
    
    
        
        
     
        
       wraper.scrollBy({top:0,
            left:size+10,
        behavior:"smooth"})
        
       
    
    
})


    }

    else {
if(document.querySelector('.no-animals'))
        {
            return}
        else{
            
            slider.innerHTML=``
       let noAnimal= document.createElement('p')
       noAnimal.appendChild(document.createTextNode('there are no registered animals '))
       noAnimal.classList.add('no-animals')
       wraper.appendChild(noAnimal)
       leftArr.classList.add('btn-disable')
       rightArr.classList.add('btn-disable')
    }
    }

    else if (section=='messages')
    {
        let myArray=array.filter((ele)=>ele.reciever==mainUser.userID)
        if(myArray.length!=0)
    {
       
   
        let messagesContent=``
let newMessage=0;

        myArray.reverse().forEach((message)=>{
            let myUsers=getArray('myUsers')
            let sender=myUsers.find((user)=>user.userID==message.sender)
           if (message.isRead===false)
           newMessage++;
           let myAnimals=getArray('myAnimals')
           theID=message.animal
         
           let animal=myAnimals.find((animal)=>animal.animalID==theID)
         
if(message.type==="ask")
{
  
messagesContent+=`

<div class="message ${message.isApproved===true ? "read" : null } ${message.isRead? 'seen' : 'new-msg'}"><p>you have recieved a message form ${sender.gender=="male"? "Mr " : "Ms"} ${sender.username} asking for a meeting. </br> ${animal.animalstate=='lost'? `${sender.gender=="male"? "Mr " : "Ms"} ${sender.username}  might have informations about your animal` : `the animal you registered maight be ${sender.gender=='male'?'his' : 'hers'}`}</p>
                    <button class="request" data-id = "${sender.userID}"  data-anim-id="${message.animal}" data-msg="${message.messageID}">Approve</button></div>`
}
else if (message.type==="approved")
{
messagesContent+= `
<div class="message  ${message.isRead? 'seen' : 'new-msg'}"><p>you have recieved an approvment form ${sender.gender=="male"? "Mr " : "Ms"} ${sender.username} .<br>
after the meeting please let us know if it was  ${animal.animalstate=='lost'?`${sender.gender=='male'?'his' : 'her'}` : 'your'} animal</p>
                    <button class="approved" data-id = "${sender.userID}"  data-anim-id="${message.animal}" data-msg="${message.messageID}">Was the Animal</button>
                    <button class="not-animal" data-id = "${sender.userID}"  data-anim-id="${message.animal}" data-msg="${message.messageID}">was not the Anmimal</button></div>

`
}

else if (message.type==="found")
{
    messagesContent+=`
    <div class="message ${message.isRead? 'seen' : 'new-msg'}"><p>an Animal in which you were intersted was found .<br> wich was registerd by   ${message.gender=="male"? "mr " : "ms"} ${message.person} <br>you maight be interrested to see the results.<br>
    ${message.animState=='lost'? 'we appreciate your desire for help.' : ' we hope that you will find your animal soon'}</p>
    <button id="see" data-id="${message.messageID}"  data-msg=${message.ID}>see results</button></div>



    `
}
messagesWraper.innerHTML=messagesContent;




if(newMessage!=0)
{
msgsNumber.style.backgroundColor='green'
msgsNumber.textContent=`${newMessage} new ${newMessage==1? 'message' : 'messages'}`

}
else {
    msgsNumber.style.backgroundColor='red'
    msgsNumber.textContent='no new messages'

}



        })
    }

    else {
        messagesWraper.innerHTML=``
        let noMessage= document.createElement('p')
       noMessage.appendChild(document.createTextNode('you have no messages'))
       noMessage.classList.add('no-data')
       messagesWraper.appendChild(noMessage)
       msgsNumber.style.backgroundColor='red'
            msgsNumber.textContent='no new messages'
     
       
    
    }


}
else if (section=="success")
{
if(array.length!=0)
{

    let content=''
    array.forEach(ele=>{
        let myUsers=getArray('myUsers')
        let user=myUsers.find((user)=>user.userID==ele.user)
        let userName=user.username
        content += `
        <div class="success" data-id="${ele. animalID}">
    <img src="images/${ele.animalphoto}.jpeg" alt="">
    <div class="content-success">
        <div> <span>category</span> <span>${ele.animalcategory}</span> </div>
        <div> <span>type</span> <span>${ele.animaltype}</span></div>
        <div><span>color</span> <span>${ele.animalcolor}</span></div>
        ${ele.animalstate=="found"? `<div>found by ${userName} and deliverd to his owner ${ele.approvalName}</div>`: `<div>found by ${ele.approvalName} and deliverd to his owner ${userName}</div>`}
    </div>
    </div>
        `  
    }
    
    )
    

    successWraper.innerHTML=content;
    
}


else {
    successWraper.innerText=''
    let noFoundAnimal= document.createElement('p')
       noFoundAnimal.appendChild(document.createTextNode('there are no found animals until this moment'))
       noFoundAnimal.classList.add('no-data-success')
      successWraper.appendChild(noFoundAnimal)
}
}
}

function stateOption(el){
    el.forEach((el)=>{
        el.addEventListener('click',()=>{
           if(document.querySelector('.active')) 
            document.querySelector('.active').classList.remove('active')
            el.classList.add('active')
            let myAnimals=getArray('myAnimals')
            let state= document.querySelector('.active')
            let condition; 
            let filteredArray=myAnimals.filter((anim)=>{   
                condition=''  
                if(catFilter.value){
                   
                    if(!condition){
                    condition=`anim.animalcategory==catFilter.value`
                 
                }
                    else{
                        condition=`${condition}&&anim.animalcategory==catFilter.value`
                       
                    }
                }
                if(typeFilter.value){
                   
                    if(!condition){
                    condition=`anim.animaltype==typeFilter.value`
                    
    
                    }
                    else {
                        condition=`${condition}&&anim.animaltype==typeFilter.value`
                    }
                }
                if(colorFilter.value){
                    if(!condition){
                        
                    
                    condition=`anim.animalcolor==colorFilter.value`
                  
                    }
                    else {
                        condition= `${condition}&&anim.animalcolor==colorFilter.value`
                    }
                }
                if(state?.value){
                    if(!condition)
                    condition=`anim.animalstate==state.value`
                    else {
                        condition=`${condition}&&anim.animalstate==state.value`
                    }
                }  
               
              
              console.log(condition)
                return (eval(condition))
                // return (anim.animalcategory==catFilter.value&&anim.animaltype==typeFilter.value&&anim.animalcolor==colorFilter.value&&anim.animalstate==state.value)
               
              
            })
            readData(filteredArray,'animals')
            
            

        })
    })

}