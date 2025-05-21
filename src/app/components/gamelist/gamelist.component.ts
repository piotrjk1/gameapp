import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gamelist',
  imports: [CommonModule],
  templateUrl: './gamelist.component.html',
  styleUrl: './gamelist.component.css'
})
export class GamelistComponent {
  games: string[] = ['World of warcraft', 'Osu', 'The sims 4'];
}
