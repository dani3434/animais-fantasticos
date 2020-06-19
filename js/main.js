
import ScrollSuave from './modules/scroll-suave.js';
import animacaoScroll from './modules/anima-scroll.js'
import Acordion from './modules/acordion.js';
import TabNav from './modules/tab-nav.js';
import Modal from './modules/modal.js';
import tooltip from './modules/tooltip.js';
import dropdown from './modules/dropdown-menu.js';
import menuMobile from './modules/menu-mobile.js';
import funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';


const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();


const acordion = new Acordion('[data-anime="acordion"] dt');
acordion.init();

const tabNav = new TabNav('[data-tab="menu"] li','[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]','[data-modal="fechar"]','[data-modal="container"]');
modal.init();

tooltip();
dropdown();
menuMobile();
funcionamento();
fetchAnimais();
fetchBitcoin()
animacaoScroll();
