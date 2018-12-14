var input = "";

var topics = [
    "Cars",
    "Skateboarding",
    "Penguins",
    "Overwatch"
]
$(document).ready(function () {
    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#buttons").append(a);
    }

    $("#search-button").on("click", function() {
        input = $("#gif-search").val().trim();
        var b = $("<button>");
        b.addClass("topic");
        b.attr("data-name", input);
        b.text(input);
        $("#buttons").append(b);
    })

    $(document).on("click", ".topic", function() {
        var gif = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        gif + "&api_key=l9Y7rtmczC6Na7oBNSWERZ3TccsDW43b&limit=10&rating=pg";
        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
              var response = response.data
              for (var j = 0; j < response.length; j++) {
                var gifDiv = $("<div>");
                var gifImage = $("<img>");
                console.log(response)
                gifImage.attr("src", response[j].images.fixed_height.url);
                gifDiv.append(gifImage);
                $("#gifs").prepend(gifDiv);
              }
            })
    })
    
});


