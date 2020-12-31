// ==UserScript==
// @name         jobsearch violent highlighter
// @namespace    jobsearchsoldy
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.cv-library.ie/job/*
// @match        https://www.cv-library.co.uk/job/*
// @grant        GM.notification
// ==/UserScript==

(function() {
    'use strict';
    const listMidifier = function(list){
        let out = [];
        for(let i of list){
            out.push(' '+i+',');
            out.push(' '+i+' ');
        }
    }
    const highligth = function(style, list, element){
        let html = element.innerHTML;
        element.innerHTML =  html.replace((new RegExp(list.join("|"), "gi")), function(x){
            return '<span style="'+style+'">'+x+'</span>'; 
        });
    }
})();
