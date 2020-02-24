// js for weather dashboard
// written by Letty Bedard

$(function(){
  
  //  DECLARATIONS
  let recentList;

  //  REFERENCES
  let $aboutMe = $("#aboutMe");
  let $portfolio = $("#portfolio");
  let $cards = [
    $("#card1"), 
    $("#card2"), 
    $("#card3"), 
    $("#card4"), 
    $("#card5")];

  //  FUNCTIONS
    
  //  EVENT LISTENERS
  
  //search button is pushed, add search term to top of recent list and show this place
  $(document).on("click", "#srchBtn", function(){
    recentList = JSON.parse(localStorage.getItem("recentList"));
    if (recentList === null){
      recentList = [];
    }
    let thisInput = $search.val().trim();
    //assume good input for now
    if ($.isNumeric(thisInput)){
      recentList.unshift({name: null, zip: thisInput});
    }
    else {
      recentList.unshift({name: thisInput, zip: null});
    }
    localStorage.setItem("recentList", JSON.stringify(recentList));
    renderAll();
  });

  //when clear recent is clicked, empty that div and clear local
  $(document).on("click", "#reset", function(){
    localStorage.removeItem("recentList");
    renderAll();
  });

  //when one of the recent locations is clicked show that weather
  $(document).on("click", ".recentPlace", function(){
    $current.empty()
    let goHere = $(this).attr("data-place");
    if ($.isNumeric(goHere)){
      getWeatherByZip(goHere);
    }
    else {
      getWeatherByName(goHere);
    }
  });

renderAll();
  
});