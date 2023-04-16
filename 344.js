//paranteze
const prompt=require("prompt-sync")();
var fs = require("fs");
var continut = fs.readFileSync("./paranteze.in", "utf-8");
textByLine = continut.split("\r\n");
n = Number(textByLine[0]);
let st=[]
for(j=1;j<=n;j++) st[j]=0;

fs.writeFileSync("paranteze.out",""); // nu scriu nimic, dar se sterge continutul anterior

function verif(k)
{    let cd=0; let ci=0;
    for(i=1;i<=k;i++)
         if (st[i] ==0 ) cd ++;
                else     ci ++;

    return cd-ci;

}
function back(k)       ///(((())   4-2 >=0    (()(())) 4-4 = 0  (())) = 2-3 =-1
{
    let i=0;
    for(i=0;i<=1;i++)
    {    st[k] = i;        
        if (verif(k)>=0 )    /// valid
        {
            if(verif(k)==0 && k==n) {
                console.log(st); console.log(verif(k));
                s="";
                for(j=1;j<=n;j++)
                    if(st[j]==0) s=s+"(";
                            else s=s+")";
                s=s+"\n";                            
                fs.writeFileSync("paranteze.out",s ,{flag: "a+"});
            }
            else
            if    (k<n) back(k+1);  
        }
    }
    st[k]=0;
}
back(1);