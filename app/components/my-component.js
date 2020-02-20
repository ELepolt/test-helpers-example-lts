import Component from '@ember/component';
import { assert } from '@ember/debug';

export default Component.extend({
  init() {
    this._super(...arguments);
    assert('test');
  }
});
