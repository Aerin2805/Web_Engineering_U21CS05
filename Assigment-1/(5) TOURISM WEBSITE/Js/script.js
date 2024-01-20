const numberOfPhotos = 20;
const carouselInner = document.querySelector('.carousel-inner');

for (let i = 1; i <= numberOfPhotos; i++) {
    const div = document.createElement('div');
    if(i==1) div.classList.add('carousel-item','active');
    div.classList.add('carousel-item');

    const img = document.createElement('img');
    if(i==6){
        img.src = "../" +"image/"  + `${i}.jpeg`;
    } else if(i==16){
        img.src = "../" + "image/"  + `${i}.png`;
    } else {
        img.src = "../" + "image/"  + `${i}.jpg`;
    }
   
    img.classList.add('d-block', 'w-100' , 'gallery_img');
    img.alt = `Image ${i}`;

    div.appendChild(img);
    carouselInner.appendChild(div);
}