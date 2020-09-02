let input= document.getElementById('inputBox');
let list = document.getElementById('ul');
let minTextLegth= 3;
let i=1;

function addBtn(){
   let inputText = textFilter(input.value);
   if(inputText){
        showList(inputText);
        input.value='';
   }
}

function showList(text){ 
    list.innerHTML+= `
    <li id="li-${i}">
        <span id="liSpan-${i}">${text}</span>
        <button class="del-btn float-right" onclick="delBtn(${i})"><i class="far fa-trash-alt"></i></button>
        <button class="edit-btn float-right" onclick="editBtn(${i})"><i class="far fa-edit"></i></button>     
    </li>
    `; 
    i++;
}
function delBtn(listId){
    let currentText = document.getElementById(`liSpan-${listId}`).innerHTML;
    let delConfirm= confirm(`Are you sure to delete list '${currentText}' `);
    
    if(delConfirm){
        let current=document.getElementById(`li-${listId}`);
        list.removeChild(current);
    }else{
        alert('Delete Cancel')
    }
    
}
function editBtn(listId){
    let current = document.getElementById(`liSpan-${listId}`);
    let newText = prompt('Edit list',current.innerHTML);

    if(textFilter(newText)){
        current.innerHTML=newText;
    }

}
function textFilter(x){
    if(x){
        if(x.length>= minTextLegth){
            return x;
        }else{
            return alert(`Minium Text Length is 3.`);
        }
        
    }else{
        return alert('Input Text Empty! Please try agan later.');
    }
}

