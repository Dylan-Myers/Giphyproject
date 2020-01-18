





$(document).ready(function(){

    var topics = [];


    function displayNew() {
     
        
        var x = $(this).data("search");
        console.log(x);

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=FmLvJ70vpE5u9rPiJjIlZ4vAtkgwB7Q3";
        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: "Get"
        }).done(function(response){
            var results = response.data;
            console.log(results)

            for (var i = o; i < results.length; i++) {

                var searchDiv = $("<div class='col-md-4'>");
                var rating = results[i].rating;
                var defaultanimation = results[i].images.fixed_height.url;
                var static = results[i].images.fixed_height_still.url;
                var showImage = $("<img>");
                var p = $("<p>").text("Rating: " + rating);



                showImage.attr("src", static);
                showImage.attr("data-state", "still");
                showImage.attr("data-still", static)
                showImage.attr("data-animate", defaultanimation);
                searchDiv.append(p);
                searchDiv.append(showImage);
                $("#gifs").prepend(searchDiv);
            };
        });


        $("#addSearch").on("click", function(event){
            event.preventDefault();
            var newSearch = $("#newSearch").val().trim();
            topics.push(newSearch);
            console.log(topics);
            $("#newSearch").val('');
            displayButtons();
        });



        function displayButtons() {
            $("#myButtons").empty();
            for (var i = 0; i < topics.length; i++) {
                a.attr("id", "looking");
                a.attr("data-search", topics[i]);
                a.text(topics[i]);
                $("#myButtons").append(a);
            };

        };

        displayButtons();

        $(document).on("click", "#looking", displayNew);

        // function pausePlay() {
        //     if (state === "still") {
        //         $(this).attr("src", $(this).attr("data-animate"));
        //         $(this).attr("data-state", "animate");
        //       } else {
        //         $(this).attr("src", $(this).attr("data-still"));
        //         $(this).attr("data-state", "still");
        //   };

        // };





    }



})
