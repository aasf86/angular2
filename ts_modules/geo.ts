export class Point {
    private _x : number = 0;
    private _y : number = 0;
    private _z : number = null;
    constructor( p: {x:number;y:number;z?:number;}){
        this._x = p.x;
        this._y = p.y;
        if (p.z)
            this._z = p.z;
    }
    is3d():boolean {
        return this._z != null;
    }
}
