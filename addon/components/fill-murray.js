import Ember from 'ember';
import layout from '../templates/components/fill-murray';

export default Ember.Component.extend({
  layout: layout,
  height: 100,
  width:  100,

  src: Ember.computed('height', 'width', {
    get() {
      let base = 'http://www.fillmurray.com/';
      let url = `${base}${this.get('width')}/${this.get('height')}`;

      return url;
    }
  })
});
