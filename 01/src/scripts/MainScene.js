import * as PIXI from "pixi.js";
import { Globals } from "./Globals.js";

// PIXI.Container
// 화면에 표시할 수 있는 개체를 위한 일종의 저장소
// 애니메이션, 스프라이트, 그래픽 ...

// 하나의 컨테이너는 이미 pixi에 의해 자동 생성 됨
// (메인시스템 컨테이너)

export class MainScene {
  constructor() {
    this.container = new PIXI.Container();
    this.createBackground();
  }

  // PIXI.Texture 클래스 인스턴스는 Sprite에 대한 매개변수로 전달되어야 함
  createBackground() {
    console.log(Globals);
    this.bg = new PIXI.Sprite(Globals.resources["bg"].texture);
    this.container.addChild(this.bg);
    // 배경화면 전체
    this.bg.width = window.innerWidth;
    this.bg.height = window.innerHeight;
  }
}
