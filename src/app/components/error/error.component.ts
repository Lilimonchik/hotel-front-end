import {Component, OnInit} from '@angular/core';
import {timer} from "rxjs";
import {animate, style, transition, trigger} from "@angular/animations";
import {AuthService} from "../../services/auth.service";

const enterTransition = transition(':enter',[
  style({
    opacity: 0,
  }),
  animate("1s ease-in",style({opacity: 1})),
]);
const exitTransition = transition(':leave',[
  style({
    opacity: 1,
  }),
  animate("1s ease-out", style({opacity: 0})),
]);

const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);
@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
  animations: [fadeIn,fadeOut],
})
export class ErrorComponent implements OnInit {
  constructor(private auth: AuthService) {
  }
  text: string;
  progress: number;
  duration: number = 8; // Total duration in seconds
  interval: number = 100; // Update interval in milliseconds
  steps: number;
  stepDuration: number;
  ngOnInit() {
    this.text = this.auth.sendText();
    this.steps = this.duration * 10;
    this.stepDuration = this.duration * 1000 / this.steps;

    const timer$ = timer(0, this.stepDuration);
    const sub = timer$.subscribe((step) => {
      this.progress = (step + 1) * 100 / this.steps;

      if (step === this.steps - 1) {
        sub.unsubscribe();
      }
    });
  }
}
