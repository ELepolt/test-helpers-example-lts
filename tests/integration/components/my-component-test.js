import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, setupOnerror } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | my-component', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    setupOnerror(function(err) {
      assert.equal(err.message, 'Assertion Failed: test');
    });
    await render(hbs`<MyComponent />`);
  });
});
