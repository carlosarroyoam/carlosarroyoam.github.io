$(document).ready(function () {

  // When navbar is shown, attach onClick event to ".section-content, .nav-item"
  $('#mainNavbar').on('shown.bs.collapse', function () {
    $(".section-content, .nav-item, .navbar-brand").bind("click", function () {
      if ($('#navbarToggler').is(":visible"))
        $('#mainNavbar').collapse('hide');
    });
  });

  // When navbar is hidden, remove onClick event to ".section-content, .nav-item"
  $('#mainNavbar').on('hidden.bs.collapse', function () {
    $(".section-content, .nav-item, .navbar-brand").unbind("click");
  });

});