function chargebattery() {
    var a;
    a = document.getElementById("div1");
    a.innerHTML = "&#xf244;";
    setTimeout(function () {
        a.innerHTML = "&#xf243;";
      }, 1000);
    setTimeout(function () {
        a.innerHTML = "&#xf242;";
      }, 2000);
    setTimeout(function () {
        a.innerHTML = "&#xf241;";
      }, 3000);
    setTimeout(function () {
        a.innerHTML = "&#xf240;";
      }, 4000);
  }
chargebattery();
setInterval(chargebattery, 5000);

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to simulate fetching data from an API with a delay
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("Data has been fetched!");
    }, 2000); // Simulating a delay of 2 seconds
  });
}

// Async function representing a sequence of events
async function fetchDataSequence() {
  console.log("Start fetching data...");

  try {
    // Step 1: Fetching data
    const data = await fetchData();
    console.log(data);

    // Step 2: Processing data
    console.log("Processing the fetched data...");

    // Step 3: Displaying the processed data
    console.log("Data processing complete!");
  } catch (error) {
    console.error("Error fetching or processing data:", error);
  }

  console.log("End of the sequence.");
}

// Trigger the sequence
fetchDataSequence();