let str="";
let inputs=document.querySelectorAll('button');
Array.from(inputs).forEach((element) => {element.addEventListener('click',input)   
});

function input(e){
    if (e.target.innerHTML === '='){
        str = eval(str)
        document.querySelector('input').value=str;
    }
    else if (e.target.innerHTML === 'clr'){
        str=""
        document.querySelector('input').value="";
    }
    else{
        if(e.target.innerHTML === 'Backspace'){
            let len = (str.length) -1
            str = str.slice(0,len)
            document.querySelector('input').value=str
            return
        }
        str = str + e.target.innerHTML;
        console.log(e.target);
        document.querySelector('input').value=str;
    }
}