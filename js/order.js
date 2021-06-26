const nameFieldFeedback = document.querySelector('#feedback_form__id input[name="name"]').parentNode;
const feedbackField = document.querySelector('#feedback_form__id input[name="email"]').parentNode;
const formFedback = document.getElementById('order_form');
const selectFeedback = document.getElementById('feedback_select');
const btnForm = document.getElementById('btn_form');

const nameFeedbackFieldUtiles = initializeField(nameFieldFeedback);
const feedbackFieldUtiles = initializeField(feedbackField);

selectFeedback.addEventListener('change', () => {
    selectFeedback.classList.add('input_select_selected');
});

$(document).ready(($) => {
    $('#order_form').on('submit', function (e) {
        e.preventDefault();
        $('.ajax-loader').show();
        $('.input__error').removeClass('input__error');
        $('.input__error_mmsg').remove();

        let data = new FormData(document.getElementById('order_form'));

        $.ajax({
            url: 'http://study.xeol.ru/api/new_order',
            method: 'post',
            dataType: 'json',
            data: data,
            success: function (msg) {
                $('.ajax-loader').hide();
                document.getElementById('order_form').reset();
                document.getElementById('feedback_name').parentNode.classList.remove(FOCUSED_CLASS_NAME)
                document.getElementById('feedback_select').classList.remove("input_select_selected")
                document.getElementById('feedback_textarea').parentNode.classList.remove(FOCUSED_CLASS_NAME)
                $.fancybox.open({
                    src: '.modal-success',
                    type: "inline",
                })
                $('.success-result').html(msg.success);
            },
            error: function (msg) {
                $('.ajax-loader').hide();
                showErrors(msg)
            },
            cache: false,
            contentType: false,
            processData: false,

        });
    })

})

function showErrors(msg) {

    $('#order_form input, #order_form select').each(function () {
        for (let i in msg.responseJSON.errors) {
            if (i == $(this).attr('name')) {
                let parent = $(this).closest('.input_block1');
                if (!parent.length)
                    parent = $(this).closest('.feedback__place-number');
                parent.addClass('input__error')
                if (!parent.length)
                    parent = $(this).closest('.feedback__checkbox');
                document.querySelector('.feedback__fake-checkbox').classList.add("feedback__checkbox-error");
                document.querySelector('.feedback__checkbox').classList.add("feedback__checkbox-error-text");
                for (let j in msg.responseJSON.errors[i]) {
                    parent.append('<span class="input__error_mmsg">' + msg.responseJSON.errors[i][j] + '</span>');
                }
            }
        }
    })
}

selectFeedback.addEventListener('change', () => {
    selectFeedback.classList.remove(ERROR_CLASS_NAME);
})