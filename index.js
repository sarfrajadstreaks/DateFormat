
 /*
            dateString="MM/DD/YYYY"--"MM-DD-YYYY"---"MM.DD.YYYY"
            you can controll to append leading zero by DD/D , MM/M
            you can also controll the Year digit ...YYYYY will give 2023 and YY will give 23
          
            dateString={
              weekday:"short/long" --- result - Fri/Friday,
              day="numeric"/"2-digit"---result - 1/01,
              month="short"/"long",-----result -Jan/January
              year:"numeric"/"2-digit",---result--2023/23
            }
            result: Friday, January 27, 2023/ Fri, Jan 27, 2023/ Jan 27, 2023....etc
         */

export const newDate=function (dateString){
  try {
    const date=dateString?(new Date( typeof dateString==="string"?dateString.replaceAll("-","/"):dateString)):new Date();
    this.get=function (){
      return date;
    }
    this.formatDate=function (formatString){
      if(!formatString){
        date.toLocaleDateString('en-US')
      }
      else if(typeof formatString==="string" && /[\/:|.-]/g.test(formatString)){
        let d=[];
        let delimiter=formatString.match(/[\/:|.-]/g)[0];
        let seq=formatString.split(delimiter);
        d[seq.indexOf('DD'||'D')]=date.toLocaleDateString('en-US',{day:seq.includes("DD")?"2-digit":"numeric"})
        d[seq.indexOf('MM'||'M')]=date.toLocaleDateString('en-US',{month:seq.includes("MM")?"2-digit":"numeric"})
        d[seq.indexOf('YYYY'||'YY')]=date.toLocaleDateString('en-US',{year:seq.includes("YY")?"2-digit":"numeric"})
        return d.join(delimiter)
      }
      else{
        /*
            dateString={
              weekday:"short/long" --- result - Fri/Friday,
              day="numeric"/"2-digit"---result - 1/01,
              month="short"/"long",-----result -Jan/January
              year:"numeric"/"2-digit",---result--2023/23
            }
            result: Friday, January 27, 2023/ Fri, Jan 27, 2023/ Jan 27, 2023....etc
         */
        return date.toLocaleDateString('en-US',{...formatString});
      }

    }
  }catch (e) {
    throw new Error("Object not initilized: use new operator to initialize")
  }

}
