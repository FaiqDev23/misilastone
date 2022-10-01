jQuery(document).ready(function($) {
								
	// Mailchimp Form
	$('.tpath-mailchimp-form').each(function(){
		$(this).bootstrapValidator({
			container: 'tooltip',
			message: 'This value is not valid',
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok',
				invalid: 'glyphicon glyphicon-remove',
				validating: 'glyphicon glyphicon-refresh'
			},
			fields: {
				subscribe_email: {
					validators: {
						notEmpty: {
							message: 'The email address is required'
						},
						emailAddress: {
							message: 'The input is not a valid email address'
						},
						regexp: {
                            regexp: '^[^@\\s]+@([^@\\s]+\\.)+[^@\\s]+$',
                            message: 'The value is not a valid email address'
                        }
					}
				},
			}
		}).on('success.form.bv', function(e) {
											
			e.preventDefault();
			
			var $form        = $(e.target),
				validator    = $form.data('bootstrapValidator'),
				submitButton = validator.getSubmitButton();
			
			$('.tpath-mailchimp-form').addClass('ajax-loader');
			var getid = $('.tpath-mailchimp-form').attr('id');
			var data = $('#' + getid).serialize();
			
			$.ajax({
					url: greenture_js_vars.greenture_ajax_url,
					type: "POST",
					dataType: 'json',
					data: data + '&action=template_core_mailchimp_subscribe',
					success: function (msg) {
						$('.tpath-mailchimp-form').removeClass('ajax-loader');
						if( msg.data !== '' ) {
							$('#' + getid).parent().find('.tpath-form-success').html( msg.data );
							$('#' + getid).parent().find('.tpath-form-success').show();
							submitButton.removeAttr("disabled");
							resetForm( $('#' + getid) );
						}
					},
					error: function(msg) {}
					
				});
			
			return false;        
		});
	});	
	
	function resetForm($form) {
		$form.find('input:text, input:password, input, input:file, select, textarea').val('');
		$form.find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');		
		$form.find('input:text, input:password, input, input:file, select, textarea, input:radio, input:checkbox').parent().find('.form-control-feedback').hide();
	}
});