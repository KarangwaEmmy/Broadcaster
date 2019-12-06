// Code to toggle menu in smaller devices
function myFunction(){
    var x = document.getElementById("site-nav");
    if (x.style.display === "block") {
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

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
