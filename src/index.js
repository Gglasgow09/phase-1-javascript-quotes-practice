function getQuotes () {
    fetch('http://localhost:3000/quotes?_embed=likes')
    .then(response => response.json())
    //create a function to collect the data then use the data to render for each quote
    .then(data => (data.forEach(el => renderQuote(el))))
    
}

function renderQuote(message) {

    //variable quote container was already provided with the id 'quote list  
    const quoteContainer = document.getElementById('quote-list')
    
    //created variable quoteList that we want to put inside the ul
    const quoteList = document.createElement('li')
        //once created added a className to it from the data provided in the readMe 
        quoteList.className = 'quote-card'
            //appending the quoteList to the quoteContainer
            
          
     
    //created variable blockQuote to create the element blockQuote
    const blockQuote = document.createElement('blockquote')
        //added a class name to the blockquote found the class name from the html provided
        blockQuote.className = 'blockquote'

    
    const paragraph = document.createElement('p')
        paragraph.className = 'mb-0'
        paragraph.innerText = message.quote
        //we needed to add the text from the array to the DOM


    const footer = document.createElement('footer')
        footer.className = 'blockquote-footer'
        footer.innerText = message.author


    const breakEl = document.createElement('br')
       

    const likeButton = document.createElement('button')
        likeButton.className = 'btn-success'
        likeButton.innerText = 'Likes'
        const spanButton = document.createElement('span')
            spanButton.innerText = 0
            let likeCounter = spanButton.innerText

        //add an event listener  for a click event for the like button
        likeButton.addEventListener('click', 
          
                function handleLikeClick() {
                ++likeCounter
                spanButton.innerText = likeCounter
          })
          

    const deleteButton = document.createElement('button')
        deleteButton.className = 'btn-danger'
        deleteButton.innerText = 'Delete'
        // add eventListener for click event for the delete button
            deleteButton.addEventListener('click',  
            function handleDeleteClick (){
                    //we want to delete the li element 
                    quoteList.remove()
            })


    //follow the steps provided in the readMe for the structure of how to append
       likeButton.append(spanButton)
       blockQuote.append(paragraph, footer, breakEl, likeButton, deleteButton)
       quoteList.append(blockQuote)
       quoteContainer.append(quoteList)


}

//  <li class='quote-card'>
//       <blockquote class="blockquote">
//         <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
//         <footer class="blockquote-footer">Someone famous</footer>
//         <br>
//         <button class='btn-success'>Likes: <span>0</span></button>
//         <button class='btn-danger'>Delete</button>
//       </blockquote>
//     </li>

//Submitting the form creates a new quote and adds it to the list of 
//quotes without having to refresh the page. Pessimistic rendering is 
//recommended.




let form = document.querySelector('#new-quote-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault();
    
    const newObj = {
        // took it from the name of the input we are 
        //saying that we want the event to target the quote that 
        //the person submits in the form to create the new value 
        quote: event.target.quote.value, 
        author: event.target.author.value
        
    }
    //we want to pass the newObj into renderQuote so that it will appear as a new quote 
    renderQuote(newObj) 
}



document.addEventListener('DOMContentLoaded', getQuotes)




