
var onReadyMoments = function() {
	if (newOrEdit(['moments'])) {
		var NO_ALLIES = "Unselect all";
		var ALL_ALLIES = "Select all";
		$('#viewers_label').text(ALL_ALLIES);

		$('#viewers').change(function() {
			if (isAllAlliesInputBoxIsChecked($(this))) {
				selectAllAlliesWhoCanViewMomement();
				setViewersCheckBoxToNotBeSelected();
				$('#viewers_label').text(NO_ALLIES);
			} else {
				unselectAllAlliesWhoCanViewMoment();
				setViewersCheckBoxToNotBeSelected();
				$('#viewers_label').text(ALL_ALLIES);
			}
		});
	}
}

function isAllAlliesInputBoxIsChecked(inputTag) {
			return inputTag.is(":checked") && $('#viewers_label').text() === ALL_ALLIES
}

function selectAllAlliesWhoCanViewMomement() {
	$(":checkbox[name='moment[viewers][]']").prop("checked", true);
}

function setViewersCheckBoxToNotBeSelected() {
	$(":checkbox[id='viewers']").prop("checked", false);
}

function unselectAllAlliesWhoCanViewMoment() {
	$(":checkbox[name='moment[viewers][]']").prop("checked", false);
}

$(document).on("page:load ready", onReadyMoments);


