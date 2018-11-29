window.addEventListener("load", function() {
    var addButton = this.document.querySelector(".description-container__wrap__button");

    addButton.addEventListener("click", function(){
        addToCart(addButton.getAttribute('data-name'));
    });

    function addToCart(name) {
        fetch(`/api/addItemToCart`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded'
            },  
            body: `name=${name}`,
        }).then(function(response){
            return response.text();
        }).catch(function(error) {
            console.error(error);
        }).then(function(message) {
            console.log(message);
        });
    }
});