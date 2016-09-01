<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8" />
        <title>Pokémon GO assistance for the LAZY | Simple Backbone.js Example </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
		<link href="http://fonts.googleapis.com/css?family=PT+Sans:400,700" rel='stylesheet' />
		<link href="css/styles.css" rel="stylesheet" />

    </head>

     <body class="response">

    
      <div id="main" class="response-text container">
	
          <h1>SERIOUSLY? </h1>
          <h2>Go outside and play or no Pokémon for you! Here is your wish list...take it with you :-)	</h2>
          <p>
          <?php
	    echo htmlspecialchars(implode(array_keys($_POST), ', '));
          ?>
          </p>
    </div>
    </div> <!-- /container -->
    <!-- JavaScript Includes -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>