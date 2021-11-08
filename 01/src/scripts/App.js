import * as PIXI from "pixi.js";
import { Loader } from "./Loader.js";
import { MainScene } from "./MainScene.js";

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
    this.scene = new MainScene();
    // 이 컨테이너를 메인 시스템 컨테이너에 추가하면
    // 컨테이너가 사용되어 짐
    this.app.stage.addChild(this.scene.container);
    console.log(this.app);
  }
}
