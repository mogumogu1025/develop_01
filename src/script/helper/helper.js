
export function deviceCheck() {
  const ua = navigator.userAgent;
  if(ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0){
    return 'smartphone';
  }else if(ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0){
    return 'tablet';
  }else{
    return 'other';
  }
}

export function smartPhoneWidthCheck() {
  const deviceWidth = window.innerWidth;
  let smartPhoneWidth = deviceWidth >= 768 ? false : true;
  return smartPhoneWidth;
}