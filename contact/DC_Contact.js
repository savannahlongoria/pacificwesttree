var opts = {
	antispam:false
}
$(function() {
	// anti-spammer functionality
	if(opts.antispam) {
		var sum = 0;
		$("#DC_Contact #nobots label span.number").each(function(i) {
			var num = Math.floor(Math.random()*10)+1;
			$(this).html(num);
			sum += num;
		});
	}
	// override default form submission
	$("#DC_Contact").ajaxForm({
		resetForm: true,
		beforeSubmit:function() {
			// reset errors
			$("#DC_Contact li.error").removeClass("error");
			// validate
			var error = false;
			if(opts.antispam && $("#DC_Contact #__nobots").val() != sum) {
				$("#DC_Contact #nobots").addClass('error');
				error = true;
			}
			$("#DC_Contact .required").each(function() {
				var i = $(this).parents('li').find(':input');
				if(i.val()=='' || i.val() == i.attr('title')) {
					$(this).parents('li').addClass('error');
					error = true;
				}
			});
			if(error) return false;
			$("#DC_Contact .results").css('display','none');
			$("#DC_Contact #loading").css('display','block');
		},
		success:function(r) {
			$("#DC_Contact #loading").css('display','none');
			$("#DC_Contact #results_"+r).css('display','block');
		}
	});
	// hilite the fields onFocus
	$("#DC_Contact :input[type!='submit']").focus(function() {
		$(this).parents('li').addClass('focused');
		if($(this).val() == $(this).attr('title')) $(this).val('');
	}).blur(function() {
		$(this).parents('li').removeClass('focused');
		if($(this).val() == '') $(this).val($(this).attr('title'));
	});
});