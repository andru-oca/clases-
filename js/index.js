// calculadora

function getData(){
    let first = document.getElementById('first').value || 0, 
        second = document.getElementById('second').value || 0,
        op = document.getElementById('operation').value ,
        total = document.getElementById('total');
   
    return {
        first,
        second,
        op,
        total
    }

}


function getCalc(){

    // obtengo data

    let data = getData();
    let total ;
    // logica

    switch (data.op){
        case 'suma':
            total = data.first + data.second;
        break;
        case 'resta':
            total = data.first - data.second;
        break;
        case 'mult':
            total = data.first * data.second;
        break;
        case 'div':
            total = data.first / data.second;
        break;
        case 'exp':
            total = data.first ** data.second;
        break;
    }

    return {
        total,
        data: data.total
    };
}


function printValues(){
    let {total,data} = getCalc();
    data.innerText = total;
}


let btn = document.getElementById('btn');

btn.addEventListener('click', printValues);


/*USANDO UN FETCH*/


fetch('https://fakerapi.it/api/v1/books')
.then(response => 
    {
        if (response.ok){
            return response.json();
        }
        throw new Error("Something happen");
    }    
)
.then(data => {
    let res = data.data ;
    let main = document.getElementById("to_inject");
    
    res.map(e => {
        let h3 = document.createElement('h3');
        h3.classList = 'border';
        h3.innerHTML = `${e.author}`;
        main.appendChild(h3);
    })

    // for(let i=0; i<res.length ; i++){
    //     let h3 = document.createElement('h3');
    //     h3.classList = 'border';
    //     h3.innerHTML = `${res[i].author}`;
    //     main.appendChild(h3);
    // }        
})
.catch(e => console.log(e)) ;


