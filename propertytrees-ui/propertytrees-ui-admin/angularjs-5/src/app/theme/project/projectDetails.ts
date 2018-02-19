import { Injectable } from '@angular/core';

@Injectable()
export class ProjectDetails {
constructor() { }
}

@Injectable()
export class FloorPlan {
fileToUpload: FileList ;
constructor() { }
}

export class Specifications {
constructor() { }
}

export class Location {
constructor() { }
}

export class Banner {
constructor() { }
}

export class Gallery {
constructor() { }
}

@Injectable()
export class Plan {
constructor(public floorPlan : FloorPlan) { }
}

