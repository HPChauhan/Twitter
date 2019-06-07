$(document).ready(function() {
    //Character limit js

    $("#avatar-box").hide();
    $("#tweet").hide();
    $("#followers").hide();
    $("#following").hide();
    $("#countdown").hide();
    $("#submit").hide();

    var today = new Date();
    var date = (today.getDate() + 1) + '-' + today.getMonth();
    var maxLength = 140;
    //checking length of text area
    $("textarea").keypress(function() {
        var length = $(this).val().length;
        var length = maxLength - length;
        $("#countdown").text(length);
    })

    $(function() {
        $('#submit').click(function() {
            var cloneCount = 1;

            var textAreaValue = $('#txtArea').val();
            jQuery('#tweetContent').text(textAreaValue)
            var box = $('#avatar-box').clone().appendTo($('.container'));
            // empty the value if something is already filled in the cloned copy
            box.children('input').val('');

            $("#avatar-box").show();
            //$('.imageClass').attr('src','images/twitter-avatar.png');
            $('textarea').attr('height', '30px');
            $('#avatar-box').attr('id', 'avatar-box' + cloneCount++)
            //jQuery('#currentDate').text(date)
            $("#tweet").hide();
            $("#followers").hide();
            $("#following").hide();
            $("#countdown").hide();
            $("#submit").hide();
            $("#txtArea").val('');

        });
    });

    //when focus on text area --> folloers and following appears
    $('textarea').focus(function() {
        $(this).animate({
            height: "50px"
        }, 500);
        $("#tweet").show();
        $("#followers").show();
        $("#following").show();
        $("#expandedtext").show();
        $("#countdown").show();
        $("#submit").show();
    });

    //expnad colapse code
    $('body').on('click', '.header', function(event) {
        $header = $(this);
		
		event.stopPropagation();
        //getting the next element
        $content = $header.next();
        //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
        $content.slideToggle(0, function() {
            //execute this after slideToggle is done
            //change text of header based on visibility of content div
            $header.text(function() {
                //change text based on condition
				
                return $content.is(":visible") ? "Collapse" : "Expand";
            });
        });
    });

});
