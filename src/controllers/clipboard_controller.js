import { Controller } from '@hotwired/stimulus';

export default class extends Controller {
  static targets = ['source'];
  static classes = ['supported'];

  connect() {
    navigator.permissions
      .query({ name: 'clipboard-write' })
      .then((result) => {
        if (result.state === 'granted') {
          this.element.classList.add(this.supportedClass);
        }
      })
      .catch((err) => {
        if (navigator.userAgent.includes('Firefox/') && navigator.clipboard) {
          this.element.classList.add(this.supportedClass);
        }
      });
  }

  copy() {
    navigator.clipboard.writeText(this.source);
  }

  copy(event) {
    event.preventDefault();
    this.sourceTarget.select();
    document.execCommand('copy');
  }

  get source() {
    return this.sourceTarget.value;
  }
}
