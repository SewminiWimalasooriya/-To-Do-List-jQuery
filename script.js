$(document).ready(function() {
  $('#addTask').click(function() {
    let taskText = $('#taskInput').val();
    if (taskText !== "") {
      $('#taskList').append(`<li>${taskText} <button  class='delete'>❌</button></li>`);
      $('#taskInput').val('');
    }
  });

  // Mark task as completed
  $('#taskList').on('click', 'li', function() {
    $(this).toggleClass('completed');
  });

  // Delete task
  $('#taskList').on('click', '.delete', function(e) {
    e.stopPropagation();
    $(this).closest('li').fadeOut(300, function() {
      $(this).remove();
    });
  });
});
