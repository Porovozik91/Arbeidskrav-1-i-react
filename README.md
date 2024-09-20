Prosjektbeskrivelse 

Dette er et spill der målet er å klikke på poteter for å samle poeng i løpet av 60 sekunder. 
Spillet består av flere komponenter. 


Komponenter: 

  App.jsx 
  
  *Håndterer navigasjon, spilltilstand og poengsum. 
  *Administrerer timeren og ruter brukeren mellom spillskjermer. 

 
StartMenu.jsx 

*Viser instruksjoner, leaderboard og brukernavn-innskriving for å starte spillet. 


GameScreen.jsx 

*Viser brukernavn, poengsum og tid igjen. 

*Henter inn spilllogikk fra gameLogic.jsx for å generere og håndtere potetfigurer. 

 

EndGame.jsx 

  *Viser endelig poengsum, riktige/gale klikk. 
  *Gir muligheter til å prøve igjen eller starte et nytt spill. 


Howto.jsx 

*Viser instruksjoner om hvordan man spiller spillet. 

LeaderBoard.jsx 

*Viser leaderboard med de 15 beste poengsummene fra lokal lagring. 


PlayGame.jsx 

*Håndterer innskriving av brukernavn og sjekker om brukernavnet eksisterer på leaderboardet før spillet starter. 


Gamelogic.jsx 

*Håndterer generering av spillfigurer, poengberegning og spillets dynamikk. 
*Tar seg av klikkhendelser og oppdaterer poengsummen. 

 

Figures.js 

*Importer figurer og generer tilfeldige figurer. 

 

gameTimer.js 

*Timerfunksjoner for spillet. 

 

ScoreStorage.js 

*Lagring og henting av poengsummer fra lokal lagring. 

