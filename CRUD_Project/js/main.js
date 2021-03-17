import productdb,{
    bulkcreate,
    getData ,
    createEle
}from './module.js' ;
/**************************************************************************/
window.onload = () =>{
  textID(userid);
}
/*************************** Create Database ******************************/
let db = productdb('products',{
    products : '++id,firstname,lastname,email,phonenumber'
});
/**************************** Input Tags *********************************/
const userid = document.getElementById("userid");
const userfirstname = document.getElementById("userfirstname");
const userlastname = document.getElementById("userlastname");
const useremail = document.getElementById("useremail");
const userphonenumber = document.getElementById("userphonenumber");
/**************************** button tags *********************************/
const btncreate = document.getElementById("btn-create");
const btnread = document.getElementById("btn-read");
const btncupdate = document.getElementById("btn-update");
const btndelete = document.getElementById("btn-delete");
/******************* Insert value using create button *********************/
btncreate.onclick = () => {
   let flag = bulkcreate(db.products , {
       firstname : userfirstname.value ,
       lastname : userlastname.value ,
       phonenumber : userphonenumber.value,
       email : useremail.value 
       
   });
   console.log(flag);
   if(flag){
    userfirstname.value="";
    userlastname.value="";
    useremail.value="";
    userphonenumber.value="";
   }
   getData(db.products,(data)=>{
      userid.value = data.id +1 || 1;
    });
    table();
}
/********************* UPDATE value using update button  ************************/
btncupdate.onclick = () =>{
    const id = parseInt(userid.value|| 0) ;
    if(id){
        db.products.update(id , {
            firstname : userfirstname.value ,
            lastname : userlastname.value ,
            email : useremail.value ,
            phonenumber : userphonenumber.value
        }).then((updated)=>{
            console.log(`updated  successfully ...! `);
        })
    }
    table();
}
/*************************** READ value using read button ***********************/
btnread.onclick = table ;
function table(){
    const tbody = document.getElementById("tbody"); 
    while(tbody.hasChildNodes()){
        tbody.removeChild(tbody.firstChild);
    }

    getData(db.products , (data)=>{
         if(data){
             createEle("tr" , tbody  , tr =>{
                for(const value in data){
                   createEle("td", tr , td =>{
                        td.textContent = data[value];
                   });
                }
                createEle("td" , tr , td =>{
                    createEle("i" , td , i =>{
                        i.setAttribute('data-id' , data.id);
                        i.className += "fas fa-edit btnedit" ;
                        i.onclick = aditbtn ;                 
                    })
                })
                createEle("td" , tr , td =>{
                    createEle("i" , td , i =>{
                        i.setAttribute('data-id' , data.id);
                        i.className += "fas fa-trash-alt btndelete" ;
                        i.onclick = deletebtn ;
                    })
                })
             });
             let notfound = document.getElementById("notfound");
             notfound.textContent = "";
         }else{
             let notfound = document.getElementById("notfound");
             notfound.textContent = "no records found in the database ...! ";
             notfound.className += "d-flex justify-content-center";
         }
    });
  
}
/************************** DELETE value using delete button *****************/
btndelete.onclick = () =>{
    db.delete();
    db = productdb('products',{
        products : '++id,firstname,lastname,email,phonenumber'
    });
    db.open();
    table();
    textID(userid);
}
/****************************************************************************/
function textID(textboxid){
    getData(db.products , data =>{
        textboxid.value = data.id +1 || 1 ;
    })
}
/***************************************************************************/
function aditbtn(event){
    let id = parseInt(event.target.dataset.id) ;
    db.products.get(id , data =>{
        userid.value = data.id || 0 ;
        userfirstname.value = data.firstname || "" ;
        userlastname.value = data.lastname || "" ;
        useremail.value = data.email || "" ;
        userphonenumber.value = data.phonenumber || "" ;
    })
}

function deletebtn(event){
    let id = parseInt(event.target.dataset.id) ;
    db.products.delete(id);
    table();
}
/****************************************************************************/
