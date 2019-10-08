import $ from 'jquery'
import 'slider-pro'
import 'slider-pro/dist/css/slider-pro.min.css'

import 'magnific-popup'
import 'magnific-popup/dist/magnific-popup.css'
import Swal from 'sweetalert2';

(function () {
  'use strict'

  $('#main-banner').sliderPro({

    width: '100%',
    height: 500,
    arrows: true,
    buttons: false,
    waitForLayers: true,
    thumbnailWidth: 200,
    thumbnailHeight: 100,
    thumbnailPointer: true,
    autoplay: false,
    autoScaleLayers: false
  })

  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
      titleSrc: function (item) {
        return item.el.attr('title') + '<small>by Marsel Van Oosten</small>'
      }
    }
  })
})() // Page Ready

$('.text-muted').click(function () {
  let timerInterval
  Swal.fire({
    title: 'Auto close alert!',
    html:
    'I will close in <strong></strong> seconds.<br/><br/>' +
    '<button id="increase" class="btn btn-warning">' +
      'I need 5 more seconds!' +
    '</button><br/>' +
    '<button id="stop" class="btn btn-danger">' +
      'Please stop the timer!!' +
    '</button><br/>' +
    '<button id="resume" class="btn btn-success" disabled>' +
      'Phew... you can restart now!' +
    '</button><br/>' +
    '<button id="toggle" class="btn btn-primary">' +
      'Toggle' +
    '</button>',
    timer: 10000,
    onBeforeOpen: () => {
      const content = Swal.getContent()
      const $ = content.querySelector.bind(content)

      const stop = $('#stop')
      const resume = $('#resume')
      const toggle = $('#toggle')
      const increase = $('#increase')

      Swal.showLoading()

      function toggleButtons () {
        stop.disabled = !Swal.isTimerRunning()
        resume.disabled = Swal.isTimerRunning()
      }

      stop.addEventListener('click', () => {
        Swal.stopTimer()
        toggleButtons()
      })

      resume.addEventListener('click', () => {
        Swal.resumeTimer()
        toggleButtons()
      })

      toggle.addEventListener('click', () => {
        Swal.toggleTimer()
        toggleButtons()
      })

      increase.addEventListener('click', () => {
        Swal.increaseTimer(5000)
      })

      timerInterval = setInterval(() => {
        Swal.getContent().querySelector('strong')
          .textContent = (Swal.getTimerLeft() / 1000)
            .toFixed(0)
      }, 100)
    },
    onClose: () => {
      clearInterval(timerInterval)
    }
  })
})
