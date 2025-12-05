/*
  Cosmix by TEMPLATE STOCK
  Updated for Bootstrap 5 & jQuery 3.7 & Owl Carousel 2
*/

/* ==============================================
   Preloader
   =============================================== */
$(window).on('load', function () {
  $('#pre-status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});

$(document).ready(function () {
  'use strict';

  /* ==============================================
     1. Main Slider (Banner Principal)
     Nota: Como migraste a Bootstrap 5, el banner principal 
     ahora lo maneja Bootstrap (clase .carousel), no Owl Carousel.
     Por eso eliminamos el código de #owl-slider aquí.
     =============================================== */

  /* ==============================================
     2. Navbar Logic (Color al hacer scroll)
     =============================================== */
  $(window).on('scroll', function () {
    var navHeight = $(window).height() - 100;
    if ($(window).scrollTop() > navHeight) {
      $('#navbar-main').addClass('on-scroll');
    } else {
      $('#navbar-main').removeClass('on-scroll');
    }
  });

  /* ==============================================
     3. Smooth Scroll (Desplazamiento suave)
     =============================================== */
  $('a.scroll').on('click', function (event) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top - 80
        }, 800);

        $('.navbar-collapse').collapse('hide');
        return false;
      }
    }
  });

  /* ==============================================
     4. Clients Carousel (TIPO CINTA / TICKER)
     =============================================== */
  var owlClient = $("#client-slider");
  if (owlClient.length) {
    owlClient.owlCarousel({
      loop: true,               // Bucle infinito (fundamental)
      margin: 30,               // Espacio entre logos
      nav: false,               // Sin flechas
      dots: false,              // <--- ESTO ELIMINA LOS PUNTITOS

      // Configuración para movimiento continuo:
      autoplay: true,           // Activar movimiento
      autoplayTimeout: 2000,    // Se mueve cada 2 segundos
      autoplayHoverPause: false, // NO se detiene con el mouse (para que fluya siempre)
      smartSpeed: 800,          // Velocidad de la transición (suave)

      // Si quisieras movimiento LINEAL CONSTANTE (sin pausas), usa esto:
      // slideTransition: 'linear',
      // autoplayTimeout: 0,
      // autoplaySpeed: 3000,

      // Responsivo
      responsive: {
        0: {
          items: 2              // 2 logos en móvil
        },
        600: {
          items: 3              // 3 en tablet
        },
        1000: {
          items: 5              // 5 en escritorio
        }
      }
    });
  }

  /* ==============================================
     5. Testimonials Carousel (ACTUALIZADO A OWL 2)
     (Si usas testimonios, esto lo arregla también)
     =============================================== */
  var owlTesti = $("#owl-testi");
  if (owlTesti.length) {
    owlTesti.owlCarousel({
      loop: true,
      items: 1,
      margin: 10,
      autoplay: true,
      autoplayTimeout: 4000,
      smartSpeed: 800,
      animateOut: 'fadeOut', // Efecto desvanecer
      animateIn: 'fadeIn'
    });
  }

  /* ==============================================
     6. Progress Bar Animation
     =============================================== */
  $('.experience').on('inview', function (event, visible) {
    if (visible) {
      $.each($('div.progress-bar'), function () {
        $(this).css('width', $(this).attr('aria-valuemax') + '%');
      });
      $(this).off('inview');
    }
  });

  /* ==============================================
     7. Pretty Photo
     =============================================== */
  if ($("a[rel^='prettyPhoto']").length) {
    $("a[rel^='prettyPhoto']").prettyPhoto({
      social_tools: false,
      theme: 'light_square'
    });
  }

  /* ==============================================
     8. WOW Animation
     =============================================== */
  if (typeof WOW === 'function') {
    new WOW().init();
  }

  /* ==============================================
     9. ToolTip (Bootstrap 5)
     =============================================== */
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  /* ==============================================
     10. Fun Facts Count
     =============================================== */
  $('#fun-facts').on('inview', function (event, visible) {
    if (visible) {
      $(this).find('.timer').each(function () {
        var $this = $(this);
        $({ Counter: 0 }).animate({
          Counter: $this.text()
        }, {
          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.ceil(this.Counter));
          }
        });
      });
      $(this).off('inview');
    }
  });

  /* ==============================================
     11. Portfolio Isotope Filter
     =============================================== */
  $(window).on('load', function () {
    var $portfolio = $('.portfolio-items');
    if ($portfolio.length) {
      $portfolio.isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      $('.portfolio-filter >li>a').on('click', function (e) {
        e.preventDefault();
        $('.portfolio-filter >li>a').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');
        $portfolio.isotope({ filter: selector });
      });
    }
  });

  /* ==============================================
     12. Parallax
     =============================================== */
  if ($.isFunction($.fn.stellar)) {
    $.stellar({
      horizontalScrolling: false,
      verticalOffset: 40,
      responsive: true
    });
  }

});