<script>
    $(document).ready(function() {
      // Toggle sidebar
      $('#profileBtn').click(function(e) {
        e.stopPropagation();
        $('.profile-dropdown').toggle();
      });
  
      $(document).click(function() {
        $('.profile-dropdown').hide();
      });
  
      // Responsive Hamburger Menu Toggle
      $('.navbar-toggler').click(function() {
        $('#sidebar').toggleClass('collapsed');
      });
    });
  </script>