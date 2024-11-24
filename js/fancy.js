function fancy() {

    let answer = prompt('Какое "официальное" название JavaScript?');

    if (answer==='ECMAScript') {
        alert('Right');
        return;
    } 
    else {
        alert('No');
    }
    fancy()
}

// fancy()


function numbers() {

     let quantity = prompt('put the number,0');

    if (quantity>0) {
        alert(1);
    }
    else if (quantity>0) {
        alert(-1);
    }
    else {
        alert (0);
    }
        
}

    //numbers()







function comparison() {

    let a = prompt('a');
    let b = prompt('b');
    

    result= (a + b < 4) ? 'more': 'less';

    alert (result)

}

//comparison()







for (let i=0;i<=10;i++){
    
    if (!(i% 2)) {
        console.log(i);
        alert   (i);
    }
    
}