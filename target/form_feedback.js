"use strict";

var nameFieldFeedback = document.querySelector('#feedback_form__id input[name="name"]').parentNode;
var feedbackField = document.querySelector('#feedback_form__id input[name="email"]').parentNode;
var formFedback = document.getElementById('order_form');
var selectFeedback = document.getElementById('feedback_select');
var btnForm = document.getElementById('btn_form');
var nameFeedbackFieldUtiles = initializeField(nameFieldFeedback);
var feedbackFieldUtiles = initializeField(feedbackField);
selectFeedback.addEventListener('change', function () {
  selectFeedback.classList.add('input_select_selected');
});
$(document).ready(function ($) {
  $('#order_form').on('submit', function (e) {
    e.preventDefault();
    $('.ajax-loader').show();
    $('.input__error').removeClass('input__error');
    $('.input__error_mmsg').remove();
    var data = new FormData(document.getElementById('order_form'));
    $.ajax({
      url: 'http://study.xeol.ru/api/new_order',
      method: 'post',
      dataType: 'json',
      data: data,
      success: function success(msg) {
        $('.ajax-loader').hide();
        document.getElementById('order_form').reset();
        document.getElementById('feedback_name').parentNode.classList.remove(FOCUSED_CLASS_NAME);
        document.getElementById('feedback_select').classList.remove("input_select_selected");
        document.getElementById('feedback_textarea').parentNode.classList.remove(FOCUSED_CLASS_NAME);
        $.fancybox.open({
          src: '.modal-success',
          type: "inline"
        });
        $('.success-result').html(msg.success);
      },
      error: function error(msg) {
        $('.ajax-loader').hide();
        showErrors(msg);
      },
      cache: false,
      contentType: false,
      processData: false
    });
  });
});

function showErrors(msg) {
  $('#order_form input, #order_form select').each(function () {
    for (var i in msg.responseJSON.errors) {
      if (i == $(this).attr('name')) {
        var parent = $(this).closest('.input_block1');
        if (!parent.length) parent = $(this).closest('.feedback__place-number');
        parent.addClass('input__error');

        for (var j in msg.responseJSON.errors[i]) {
          parent.append('<p class="input__error_mmsg">' + msg.responseJSON.errors[i][j] + '</p>');
        }
      }
    }
  });
}

selectFeedback.addEventListener('change', function () {
  selectFeedback.classList.remove(ERROR_CLASS_NAME);
});
//# sourceMappingURL=form_feedback.js.map