const bg = require("../sprites/bg.png");

export class Loader {
  constructor(loader) {
    this.loader = loader;
  }

  preload() {
    // 메서드를 호출, 로드에 필요한 모든 리소스를 지정함
    this.loader.add("bg", bg);
    // 로드 메서드를 호출하여 첫 번째 단계에서 모든 리소스 로드
    this.loader.load((loader, resources) => {
      console.log(resources);
    });
  }
}
