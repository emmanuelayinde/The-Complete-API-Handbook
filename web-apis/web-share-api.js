function shareContent() {
    if (navigator.share) {
      navigator
        .share({
          title: "Web Share API Demo",
          text: "Check out this cool API!",
          url: "https://example.com",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    } else {
      console.log("Web Share API not supported");
    }
  }
  
  // Usage
  document.getElementById("shareButton").addEventListener("click", shareContent);