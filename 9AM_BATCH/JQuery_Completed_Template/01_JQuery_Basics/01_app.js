$('#success-button').click(function() {
   $('#success-card').fadeToggle();
   var btn_value = $(this).attr('value');
   if(btn_value === 'HIDE'){
       $(this).attr('value','SHOW');
   }
   else{
       $(this).attr('value','HIDE');
   }
});