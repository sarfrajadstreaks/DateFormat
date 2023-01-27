
 /*
       
 */

export const newDate=function (dateString){
 let date;
  try {
   if(dateString){
     date=new Date( typeof dateString==="string"?dateString.replaceAll("-","/"):dateString
    }else{
     date=new Date()          
    }
    this.get=function (){
      return date;
    }
    this.formatDate=function (formatString){
        let userDate=new Date(date);
        let userFormate=formateString.toLowerCase();
        let expectedFormate=userFormate.split(/[(),\s\/:|.-]/g)  
        let stringDay=expectedFormate.find((ele)=>ele.match(/day\d|day/g))  
        let stringDayLen=Number(stringDay?.match(/\d/g))
        let weekday=userDate.toLocaleDateString('en-US',{weekday:"long"}).substr(0,stringDayLen?stringDayLen:undefined)
        let numberDay=expectedFormate.find((ele)=>ele.match(/d(?!\S)|dd/g))
        let Day=userDate.toLocaleDateString('en-US',{day:numberDay?.length==2?"2-digit":"numeric"})
        let stringMonth=expectedFormate.find((ele)=>ele.match(/mon\d|mon/g))
        let stringMonthLen=Number(stringMonth?.match(/\d/g))
        let monthString=userDate.toLocaleDateString('en-US',{month:"long"}).substr(0,stringMonthLen?stringMonthLen:undefined)
        let numberMonth=expectedFormate.find((ele)=>ele.match(/m(?!\S)|mm/g))
        let Month=userDate.toLocaleDateString('en-US',{month:numberMonth?.length==2?"2-digit":"numeric"})
        let numberYear=expectedFormate.find((ele)=>ele.match(/yyyy|yy/g))
        let Year=userDate.toLocaleDateString('en-US',{year:numberYear?.length==2?"2-digit":"numeric"})
    
        userFormate=stringDay?userFormate.replace(stringDay,weekday):userFormate
        userFormate=numberDay?userFormate.replace(numberDay,Day):userFormate
        userFormate=stringMonth?userFormate.replace(stringMonth,monthString):userFormate
        userFormate=numberMonth?userFormate.replace(numberMonth,Month):userFormate
        userFormate=numberYear?userFormate.replace(numberYear,Year):userFormate
        return userFormate;
    }
  }catch (e) {
    throw new Error("Object not initilized: use new operator to initialize")
  }

}
