$('#success-button').click(function () {
    $('#success-card').fadeToggle('slow');
    var value = $('#success-button').attr('value');
    if(value === 'SHOW'){
        $('#success-button').attr('value','HIDE');
    }
    else if(value === 'HIDE'){
        $('#success-button').attr('value','SHOW');
    }
});