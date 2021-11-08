import { LoaderConfig } from "./LoaderConfig";
import { Globals } from "./Globals.js";

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
        // 로드된 모든 리소스는 전역 변수 global에 저장되며,
        // 이 변수는 다음에서 엑세스됨(우리 프로젝트의 모든 클래스)
        // 즉, 동일한 클래스에서 배경 텍스처를 사용하여 생성할 수 있음
        Globals.resources = resources;
        // 모든게 로드 되면 실행 (콜백)
        console.log("resources loaded", resources);
        resolve();
      });
    });
  }
}
