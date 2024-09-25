document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      console.log("Page is now hidden");
      // Pause videos, stop animations, etc.
    } else {
      console.log("Page is now visible");
      // Resume videos, start animations, etc.
  }
});
