import { smartPhoneWidthCheck, deviceCheck } from '../helper/helper'

export default ()=> {
  
  const isSpScrollXElemnt = document.querySelector('#isSpScroll');
  if( !isSpScrollXElemnt ) {
    return;
  } else {
    // ua判定は端末依存になるから画面幅で判定
    if( smartPhoneWidthCheck() ) {
      update();
    }

    // resize
    window.addEventListener('resize', () => {
      if( smartPhoneWidthCheck() ) {
        update();
      } else {
        isSpScrollXElemnt.style.width = '';
      }
    });
  }


  function update() {
    let items = isSpScrollXElemnt.children;
    // HTMLCollectionのため
    items = Array.prototype.slice.call(items);
    let parentSize = 0;

    items.forEach((elm, idx)=> {
      let item = window.getComputedStyle(elm);
      console.log(elm , idx)
      let property = {
        w: item.width.split('px')[0],
        mr: item.marginRight.split('px')[0]
      };

       // objectのため
      Object.keys(property).forEach((key, index)=> {
        parentSize += Number(property[key]);
        console.log(parentSize)
      });

      isSpScrollXElemnt.style.width = parentSize + 'px';

    });
  }

}

