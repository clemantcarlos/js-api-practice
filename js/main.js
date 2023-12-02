import {ajaxRequest,jqueryAjaxRequest, getJsonRequest} from "./ajaxRequest.js";

$(document).ready(()=>{
    $(".loading").hide();
   
    console.log("ready");
    ajaxRequest('.load-request');
    jqueryAjaxRequest('.load-ajax-request','.btn-ajax-request');
    getJsonRequest('.load-json-request','.btn-json-request');
})

$(document).on( "ajaxStart",function(){
    $(".loading").show();
});
$(document).on( "ajaxStop",function(){
    $(".loading").hide();
});
$(document).on('ajaxError',function(){
    alert('Ha ocurrido algun error con la conexion')
})