// code your solution here
function superbowlWin(record){

    let result =  record.find((record) =>
   record.result === "W" ? record.year : undefined
   )
   return result!= undefined? result.year:undefined;
   }