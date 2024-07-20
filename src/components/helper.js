export function checkWin(boardId,id,currentPlayer){
     let arr=[...boardId];
     arr[id]=currentPlayer;
     const check=[
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12],
     ]

     for(let i=0;i<check.length;i++){
        const [c1,c2,c3,c4]= check[i];
        if(arr[c1]>0 && arr[c1]===arr[c2] && arr[c2]===arr[c3] && arr[c3]===arr[c4]){
            return true;
        }
        
     }
     return false;
}

export function isDraw(boardId,id,currentPlayer){
   let arr=[...boardId];
   arr[id]=currentPlayer;

   let count= arr.reduce((total,currvalue)=> total + (currvalue===0), 0);
   console.log(count);

   return count===0;
}

const randomMove=(boardId)=>{
   let validMoves=[];
   for(let i=0;i<boardId.length;i++){
      if(boardId[i]===0) validMoves.push(i);
   }
   
   let rndm= Math.floor(Math.random() * validMoves.length);
   
   return validMoves[rndm];
}

const getPosition=(boardId,series)=>{
   for(let i=0;i<series.length;i++){
      debugger;
      for(let k=0;k<series[i].max;k=k+series[i].jump){
        let pattern="";
        pattern=pattern + boardId[k+series[i].index[0]].toString();
        pattern=pattern + boardId[k+series[i].index[1]].toString();
        pattern=pattern + boardId[k+series[i].index[2]].toString();
        pattern=pattern + boardId[k+series[i].index[3]].toString();

        switch(pattern){
         case "0111": 
         case "0222": 
              return (k+series[i].index[0]); 
         case "1011": 
         case "2022": 
              return (k+series[i].index[1]);
         case "1101": 
         case "2202": 
              return (k+series[i].index[2]); 
         case "1110": 
         case "2220": 
              return (k+series[i].index[3]); 
          
         
         
          
        }
      }
   }
   return -1;
}

export const computerMove=(boardId)=>{
  let series=[
   {
      index:[0,4,8,12],
      max:4,
      jump:1
   },
   {
      index:[0,1,2,3],
      max:13,
      jump:4
   },
   {
      index:[0,5,10,15],
      max:16,
      jump:16
   },
   {
      index:[3,6,9,12],
      max:16,
      jump:16
   }
  ];

  const position= getPosition(boardId,series);

  if(position===-1){
     return randomMove(boardId);
  }
  else{
   return position;
  }
}