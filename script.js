
      function displayNextImage() {
          x = (x === images.length - 1) ? 0 : x + 1;
          document.getElementById("img").src = images[x];
      }
      function changeImage() {
          setInterval(displayNextImage, 5000);
      }

      var images = [], x = -1;
      images[0] = "http://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg";
      images[1] = "http://www.planwallpaper.com/static/images/background-gmail-google-images_FG2XwaO.jpg";
      images[2] = "http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg";
  </script>
