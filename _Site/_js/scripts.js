$(document).ready(function() {
     $('#urlForm').submit( function() {
										company = $('#site-url').val();
          goUrl = 'http://' + company + '.thecodemotel.com/';
										window.location = goUrl;
          return false;
     });
});

$('#site-url').on('input', function() {
				$('#form-tooltip').hide();
});
