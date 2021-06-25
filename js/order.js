jQuery(document).ready(($) => {
    $('#order_form').on('submit', function(e){
        e.preventDefault();
        let form = $(this),
           data = new FormData(document.getElementById('order_form'));
        $.ajax({
            url: 'http://study.xeol.ru/api/new_order',
            type: 'post',
            data: data,
            dataType: 'json',
            success: function(msg){
                console.log(msg)
            },
            error: function(msg){
                console.log(msg)
            },
            cache: false,
            contentType: false,
            processData: false,
        })
    })
    function showErrors(msg) {
        $('#order_form input, #order_form select').each(function () {
            for (let i in msg.responseJSON.errors) {
                if (i == $(this).attr('name')) {
                    let parent = $(this).closest('.feedback__name');
                    if (!parent.length)
                        parent = $(this).closest('');
                    if (!parent.length)
                        parent = $(this).closest('');
                    parent.addClass('.st-inpyt_error')
                    for (let j in msg.responseJSON.errors[i]) {
                        parent.append('<p class="st-input__error-msg">' +msg.responseJSON.errors[i][j] +'</p>')
                    }
                }    
            }      
        })    
        
    }
})

