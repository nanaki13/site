import { Image } from "./image";

export interface Oeuvre {
    id:number;
    title:string;
date:string;
description:string;
theme_key:number;
image_key:number;
dimension:string;
enable:number;
images:Array<Image>;
    
    
  }

 


  