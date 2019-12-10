$("#current-day").text(moment().format("dddd, MMM Do"));
var container = $("#schedule-container");

for(var i = 0; i < schedule.length; i++){

    var row = $("<div>");
    row.addClass("row");
    container.append(row);

    var time = $("<div>");
    time.addClass("col-3 col-sm-2 col-md-1 text-right border-secondary border-top border-right pt-3");
    time.text(schedule[i].time);
    row.append(time);

    var textDiv = $("<div>");
    textDiv.addClass("col-6 col-sm-8 col-md-10 no-padding");
    row.append(textDiv);
    var textArea = $("<textarea>");
    textArea.attr("rows","3");
    textArea.attr("data-time", (i+9));
    textArea.addClass("form-control bg-light border-white border-left-0");
    textDiv.append(textArea);

    var button = $("<div>");
    button.addClass("btn btn-info col-3 col-sm-2 col-md-1");
    row.append(button);
    var buttonImg = $("<img>");
    buttonImg.addClass("button-img");
    buttonImg.attr("src", "assets/images/padlock-3-512.png");
    buttonImg.attr("alt", "Save");
    button.append(buttonImg);
}
  