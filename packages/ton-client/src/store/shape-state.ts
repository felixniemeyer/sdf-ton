export type ShapeStateType = {
  twist?: number;
  bend?: number;
  bubbles?: number;
  shape?: string;
  fx?: string;
  note?: string;
};

type UpdateFn = (shapeId: number, newShapeState: ShapeStateType) => void;

class ShapeState {
  shapeId: number;

  private _updateFn: UpdateFn;

  private _twist = 0;
  private _bend = 0;
  private _bubbles = 0;
  private _shape = 'cube';
  private _fx = 'none';
  private _note = 'c';

  private _state: ShapeStateType = {
    twist: this._twist,
    bend: this._bend,
    bubbles: this._bubbles,
    shape: this._shape,
    fx: this._fx,
    note: this._note,
  };

  constructor(shapeId: number, updateFn: UpdateFn) {
    this.shapeId = shapeId;
    this._updateFn = updateFn;
  }

  set twist(newTwist: number) {
    this._twist = newTwist;
    this._updateFn(this.shapeId, { twist: newTwist });
  }

  get twist() {
    return this._twist;
  }

  set bend(newBend: number) {
    this._bend = newBend;
    this._updateFn(this.shapeId, { bend: newBend });
  }

  get bend() {
    return this._bend;
  }

  set bubbles(newBubbleLevel: number) {
    this._bubbles = newBubbleLevel;
    this._updateFn(this.shapeId, { bubbles: newBubbleLevel });
  }

  get bubbles() {
    return this._bubbles;
  }

  set shape(newShape: string) {
    this._shape = newShape;
    this._updateFn(this.shapeId, { shape: newShape });
  }

  get shape() {
    return this._shape;
  }

  set fx(newFx: string) {
    this._fx = newFx;
    this._updateFn(this.shapeId, { fx: newFx });
  }

  get fx() {
    return this._fx;
  }

  set note(newNote: string) {
    this._note = newNote;
    this._updateFn(this.shapeId, { note: newNote });
  }

  get note() {
    return this._note;
  }

  set state(newState: ShapeStateType) {
    this._twist = newState.twist || this._twist;
    this._bend = newState.bend || this._bend;
    this._bubbles = newState.bubbles || this._bubbles;
    this._shape = newState.shape || this._shape;
    this._fx = newState.fx || this._fx;
    this._note = newState.note || this._note;

    Object.assign(this._state, newState);
  }

  get state() {
    return this._state;
  }
}

export default ShapeState;
