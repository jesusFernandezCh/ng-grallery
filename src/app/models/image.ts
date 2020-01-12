export class Image {
  private id:string ;
  private title:string;
  private description:string;
  private thumbnail:string;
  private imageLink:string;

  constructor(id:string, title:string, description:string, thumbnail:string, imageLink:string)
  {
    this.id           = id;
    this.title        = title;
    this.description  = description;
    this.thumbnail    = thumbnail;
    this.imageLink    = imageLink;
  }

  public getId()
  {
    return this.id;
  }

  public getTitle()
  {
    return this.title;
  }

  public getDescription()
  {
    return this.description;
  }

  public getThumbnail()
  {
    return this.thumbnail;
  }

  public getImageLink()
  {
    return this.imageLink;
  }
}
