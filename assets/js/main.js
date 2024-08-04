let input = document.querySelector('input')

 
 input.onkeyup=function(){
if (input.value.length<4){
    let x=input.nextElementSibling.innerHTML ='input must be at least 4 letters '
   x.className('alert alert-danger')
}
else
{
    x.className='  ' 
}
 }