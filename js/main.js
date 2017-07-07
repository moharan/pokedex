//alert("existe");
// 
$(document).ready(function() {
	/**/
	$.get("https://pokeapi.co/api/v2/pokedex/1/", function(x) {
		//console.log(x);
		// array 721
		x.pokemon_entries.forEach(function(element, i){
			// elemento
			console.log(element.pokemon_species.name[0]);
			var numero = i + 1;
			$(".pokemon").append("<div class='elemento'><img src='http://pokeapi.co/media/img/" + numero + ".png'>" + element.pokemon_species.name + "</div>")
			// http://pokeapi.co/media/img/3.png working img
			//$(".pokemon").append("<img src='http://pokeapi.co/media/img/" + numero + ".png'>")
		})
	});
});