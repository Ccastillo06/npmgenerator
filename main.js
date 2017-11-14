$(document).ready(() => {
  var express = 'express newProject --ejs -- git';
  var npm = 'npm i --save mongodb mongoose nodemon'

  $('#form').on('submit', (e) => {
    npm = 'npm i --save mongodb mongoose nodemon'
    e.preventDefault();
    $("#form").children('input').each(function() {
      if ($(this).is(':checked')) {
        let pack = newPackage($(this));
      }
    });
    $('#express').text(express)
    $('#npm').text(npm)
  });

  function newPackage(package) {
    let newPack = package[0].attributes.name.value;
    npm += ` ${newPack}`;
  }
});
