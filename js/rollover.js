/*eslint-env browser*/

var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
    
};

var createRollover = function (img, secondUrl, secondAlt) {
    "use strict";
    var firstUrl, firstAlt, image;
    
    
    firstUrl = img.src;
    firstAlt = img.alt;
    image = new Image();
    
    image = new Image();
    image.src = secondUrl;


    var mouseover = function () {
        img.src = secondUrl;
        img.alt = secondAlt;
    };

    var mouseout = function () {
        img.src = firstUrl;
        img.alt = firstAlt;
    };
    evt.attach(img, "mouseover", mouseover);
    evt.attach(img, "mouseout", mouseout);
};
window.addEventListener('load', function () {
    "use strict";
    createRollover($('img1'), "images/wakeboard.jpg", "Zak is in the water");
    createRollover($('img2'), "images/race.jpg", "Zak in running");
    
});