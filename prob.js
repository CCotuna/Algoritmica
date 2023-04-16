const prompt = require('prompt-sync')();
let v=[]
n=prompt('n=');
for(i=0;i<n;i++) 
{		
	v[i]=Number(prompt('v['+i+']= '));
}
k=prompt('k=');
v[k]=v[k]*(-1);
do{ ordonat = true;
	for(i=0;i<=n-2;i++)
		if(v[i]>v[i+1])
		{   t=v[i];   v[i] = v[i+1];  v[i+1]=t;
			ordonat = false;			
		}
}while (!ordonat);

s=0;
ok=1;
for(i=n-1;i>=0 && ok==1; i--)
{
	if(v[i]>0)
		s=s+v[i];
	else
		ok=0;
}

console.log(s);