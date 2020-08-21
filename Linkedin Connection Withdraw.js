    function withDrawing(){

        button = document.getElementsByClassName("invitation-card__action-btn artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--tertiary ember-view");         //selectng the withdraw button

        withdraw = document.getElementsByClassName("artdeco-modal__confirm-dialog-btn artdeco-button artdeco-button--2 artdeco-button--primary ember-view");        // Selecting the withdraw element

        pg=document.getElementsByClassName("artdeco-list mn-invitation-list"); // selecting the list containing the items

        var pglength = pg[0]["children"].length; // getting the page item length 

        for(var i = 0 ; i < pglength; i++ ){

            button[i].click();      //clicking on withdraw button

            withdraw[0].click();    //confirming the withdrawal
        }
        
        var previous = document.getElementById("ember131");   //selecting the previous button
        previous.click();       //clicking on previous button
    }


    //main
    //define number of pages below
for(var a=0;a<no_of_pages;a++){

setInterval(withDrawing, 9000);   // calling withdrawing function in every 9 seconds.

}