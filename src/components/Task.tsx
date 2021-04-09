class Task {
  private _status: boolean;
  private _label: string;
  private _content: string;
  readonly created_at: Date;
  private _updated_at: Date | null;

  constructor() {
    this._label = '';
    this._status = true
    this._content = ''
    this.created_at = new Date(Date.now())
    this._updated_at = null
  }

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get updated_at(): Date | null {
    return this._updated_at;
  }

  set updated_at(value: Date | null) {
    this._updated_at = value;
  }
}

export default Task;


