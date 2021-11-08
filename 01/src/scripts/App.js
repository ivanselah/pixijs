import * as PIXI from "pixi.js";
import { Loader } from "./Loader.js";

export class App {
  run() {
    /* create canvas */
    // resizeTo: window 전체화면
    this.app = new PIXI.Application({ resizeTo: window });
    console.log(this.app);

    // 캔버스를 html에 삽입
    document.body.appendChild(this.app.view);

    /* load sprites */
    this.loader = new Loader(this.app.loader);
    this.loader.preload().then(() => this.start());
  }
  start() {
    console.log("The game stated");
  }
}
