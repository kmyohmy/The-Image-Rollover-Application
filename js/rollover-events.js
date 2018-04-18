/*eslint-env browser*/

var evt = {
    attach: function (node, eventName, funct) {
        "use strict";
        
        if (node.addEventListener) {
            node.addEventListener(eventName, funct)
            
        } else if (node.attachEvent)
            node.attachEvent("on" + eventName, funct);
        
    }  
    
};