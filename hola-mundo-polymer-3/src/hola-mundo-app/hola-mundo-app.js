import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
/**
 * @customElement
 * @polymer
 */
class HolaMundoApp extends PolymerElement {

  constructor() {
    super();
  }
  static get template() {
    return html`
      <style>
        :host {
          background-color: red;
          display: block;
        }
      </style>
      <paper-input label="floating label"></paper-input>
      <h2>Hola [[prop1]], tengo: [[edad]] anios</h2>
    `;
  }

  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'Andres'
      },
      edad: {
        type: Number
      }
    }
  }

  ready(){
    super.ready();
  
    setTimeout( ()=>{
      this.prop1="Erick"
    
    }, 3000)  ;
  }

}

  




window.customElements.define('hola-mundo-app', HolaMundoApp);
