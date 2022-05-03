import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  flash(event) {
    console.log('event in flash', event);
    const {
      detail: { content },
    } = event;

    console.log('content in flash', content);
  }
}
