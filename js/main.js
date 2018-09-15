
// Array of image objects
const imageText = [
  { filename: '01.jpg', title: 'Hay Bales', text: 'I love hay bales. Took this snap on a drive through the countryside past some straw fields.' },
  { filename: '02.jpg', title: 'Lake', text: 'The lake was so calm today. We had a great view of the snow on the mountains from here.' },
  { filename: '03.jpg', title: 'Canyon', text: 'I hiked to the top of the mountain and got this picture of the canyon and trees below.' },
  { filename: '04.jpg', title: 'Iceberg', text: 'It was amazing to see an iceberg up close, it was so cold but didn’t snow today.' },
  { filename: '05.jpg', title: 'Desert', text: 'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.' },
  { filename: '06.jpg', title: 'Fall', text: 'Fall is coming, I love when the leaves on the trees start to change color.' },
  { filename: '07.jpg', title: 'Plantation', text: 'I drove past this plantation yesterday, everything is so green!' },
  { filename: '08.jpg', title: 'Dunes', text: 'My summer vacation to the Oregon Coast. I love the sandy dunes!' },
  { filename: '09.jpg', title: 'Countryside Lane', text: 'We enjoyed a quiet stroll down this countryside lane.' },
  { filename: '10.jpg', title: 'Sunset', text: 'Sunset at the coast! The sky turned a lovely shade of orange.' },
  { filename: '11.jpg', title: 'Cave', text: 'I did a tour of a cave today and the view of the landscape below was breathtaking.' },
  { filename: '12.jpg', title: 'Bluebells', text: 'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.' },
];

// Code to generate divs for gallery thumbnails
let divOutput = "";
function divLoop() {
  for (let i = 1; i <= 12; i += 1) {
    divOutput += "<div class='thumbnail' id='" + i + "'></div>";
  };
  $('#gallery').html(divOutput);
}

// Code to populate gallery divs with html and image info for lightbox plugin
function imageLoop( images ) {
  for (let i = 0; i <= images.length; i += 1) {
    let j = i + 1;
    let html = "";
    html += "<a href='images/" + images[i].filename + "' ";
    html += " data-lightbox='gallery'";
    html += " data-alt='" + images[i].title + "' ";
    html += " data-title='<h1>" + images[i].title + "</h1><p>";
    html += images[i].text + "</p>'>";
    html += "<img class='roundedBorder' src='images/thumbnails/" + images[i].filename + "'>";
    html += "</a>";
    $(`#${j}`).html(html);
  };
}
