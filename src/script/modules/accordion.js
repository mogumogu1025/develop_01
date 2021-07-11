import {TweenMax, Power3, Bounce} from 'gsap';

class Accordion {
  constructor(elm) {
    this.elm = elm;
  }

  action() {
    const openClass = 'is-opened';
    let flag = false;
    this.elm.addEventListener('click', ()=> {
      const next = this.elm.nextElementSibling;
      if( flag && this.elm.classList.contains(openClass)) {
        this.elm.classList.remove(openClass);
        TweenMax.to( next, 0.5,{
          'height': 0,
          'opacity': 0,
          ease: Power3.easeInOut,
          onComplete: () => {
            TweenMax.to( next, 0.5,{
              'visibility': 'hidden',
            });
            flag = false;
          }
        });
      } else if( !flag && !this.elm.classList.contains(openClass) ){
        this.elm.classList.add(openClass);
        TweenMax.to( next, 0.5,{
          'height': 'auto',
          'visibility': 'visible',
          'opacity': 1,
          ease: Power3.easeInOut,
          onComplete: () => {
            flag = true;
          }
        });
      }
    })
  }
}

export default ()=> {
  const accordionElm = document.querySelectorAll('.js-accordion');
  if( accordionElm.length > 0 ) {
    for(let i = 0; i < accordionElm.length; i++ ) {
      let elm = new Accordion( accordionElm[i]);
      elm.action();
    }
  } else {
    return;
  }
}


