const prompt=require("prompt-sync")();
  n=Number(prompt('n= '));
  m=Number(prompt('m= '));
  let st=[];
  for(j=0;j<m;j++) st[j]=0;

  function valid(k){
    if(k==0) return true;
    let i=0;
    for(i=0; i<k; i++) if(st[i]>=st[i+1] || st[i+1]-st[i]==1)  return true;
    return false;
}

  function back(k){
    let i=0;
    for(i=1;i<=n;i++) 
    { st[k]=i;
      if(valid(k)) {
    if(k==m-1) console.log(st);
       else back(k+1);  } }
}
  
  st[0]=1;
  back(0);