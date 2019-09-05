import { Component, OnInit, HostBinding } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/Game';

import { GamesService } from '../../services/games.service'

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  isEditingAGame: boolean = false;

  game: Game = {
    id:0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  }

  constructor(
      private gameService: GamesService,
      private router: Router,
      private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    const params = this.activatedRoute.snapshot.params;
    if(params.id){
      this.gameService.getGame(params.id).subscribe( 
        (res) =>{
          this.game = res['game'];
          this.isEditingAGame = true;
        },
        (err) =>{
          console.log(err);
        }
      );
    }
  }

  updateGame(){
    console.log('asdasdsa')
    this.gameService.updateGame(this.game, this.game.id).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    
    this.gameService.saveGame(this.game).subscribe( 
      (res) => {
        console.log(res)
        this.router.navigate(['/games']);
      },
      (err) => {
        console.log("error: "+err)
      }
    )
  }

}
