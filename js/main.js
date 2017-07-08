//alert("existe");
// 
$(document).ready(function() {
	/**/
	$.get("https://pokeapi.co/api/v2/pokedex/1/", function(x) {
		//console.log(x);
		// array 721
		x.pokemon_entries.forEach(function(element, i){
			// elemento
			//console.log(element.pokemon_species.name[0]);
			var numero = i + 1;
			$(".pokemon").append("<div class='elemento'><a href='#' id='modal" + numero + "'><img src='http://pokeapi.co/media/img/" + numero + ".png'>" + element.pokemon_species.name + "</a></div>")
			//$(this).addClass("parrafo-box");
			// http://pokeapi.co/media/img/3.png working img
			//$(".pokemon").append("<img src='http://pokeapi.co/media/img/" + numero + ".png'>")
			$("#modal" + numero).click(function() {
				console.log("existe" + numero);
				$("#myModal").modal("show");
				$( "h2" ).remove( ".titulo" );
				$(".modal-title").append("<h2 class='titulo'>" + element.pokemon_species.name + "</h2>");
			});
		})
	});
});