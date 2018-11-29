window.addEventListener('load', function() {
    var buyNowButton = this.document.querySelector(".main-header__container__button")

    var interactiveImage = document.querySelector(".extra-info__container__image");
    var bottonOne = document.getElementsByClassName('extra-info__container__button__one')[0];
    var bottonTwo = document.getElementsByClassName('extra-info__container__button__two')[0];
    var bottonThree = document.getElementsByClassName('extra-info__container__button__three')[0];

    var featuredProducts = document.querySelectorAll(".product__container__row__box");    
    
    bottonOne.addEventListener("click", function(){
        TweenMax.to(interactiveImage, .1, {scale: 1.1, opacity: .2, ease: Power4.easeIn, onComplete:paintOne});
    });

    bottonTwo.addEventListener("click", function(){
        TweenMax.to(interactiveImage, .1, {scale: 1.1, opacity: .2, ease: Power4.easeIn, onComplete:paintTwo});
    });

    bottonThree.addEventListener("click", function(){
        TweenMax.to(interactiveImage, .1, {scale: 1.1, opacity: .2, ease: Power4.easeIn, onComplete:paintThree});
    });
    
    function paintOne(){
        TweenMax.to(interactiveImage, .5, {scale: 1, opacity: 1, ease: Power1.easeInOut});
        var image = document.getElementsByClassName('extra-info__container__image')[0].src = "./images/chapter-image-one.png";
    }
    
    function paintTwo(){
        TweenMax.to(interactiveImage, .5, {scale: 1, opacity: 1, ease: Power1.easeInOut});
        var image = document.getElementsByClassName('extra-info__container__image')[0].src = "./images/chapter-image-two.png";
    
    }
    
    function paintThree(){
        TweenMax.to(interactiveImage, .5, {scale: 1, opacity: 1, ease: Power1.easeInOut});
        var image = document.getElementsByClassName('extra-info__container__image')[0].src = "./images/chapter-image-three.png";
    }

    ////////// GREENSOCK //////////
    /*
    var buyNowButtonTL = new TimelineMax({repeat: -1, repeatDelay: 1});
    buyNowButtonTL.to(buyNowButton, .2, {scale: 1.02, ease:Power1.easeIn, delay: 2});
    buyNowButtonTL.to(buyNowButton, .1, {scale: 1, ease:Power1.easeOut});
    buyNowButtonTL.to(buyNowButton, .2, {scale: 1.02, ease:Power1.easeIn});
    buyNowButtonTL.to(buyNowButton, .1, {scale: 1, ease:Power1.easeOut});
    */

   var buyNowButtonTL = new TimelineMax({repeat: -1, repeatDelay: 1});
   buyNowButtonTL.to(buyNowButton, .2, {y: -3, ease:Power1.ease});
   buyNowButtonTL.to(buyNowButton, .2, {y: 0, ease:Power1.ease});

    /*
    var buyNowButtonTL = new TimelineMax({repeat: -1});
    buyNowButtonTL.yoyo(true);
    buyNowButtonTL.to(buyNowButton, 2, {y: -5, ease:Power1.easeInOut});
    buyNowButtonTL.to(buyNowButton, 2, {y: 5, ease:Power1.easeInOut});
    */

    bottonOne.addEventListener("mouseover", function(){
        TweenMax.to(bottonOne, .5, {y: -5, scale: 1.2, ease: Bounce.easeOut});
        TweenMax.to(bottonTwo, .5, {scale: .8, ease: Bounce.easeOut});
        TweenMax.to(bottonThree, .5, {scale: .8, ease: Bounce.easeOut});
    });

    bottonOne.addEventListener("mouseout", function(){
        TweenMax.to(bottonOne, .2, {y: 0, scale: 1, ease: Power1.easeIn});        
        TweenMax.to(bottonTwo, .2, {scale: 1, ease: Power2.easeIn});
        TweenMax.to(bottonThree, .2, {scale: 1, ease: Power2.easeIn});
    });

    bottonTwo.addEventListener("mouseover", function(){
        TweenMax.to(bottonTwo, .5, {y: -5, scale: 1.2, ease: Bounce.easeOut});
        TweenMax.to(bottonOne, .5, {scale: .8, ease: Bounce.easeOut});
        TweenMax.to(bottonThree, .5, {scale: .8, ease: Bounce.easeOut});
    });

    bottonTwo.addEventListener("mouseout", function(){
        TweenMax.to(bottonTwo, .2, {y: 0, scale: 1, ease: Power1.easeIn});        
        TweenMax.to(bottonOne, .2, {scale: 1, ease: Power2.easeIn});
        TweenMax.to(bottonThree, .2, {scale: 1, ease: Power2.easeIn});
    });

    bottonThree.addEventListener("mouseover", function(){
        TweenMax.to(bottonThree, .5, {y: -5, scale: 1.2, ease: Bounce.easeOut});
        TweenMax.to(bottonTwo, .5, {scale: .8, ease: Bounce.easeOut});
        TweenMax.to(bottonOne, .5, {scale: .8, ease: Bounce.easeOut});
    });

    bottonThree.addEventListener("mouseout", function(){
        TweenMax.to(bottonThree, .2, {y: 0, scale: 1, ease: Power1.easeIn});        
        TweenMax.to(bottonTwo, .2, {scale: 1, ease: Power2.easeIn});
        TweenMax.to(bottonOne, .2, {scale: 1, ease: Power2.easeIn});
    });

    featuredProducts.forEach(function(element){
        element.addEventListener('mouseover', function(){
            TweenMax.to(element, .2, {y: -10, ease:Power2.easeIn});
        });

        element.addEventListener('mouseout', function(){
            TweenMax.to(element, .5, {y: 0, ease:Power2.easeOut});
        });

        element.addEventListener('click', function(){
            window.location.href = "/store/" + element.getAttribute('data-name');
        });
    });
});
