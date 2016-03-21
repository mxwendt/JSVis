/**
 * Pre-Survey (External, Anonymous)
 */

if (Meteor.isClient) {
    Template.PreExt.events({
        // Reasons question
        'change #reason input': function (e) {
            var $inputElem = $(e.target);
            if ($inputElem.attr('id') !== 'reason-none') {
                $('#reason-none').prop('checked', false);
            } else {
                $inputElem.closest('#reason').find('input[type=checkbox]').not($inputElem).prop('checked', false);
                $inputElem.closest('#reason').find('input[type=text]').val('');
            }
        },
        'keyup #reason-other': function (e) {
            var $textInput = $(e.target);
            var $noneInput = $('#reason-none');
            if ($textInput !== '' && $noneInput.prop('checked') === true) {
                $noneInput.prop('checked', false);
            }
        },
        // Usefulness question
        'change #useful input': function (e) {
            var $inputElem = $(e.target);
            if ($inputElem.attr('id') !== 'useful-none') {
                $('#useful-none').prop('checked', false);
            } else {
                $inputElem.closest('#useful').find('input[type=checkbox]').not($inputElem).prop('checked', false);
                $inputElem.closest('#useful').find('input[type=text]').val('');
            }
        },
        'keyup #useful-other': function (e) {
            var $textInput = $(e.target);
            var $noneInput = $('#useful-none');
            if ($textInput !== '' && $noneInput.prop('checked') === true) {
                $noneInput.prop('checked', false);
            }
        },
        // Communication question
        'change #communicate input': function (e) {
            var $inputElem = $(e.target);
            if ($inputElem.attr('id') !== 'communicate-none') {
                $('#communicate-none').prop('checked', false);
            } else {
                $inputElem.closest('#communicate').find('input[type=checkbox]').not($inputElem).prop('checked', false);
                $inputElem.closest('#communicate').find('input[type=text]').val('');
            }
        },
        'keyup #communicate-other': function (e) {
            var $textInput = $(e.target);
            var $noneInput = $('#communicate-none');
            if ($textInput !== '' && $noneInput.prop('checked') === true) {
                $noneInput.prop('checked', false);
            }
        },
         // Sources question
        'change #source input': function (e) {
            var $inputElem = $(e.target);
            if ($inputElem.attr('id') !== 'source-none') {
                $('#source-none').prop('checked', false);
            } else {
                $inputElem.closest('#source').find('input[type=checkbox]').not($inputElem).prop('checked', false);
                $inputElem.closest('#source').find('input[type=text]').val('');
            }
        },
        'keyup #source-other': function (e) {
            var $textInput = $(e.target);
            var $noneInput = $('#source-none');
            if ($textInput !== '' && $noneInput.prop('checked') === true) {
                $noneInput.prop('checked', false);
            }
        }
    });
}

if (Meteor.isServer) {

}