import { Component, OnInit, HostBinding } from '@angular/core';

import { GamesService } from "../../services/games.service";
import { Game } from '../../models/Game'

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  games: Game[] = []
  constructor( private gamesService:GamesService) { }

  ngOnInit() {
    this.getGames()
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      (res) => {
        this.games = res['games'];
      },
      err => {console.log(err);}
    );
  }

  deleteGame(id: number){
    this.gamesService.deleteGame(id).subscribe(
      (res) => {
        console.log(res)
        this.getGames()  
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
