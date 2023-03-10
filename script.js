let a = '';
let b = '';
let sign = '';
let finish = false;

const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const action = ['+','-','X','/'];

const out = document.querySelector('.calc__screen p');

function clearAll(){
    let a = '';
    let b = '';
    let sign = '';
    let finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('buttons__btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';

    const key = event.target.textContent;

    if(numbers.includes(key)) {
        if(b === '' && sign === ''){
            a += key;

            out.textContent = a;
        }
        else if (a!=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = a;
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;
        
    }
    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    if(key === '='){
        switch (sign){
            case '+':
                a = (+a)+(+b);
                break
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
}