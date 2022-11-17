$(function () {
  var pokemonSearch;
  var defaultPokemon = '1';
  var defaultPokemonData;

  var initFunc = function () {
    var defaultPokemonData = $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + defaultPokemon,
      method: 'GET',
    });
    defaultPokemonData.done(function (data) {
      defaultPokemonData = data;
      $('.loading-container').removeClass('active');
      $('.pokedex h3').text(data.species.name);
      $('.poke-img img').attr('src', data.sprites.front_default);
    });

    defaultPokemonData.fail(function (jqXHR, textStatus, error) {
      alert('Request failed: ' + textStatus);
    });
  };

  initFunc();

  $('.btn').on('click', function () {
    pokemonSearch = $('.pokedex input').val();

    var request = $.ajax({
      url: 'https://pokeapi.co/api/v2/pokemon/' + pokemonSearch,
      method: 'GET',
    });

    request.done(function (data) {
      $('.pokedex h3').text(data.species.name);
      $('.poke-img img').attr('src', data.sprites.front_default);
      console.log(data);
    });

    request.fail(function (jqXHR, textStatus) {
      alert('Request failed: ' + textStatus);
    });
  });
});
