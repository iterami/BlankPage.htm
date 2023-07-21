'use strict';

window.onload = function(){
    document.body.style.backgroundColor = '#' + (globalThis.location.search.substring(1) || '000');
};
