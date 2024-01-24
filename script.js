document.addEventListener('DOMContentLoaded', () => {
    let previous = document.querySelector('.previous'); // Use querySelector instead of getElementsByClassName
    let next = document.querySelector('.next'); // Use querySelector instead of getElementsByClassName
    let currentIndex = 0;
    let finialResponse; // Declare finialResponse outside of the getdata function
    let spanP = document.querySelector('.spanP');
    let Quote = document.querySelector('.Quote');
    let author = document.getElementById('author');
    let imgCont = document.querySelector('.imgCont');
    async function getdata() {
        try {
            let response = await fetch("data.json");
            finialResponse = await response.json();
            console.log(finialResponse)
            renderTestimonial(finialResponse.testimonial[currentIndex]);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function renderTestimonial(testimonial) {

      Quote.textContent = testimonial.quote;
        author.textContent = testimonial.author;
        spanP.textContent = testimonial.designation;
        console.log(testimonial.designation)
        imgCont.src = `${testimonial.image}`;
        imgCont.alt = testimonial.author + " image";
    }

    next.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % finialResponse.testimonial.length;
        renderTestimonial(finialResponse.testimonial[currentIndex]);
    });

    previous.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + finialResponse.testimonial.length) % finialResponse.testimonial.length;
        renderTestimonial(finialResponse.testimonial[currentIndex]);
    });

    getdata();
});
