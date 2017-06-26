function PFC (player,Player){
  var feuille='feuille';
  var pierre='pierre';
  var ciseaux='ciseaux';
  
  pierre>ciseaux;
  feuille>pierre;
  ciseaux>feuille;
  
if(player>Player)
{
  return 'player1 wins'
}
else if (Player>player)
{
  return 'Player2 wins'
}
 else if (player==Player){
  return " no one wins.. EQUALITY!"
}

  
  
  
  
}

