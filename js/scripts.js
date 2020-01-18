$(document).ready(function(){

  $("#formBox").submit(function(event){
    event.preventDefault();


    // Variables
    var aName = $("#aNameInput").val();
    var aClass = $("#aClass").val();

    // Conditionals

    if (aClass === "knight") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();
      $("#none").hide();

      $("span#knightName").append(`${aName}`);
    } else if (aClass === "wizard") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#knight").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();
      $("#none").hide();

      $("span#wizardName").append(`${aName}`);
    } else if (aClass === "archer") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#wizard").hide();
      $("#knight").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();
      $("#none").hide();

      $("span#archerName").append(`${aName}`);
    } else if (aClass === "rogue") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#knight").hide();
      $("#cleric").hide();
      $("#druid").hide();
      $("#none").hide();

      $("span#rogueName").append(`${aName}`);
    } else if (aClass === "cleric") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#knight").hide();
      $("#druid").hide();
      $("#none").hide();

      $("span#clericName").append(`${aName}`);
    } else if (aClass === "druid") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#knight").hide();
      $("#none").hide();

      $("span#druidName").append(`${aName}`);
    } else {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#copyright").hide();
      $("#knight").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();

      $("span#noneName").append(`${aName}`);
    }

    // restart button
    $("#restart").click(function(){
      location.reload(true);
    })

    // getName function
    function getName(userName) {
      return userName;
    }

    // getClass function
    function getClass(userClass) {
      return userClass;
    }

    // start button  
    $("#start").click(function(){
      $(location).attr("href", "./startAdventure.html?class=" + getClass(aClass) + "&name=" + getName(aName))
    }) 
    
  })


})