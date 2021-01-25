// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
require("trix")
require("@rails/actiontext")

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";

require("slick-carousel")

import "slick-carousel/slick/slick.scss"
import "slick-carousel/slick/slick-theme.scss"

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

import { initUpdateNavbarOnScroll } from '../components/navbar';
import { backgroundVideo } from '../components/bideo';
import { initAutocomplete } from '../components/init_autocomplete';
import {slickCarousel} from '../components/slick_carousel';
import { initTasting } from '../components/init_cards';
import { initCards } from '../components/init_cards';
import { initWines } from '../components/init_cards';
import { profileDropdown } from "../components/init_dropdown"




document.addEventListener('turbolinks:load', () => {
  // Call your JS functions here
  profileDropdown();
  backgroundVideo();
  slickCarousel();
  $('.scroller').slick();
  initCards();
  initWines();
  initAutocomplete();
  initTasting();
});

