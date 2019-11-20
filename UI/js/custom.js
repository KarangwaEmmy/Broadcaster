// Code to toggle menu in smaller devices
function myFunction(){
    var x = document.getElementById("site-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

    // comment JS

    var likeIcon = document.getElementById("like"),
    likeCounter = likeIcon.nextElementSibling,
    loveIcon = document.getElementById("love"),
    loveCounter = loveIcon.nextElementSibling
    
    likeIcon.addEventListener("click", function () {
    this.classList.toggle("like");
    var numberOfLikes = Number(likeCounter.textContent);
    if (this.classList.contains("like")) {
        numberOfLikes++;
        likeCounter.textContent = numberOfLikes;
    } else {
        numberOfLikes--;
        likeCounter.textContent = numberOfLikes;
    }
    });
    
    loveIcon.addEventListener("click", function () {
    this.classList.toggle("love");
    var numberOfLoves = Number(loveCounter.textContent);
    if (this.classList.contains("love")) {
        numberOfLoves++;
        loveCounter.textContent = numberOfLoves;
    } else {
        numberOfLoves--;
        loveCounter.textContent = numberOfLoves;
    }
    });

// ckeditor

ClassicEditor
    .create( document.querySelector( '#article' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );
