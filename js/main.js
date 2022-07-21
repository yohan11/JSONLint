const input=document.querySelector('input');
const preview=document.querySelector('.preview');
const result=document.querySelector('.result');
const btn=document.querySelector('button');

input.addEventListener('change',readFile);
btn.addEventListener("click", inspectJson);

function readFile(e){
    const reader = new FileReader();
    reader.readAsText(e.target.files[0]);
    reader.onload = function(e) {
    preview.innerHTML=e.target.result;
  }
}

function inspectJson ()  {
 const file=preview.innerText;
 let state=true;
 if(file){
 try{
   const json=JSON.parse(file);
 }catch(e){
   state=false;
 }
 if(state) result.innerHTML='valid';
 else result.innerHTML='invalid';
}
 else alert('파일을 업로드 해주세요');

}
