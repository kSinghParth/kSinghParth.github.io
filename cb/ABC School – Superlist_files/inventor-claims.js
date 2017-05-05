jQuery(document).ready(function($) {
    'use strict';

    /**
     * Claim button
     */
    var claim_btn_class = ".inventor-claims-btn";
    $(document).on("click", claim_btn_class, function(e) {
        var action = "inventor_claims_ajax_can_claim";
        var success_url = $(this).attr('href');

        $.ajax({
            url: $(this).data('ajax-url'),
            data: {
                'action': action,
                'id': $(this).data('listing-id')
            }
        }).done(function( data ) {
            if (data.success) {
                window.location.href = success_url;
            } else {
                alert(data.message);
            }
        });

        e.preventDefault();
    });
});
