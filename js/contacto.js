/**
 * Created with JetBrains WebStorm.
 * User: Marcio
 * Date: 2/23/14
 * Time: 1:28 AM
 * To change this template use File | Settings | File Templates.
 */
jQuery(document).ready(function($){

    var parameter = 'send';
    var url = window.location.href;
    if(url.indexOf('?' + parameter + '=') != -1)
        $('.send-message').show();
    else{
        $('.send-message').hide();
    }



});
