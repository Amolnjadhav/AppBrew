$(document).ready(function() {
      $('#kanye').click(function() {
          $.ajax({
            url: "/kanye",
            method : "POST",
            dataType: "text",
            success: function(data) {
              console.log(data);
              $('#text').html(data);
            }
          });
        });
        $('#quotes').click(function() {
            $.ajax({
              url: "/quotes",
              method : "POST",
              dataType: "text",
              success: function(data) {
                console.log(data);
                $('#text').html(data);
              }
            });
          });
          $('#superheros').click(function() {
              $.ajax({
                url: "/superheros",
                method : "POST",
                dataType: "text",
                success: function(data) {
                  console.log(data);
                  $('#text').html(data);
                }
              });
            });
            $('#supervillen').click(function() {
                $.ajax({
                  url: "/supervillen",
                  method : "POST",
                  dataType: "text",
                  success: function(data) {
                    console.log(data);
                    $('#text').html(data);
                  }
                });
              });
      });
