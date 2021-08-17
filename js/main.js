import ScrollSuave from './modules/scroll-suave.js';
import Acordion from './modules/acordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import initAnimaScroll from './modules/animacao-scroll.js';
import initDropDownMenu from './modules/dropdown-menu.js';
import initMenuMobile from './modules/menu-mobile.js';
import InitFuncionamento from './modules/funcionamento.js';
import FetchAnimais from './modules/fetch-animais.js';
import initFetchBitcon from './modules/fetch-bitcon.js';

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const acordion = new Acordion('[data-anime="acordion"] dt');
acordion.init();

const tabNav = new TabNav('[data-tab="menu"]  li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="container"]', '[data-modal="fechar"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

initAnimaScroll();
initDropDownMenu();
initMenuMobile();
InitFuncionamento();
FetchAnimais('../../animais-api.json', '.numeros-grid');
initFetchBitcon();
