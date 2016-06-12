/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ /*global define */
/*global $, jQuery, alert, console,Texter*/
var textract = require("textract");


function DocumentMerger(list) {
  "use strict";
  var self = this;  
 
    this.init = function(){
      var a = list[0];


      textract.fromFileWithPath(a, function( error, text ) {
          
         console.log(text); 
         });
      };        

 
    self.init();   
    
}




var list = ['../samples/Amnesia.odt', '../sample/The_Art_Of_War.pdf'];

var d = new DocumentMerger(list);
