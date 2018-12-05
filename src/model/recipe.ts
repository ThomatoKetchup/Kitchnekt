

export class Recipe {

  private _imageUrl : string;
  private _name : string;


  constructor(name: string, imageUrl: string ) {
    this._name = name;
    this._imageUrl = imageUrl;

  }


  get imageUrl(): string {
    return this._imageUrl;
  }

  get name(): string {
    return this._name;
  }
}
