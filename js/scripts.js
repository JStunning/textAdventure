$(document).ready(function(){

  $("#formBox").submit(function(event){
    event.preventDefault();


    // Variables
    var name = $("#aNameInput").val();
    var aClass = $("#aClass").val();

    // Conditionals

    if (aClass === "knight") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();

      $("span#knightName").append(`${name}`);
    } else if (aClass === "wizard") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#knight").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();

      $("span#wizardName").append(`${name}`);
    } else if (aClass === "archer") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#wizard").hide();
      $("#knight").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();

      $("span#archerName").append(`${name}`);
    } else if (aClass === "rogue") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#knight").hide();
      $("#cleric").hide();
      $("#druid").hide();

      $("span#rogueName").append(`${name}`);
    } else if (aClass === "cleric") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#knight").hide();
      $("#druid").hide();

      $("span#clericName").append(`${name}`);
    } else if (aClass === "druid") {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#knight").hide();

      $("span#druidName").append(`${name}`);
    } else {
      $(".userAdventurer").show();

      $("#submit").hide();
      $("#knight").hide();
      $("#wizard").hide();
      $("#archer").hide();
      $("#rogue").hide();
      $("#cleric").hide();
      $("#druid").hide();

      $("span#druidName").append(`${name}`);

    }



  })


})