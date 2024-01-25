$(document).ready(function () {
  let slideIndex = 0;
  let dots = document.getElementsByClassName("dot");
  let slides = document.getElementsByClassName("mySlides");
  showSlides();
  function showSlides() {
    let i;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    $(this).fadeOut("5000");
    setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  $("#plusbtn").click(() => {
    plusBtn();
  });

  $("#minusbtn").click(() => {
    minusBtn();
  });

  function plusBtn() {
    // console.log("slide number: " + slideIndex);
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }
  function minusBtn() {
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex = slideIndex - 1;
    if (slideIndex == 0) {
      slideIndex = slides.length;
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }

  $("#menuRes").click(function () {
    $("#responsiveNav").slideToggle();
  });

  $(".mySlides").on("pointerdown", function (e) {
    var count = 0;
    $(".mySlides").on("pointermove", function (evt) {
      $(".mySlides").on("pointerup", function () {
        $(".mySlides").off("pointermove");
        // console.log("stop called");

        let scrollDirection = e.pageX - evt.clientX;
        // console.log("drag  e.pageX" + scrollDirection);
        if (scrollDirection < 0) {
          if (count == 0) {
            console.log("change to prev");
            minusBtn();
            count++;
          }
        } else {
          if (count == 0) {
            console.log("change to next.");
            plusBtn();
            count++;
          }
        }
      });
    });

    // console.log("mouse down");
  });

  window.addEventListener(
    "scroll",
    () => {
      // document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
      // console.log("scroll y: " + window.pageYOffset);
    },
    false
  );

  // Create the observer

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      // If the element is visible

      if (entry.isIntersecting) {
        // Add the animation class
        console.log("Intersecting");
        $(".msg-one").addClass("animationWipe");
        return;
      }

      $(".msg-one").removeClass("animationWipe");
    });
  });

  // Tell the observer which elements to track
  observer.observe(document.querySelector(".msg-one"));
});
