$(document).ready(function() {
      $('#load_data').click(function() {
          $.ajax({
            url: "/index.js",
            method : "POST",
            dataType: "text",
            success: function(data) {
              console.log(data);
            }
            //fail : function(data):
          });
        });
      });
