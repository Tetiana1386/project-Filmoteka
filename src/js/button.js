export default class MyLibraryBtns {
  constructor({ selector}) {
    this.refs = this.getRefs(selector);

    // hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    // refs.label = refs.button.querySelector('.js-nav-library');
    // refs.spinner = refs.button.querySelector('.spinner');

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    //   this.refs.label.textContent = 'Show more';
    //   this.refs.label.classList.add('nav-link-current');
    // this.refs.spinner.classList.add('is-hidden');
  }

  disable() {
    this.refs.button.disabled = true;
    // this.refs.label.textContent = 'Loading...';
    // this.refs.spinner.classList.remove('is-hidden');
  }

  // show() {
  //   this.refs.button.classList.remove('is-hidden');
  // }

  // hide() {
  //   this.refs.button.classList.add('is-hidden');
  // }

//   showEnd() {
//     this.refs.button.disabled = true;
//     this.refs.button.classList.remove('is-hidden');
//     this.refs.button.classList.add('end');
//     this.refs.label.textContent = 'End';
//     this.refs.spinner.classList.add('is-hidden');
//   }

//   removeEnd() {
//     this.refs.button.classList.remove('end');
//   }
}