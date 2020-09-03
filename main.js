// SLIDER
const prev = document.getElementById("btn-prev"),
      next = document.getElementById("btn-next"),
      slides = document.querySelectorAll(".slide"),
      slidesWrapper = document.querySelectorAll(".slider-wrapper");
console.log('slide', slides)
let index = 0;

const activeSlide = n => {
    console.log(n)
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const nextSlide = () => {
    if(index == slides.length - 1) {
        index = 0
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}
const prevSlide = () => {
    if(index == 0) {
        index = slides.length - 1
        activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}
next.addEventListener('click', nextSlide)
prev.addEventListener('click', prevSlide)

// DROP-ZONE
let dropArea = document.getElementById('drop-area');
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(dropName => {
    dropArea.addEventListener(dropName, preventDefaults, false)
})

function preventDefaults(e) {
    e.preventDefault()
    e.stopPropagation()
};

['dragenter', 'dragover'].forEach(dropName => {
    dropArea.addEventListener(dropName, highlight, false)
})

['dragenter', 'dragover'].forEach(dropName => {
    dropArea.addEventListener(dropName, highlight, false)
})

['dragleave', 'drop'].forEach(dropName => {
    dropArea.addEventListener(dropName, unhighlight, false)
})

function highlight(e) {
    dropArea.classList.add('highlight')
};

function unhighlight(e) {
    dropArea.classList.remove('highlight')
};

dropArea.addEventListener('drop', handleDrop, false);

function handleDrop(e) {
  let dt = e.dataTransfer
  let files = dt.files
  handleFiles(files)
};

function handleFiles(files) {
    files = [...files]
    files.forEach(uploadFile)
    files.forEach(previewFile)
}

function previewFile(file) {
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = function() {
      let img = document.createElement('img')
      img.src = reader.result
      document.getElementById('gallery').appendChild(img)
    }
}

function uploadFile(file) {
  let div = document.createElement('gallery')
  div.innerHTML = file
}