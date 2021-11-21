// display date/time at top of page
    $(document).ready(function() {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
        // color coding timeblocks
        var currentHour = parseInt(moment().format("H"));
        $(".time-block").each(function() {
            var blockTime = parseInt($(this).attr("id"));
                if(blockTime === currentHour) {
                    $(this).addClass("present");
                    $(this).removeClass("future");
                    $(this).removeClass("past");
                } else if (blockTime < currentHour) {
                    $(this).addClass("past");
                    $(this).removeClass("future");
                    $(this).removeClass("present");
                } else {
                    $(this).addClass("future");
                    $(this).removeClass("past");
                    $(this).removeClass("present");
                }
    });

    $('#9 .description').val(localStorage.getItem('9'))
    $('#10 .description').val(localStorage.getItem('10'));
    $('#11 .description').val(localStorage.getItem('11'));
    $('#12 .description').val(localStorage.getItem('12'));
    $('#13 .description').val(localStorage.getItem('13'));
    $('#14 .description').val(localStorage.getItem('14'));
    $('#15 .description').val(localStorage.getItem('15'));
    $('#16 .description').val(localStorage.getItem('16'));
    $('#17 .description').val(localStorage.getItem('17'));

    $(".saveBtn").on("click", function() {
        var plannerText = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, plannerText);
        });
    });
// saving the newly input events to localStorage
var saveEvent = function() {
    var textBox = $(this).siblings("textarea").val();
    var textBoxID = $(this).siblings(".description").attr("id");
    localStorage.setItem(textBox, textBoxID);
}
