const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEL = document.querySelector(`.gallery`);
console.log(galleryEL);

const listGallery = item => {
  return `<li><img src = "${item.url}" alt = "${item.alt}"/></li>`;
};
console.log(listGallery);

const markup = images.map(listGallery).join('');
console.log(markup);
galleryEL.insertAdjacentHTML('beforeend', markup);

Array.prototype.forEach.call(document.images, function (myImg) {
  myImg.style.width = "100%";
})


