import ScrollSuave from './modules/scroll-suave.js';
import Acordion from './modules/acordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnima from './modules/scroll-anima.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import Funcionamento from './modules/funcionamento.js';
import FetchAnimais from './modules/fetch-animais.js';
import FetchBitcon from './modules/fetch-bitcon.js';
import SlideNav from './modules/slide.js';

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

const scrollAnima = new ScrollAnima('[data-anima="scroll"]');
scrollAnima.init();
const dropDownMenu = new DropDownMenu('[data-dropdown]');
dropDownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamento = new Funcionamento('[data-semana]', 'aberto');
funcionamento.init();

FetchAnimais('./animais-api.json', '.numeros-grid');

FetchBitcon('https://blockchain.info/ticker', '.btc-preco');

const slide = new SlideNav('.slide', '.slide-wraper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-control');
