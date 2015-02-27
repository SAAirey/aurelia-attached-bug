import {Behavior} from 'aurelia-framework';

export class Layout {
  static metadata() {
    return Behavior
      .customElement('layout');
  }

  attached() {
    console.log('custom element attach');
  }
}
