import _ from 'lodash';
import './index'
import './style.css'
// import Icon from './icon.svg'
import printMe from './print.js'

  function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button')

   // Lodash, currently included via a script, is required for this line to work
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // var myIcon = new Image();
    // myIcon.src = Icon;
    // element.appendChild(myIcon);

    btn.innerHTML='click me and check the console';
    btn.onclick = printMe;

    element.appendChild(btn)
    return element;
  }

  document.body.appendChild(component());