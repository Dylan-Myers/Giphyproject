

//$document.ready(function() {

    var topics = [];

    var x = $(this).data("search");
	//console.log(x);

	var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=FmLvJ70vpE5u9rPiJjIlZ4vAtkgwB7Q3";

    //console.log(queryURL)
 function displayGif(){
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response){
        var results = response.data;
        //console.log(results);
        for (var i = o; i < results.length; i++) {
            var newDiv = $("<div class='col-md-4'>");

            var rating= results[i].rating;
            var showImage = $("<img>");
            var p = $("<p>").text("rating: " +  rating);


            showImage.addClass("newgiphy");
            newDiv.append(p);
            newDiv.append(showImage);
            $("#gifs").prepend(newDiv);
        };
    });

    $("#addSearch").on("click", function(event){
        event.preventDefault();
        var newSearch = $("#newInput").val().trim();
        topics.push(newSearch);
        //console.log(topics);
        $("newInput").val('');
        displayButtons();
    });

    function displayButtons() {
        $("#myButtons").empty();
        for (var i = 0; i < topics.length; i++) {
            var a = $('<button class="btn btn-primary">');
            a.attr("id", "looking");
            a.attr("data-search", topics[i]);
            a.text(topics[i]);
            $("#myButtons").append(a);
        };
    };
 };
    //displayButtons();

    $(document).on("click", "#looking", displayGif);


//})