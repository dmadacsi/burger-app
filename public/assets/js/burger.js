// // Make sure we wait to attach our handlers until the DOM is fully loaded.

$(function() {
    $(".change-state").on("click", function(event) {
      var id = $(this).data("id");
      var newState = $(this).data("newstate");
  
      var newBurgerState = {
        devoured: newState
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newBurgerState
      }).then(
        function() {
          console.log("changed state to", newState);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#bu").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-burger").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });



  
//   app.get("/", function (req, res) {
//     connection.query("SELECT * FROM burgers;", function (err, data) {
//        if (err) {
//       return res.status(500).end();
//     }

//     res.render("index", { movies: data });
//   });
// });

// app.post("/burgers", function (req, res) {
//     connection.query("INSERT INTO burgers (movie) VALUES (?)", [req.body.burger], function (err, result) {
//         if (err) {
//             return res.status(500).end();
//         }

//         // Send back the ID of the new todo
//         res.json({
//             id: result.insertId
//         });
//         console.log({
//             id: result.insertId
//         });
//     });
// });

// app.put("/burgers/:id", function (req, res) {
//     connection.query("UPDATE burgers SET burger = ? WHERE id = ?", [req.body.burger, req.params.id], function (err, result) {
//         if (err) {
//             // If an error occurred, send a generic server failure
//             return res.status(500).end();
//         } else if (result.changedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         res.status(200).end();

//     });
// });



// app.delete("/burgers/:id", function (req, res) {
//     connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], function (err, result) {
//         if (err) {
//             // If an error occurred, send a generic server failure
//             return res.status(500).end();
//         } else if (result.affectedRows === 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         }
//         res.status(200).end();

//     });
// });