import { LoaderConfig } from "./LoaderConfig";

export class Loader {
  constructor(loader) {
    this.loader = loader;
    this.resources = LoaderConfig;
  }

  preload() {
    return new Promise((resolve) => {
      // 메서드를 호출, 로드에 필요한 모든 리소스를 지정함
      for (let key in this.resources) {
        this.loader.add(key, this.resources[key]);
      }
      // 로드 메서드를 호출하여 첫 번째 단계에서 모든 리소스 로드
      this.loader.load((loader, resources) => {
        // 모든게 로드 되면 실행 (콜백)
        console.log("resources loaded", resources);
        resolve();
      });
    });
  }
}
