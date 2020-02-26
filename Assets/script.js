// js for professional materials
// written by Letty Bedard

$(function(){
  
  //  DECLARATIONS
  const details = [
    {
      title: "Project 1: DOGS",
      image: "project1.png",
      description: "A small group project where were tasked with designing our own site. We decided to make one that would give dog owners the weather and dog friendly businesses for the location they entered.",
      gitLink: "https://yttel.github.io/DOGS/",
      gitSite: "https://github.com/yttel/DOGS"
    },{
      title: "JavaScript Coding Quiz",
      image: "quiz.png",
      description: "Basic quiz with saved high scores and a timer to see how you stack up on basic JavaScript.",
      gitLink: "https://yttel.github.io/javascript-quiz/",
      gitSite: "https://github.com/yttel/javascript-quiz"
    },{
      title: "Workday Scheduler",
      image: "workday.png",
      description: "Workday scheduler that allows the user to enter their tasks for the day. Saved even when refreshed and updates the colors of the time slots based on the current time.",
      siteLink: "https://yttel.github.io/workday-scheduler/",
      gitLink: "https://github.com/yttel/workday-scheduler"
    },{
      title: "Weather Dashboard",
      image: "weather.png",
      description: "User enters the location they wish to search, yielding the current weather and 5 day forecast. Recent places searched is saved on the sidebar, and are clickable so they can be revisited later.",
      siteLink: "https://yttel.github.io/weather-dashboard/",
      gitLink: "https://github.com/yttel/weather-dashboard"
    }];

  //  REFERENCES

  //  FUNCTIONS

  //dump info from details[index] into the place
  const drawCard = (index) => {
    let $cardDetail = $("#cardDetail");
    const {title, image, description, siteLink, gitLink} = details[index];
    $cardDetail.empty();
    $cardDetail.html(`
    <div class="row">
      <div class="col-lg-6 col-md-6 col-sm-12">
        <img class="img-fluid img-thumbnail" src="./Assets/Images/${image}">
      </div>

      <div class="col-lg-6 col-md-6 col-sm-12">
        <h2 class="px-1">${title}</h2>
        <a class="px-1" href="${siteLink}" target="_blank">Link to Live site</a><br>
        <a class="px-1" href="${gitLink}" target="_blank">Link to GitHub</a>
        <p class="px-1">${description}</p>
      </div>
    </div>`);
  }

  const hideAll = () => {
    $("#mainAttraction").children().each(function() {
        $(this).addClass("isHidden");
    });
  };

  //hide all panes, show #paneTitle
  const showPane = (paneTitle) => {
    hideAll();
    $(`#${paneTitle}`).removeClass("isHidden");
  };

    
  //  EVENT LISTENERS

  $(document).on("click", "#aboutMe", function(){
    showPane("aboutMePane");
  });  
  $(document).on("click", "#portfolio", function(){
    showPane("portfolioPane");
  });  
  
  //when card is clicked, redraw detail pane with info from details array of objects
  $(document).on("click", ".card", function(){
    drawCard($(this).attr("data-index"));
  });
});