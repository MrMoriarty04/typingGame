import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem, random } from 'faker';
import { of } from 'rxjs';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  randomText = lorem.sentence();
  isHidden=false;
  userTyping="";

  onInput(event:Event):void {
  const input = event.target as HTMLInputElement;
  const value = input.value;

  this.userTyping=value;


    if(this.randomText==value)
      this.isHidden=true;
    else
      this.isHidden=false;
  } 


  letterColor(letter:string,i:number):string{

    
    if(this.userTyping[i]===letter)
      return "#25FF29";
    else if(this.userTyping[i]!==letter && this.userTyping.length>i)
      return "#FF0000";
    else
      return "gray";
  }

  reloadPage() {
  window.location.reload();
}


}
