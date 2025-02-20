export interface Developer {
  develop(): void;
}

export class FrontendDeveloper implements Developer {
  public develop(): void {
    this.writeHtmlCode();
  }

  public writeHtmlCode(): void {
    // some method
  }
}

export class BackendDeveloper implements Developer {
  public develop(): void {
    this.writeJavaScriptCode();
  }

  public writeJavaScriptCode(): void {
    // some method
  }
}

export class SoftwareProject {
  public developers: Developer[];

  public createProject(): void {
    this.developers.forEach((developer: Developer) => {
      developer.develop();
    });
  }
}
