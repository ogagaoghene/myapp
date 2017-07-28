//Javascript function called inline with onclick event handler
/*function changeColorOfPage ( color ) {
   
    document.body.style.backgroundColor = color;
    document.querySelector('#box').style.backgroundColor = '#fff';
    document.querySelector('#box').style.borderColor = '#fff';
    
}*/

//Javascript function called with addEventListener 
function changeColorOfPage () {
    
    window.document.body.style.backgroundColor = '#eee';
    window.document.querySelector( '#box' ).style.backgroundColor = '#fff';
    window.document.querySelector( '#box' ).style.borderColor = '#fff';
    
}

var elem = document.querySelector( '#test' );
elem.addEventListener( 
    "click",
    changeColorOfPage,
    false
);
   
