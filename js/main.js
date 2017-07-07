//alert("existe");
$(document).ready(function() {
	/**/
	$.get("http://pokeapi.co/api/v2/pokedex/1/", function(x) {
		console.log(x);
		// array 721
		x.pokemon_entries.forEach(function(element){
			// elemento
			console.log(element.pokemon_species.name[0]);
			$(".pokemon").append("<div class='elemento'>" + element.pokemon_species.name + "</div>")
		})
	});
	/*ajax
	$.ajax({
		url: '/path/to/file',
		type: 'default GET (Other values: POST)',
		dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
		data: {param1: 'value1'},
	})
	.done(function() {
		console.log("success");
	})
	.fail(function() {
		console.log("error");
	})
	.always(function() {
		console.log("complete");
	});*/
});