/*************************** Create Database *****************************/
const productdb = (dbname,table)=>{

   const db =new Dexie(dbname);
   db.version(1).stores(table);
   db.open();
   /* const db = new Dexie('myDB');
    db.version(1).stores({
        friend : 'name,age'
    })
   */
    return db ;
}
/************************** Insert Function ******************************/
const bulkcreate = (dbtable,data) =>{//table name & information
    let flag = empty(data) ;
    if(flag){//not empty
        dbtable.bulkAdd([data]);//[{...,...,...}]
        console.log("data inserted successfully...!");
        
    }else{
        console.log("please provide data...!");
    }
    return flag ;
}
/************************* Check Textbox Validation ***********************/
const empty = object =>{
    var flag = false ;
    for(const value in object){
        if(object[value] != "" && object.hasOwnProperty(value)){
            let defoultfield = document.getElementById(`user${value}`);
            defoultfield.style.borderColor= "lightgray" ;
            flag = true ;
        }else{
            flag = false ;
            let emptyfield = document.getElementById(`user${value}`);
            console.log(emptyfield);
            emptyfield.style.borderColor= "red" ;
            return flag ;
        }
    }
    return flag ;
}
/******************** Get data from the database ***************************/
const getData = (dbtable,fn) => {
    let obj = {};
    dbtable.count((count) => {
        if(count){
            dbtable.each(table => {
                obj = Sortobj(table);
                fn(obj);
                // console.log(obj);
            })
        }else{
            fn(0);
        }
    })
}
/******************************** Short Obj **********************************/
const Sortobj = sortobj =>{
    let obj = {} ;
    obj ={
        id : sortobj.id ,
        firstname : sortobj.firstname ,
        lastname : sortobj.lastname ,
        phonenumber : sortobj.phonenumber ,
        email : sortobj.email 
    }
    return obj ;
}
/*************************** Ceate Dynamic element *****************************/
const createEle = (tagname , appendTo , fn) =>{
   const element = document.createElement(tagname);
   if(appendTo){
       appendTo.appendChild(element);
   }
   if(fn)fn(element);
}
/*******************************************************************************/
export default productdb;
export{
    bulkcreate,
    getData,
    createEle
}