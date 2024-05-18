const newh1=document.getElementById("heading");
const buttons=document.getElementsByTagName("button");
const input=document.getElementById("iptbtn");
for(let i=0;i<buttons.length;i++)
{
   buttons[i].addEventListener("click",appends);
   
}
function appends(event){
   if(this.textContent==="AC"){
      input.value="0";
   }
   else if(this.textContent==="D"){
      if(input.value==='Error'){
         input.value="0";
      }
      if(input.value==='0'){
         return;
      }
      else{
         let deltext=input.value.slice(0,input.value.length-1);
         input.value=deltext;
      }
      
   }
   else if(this.textContent==="x"){
      input.value+="*";
   }
   else if(this.textContent==="="){
      try {
         let result=eval(input.value);
         input.value=result;
      } catch (error) {
         input.value='Error';
      }
   }
   else if(this.textContent==="R"){
      input.value=Math.round(input.value)
   }
   else{
      if(input.value==='0'){
         input.value=this.textContent;
      }
      else{
         input.value+=this.textContent;
      }
      
   }
   }