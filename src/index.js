
import './styles/index.scss'
import { Card, cardBtnListener } from './js/Card'
import { Categories, categoryListener } from './js/Categories'
import { initSlider, images } from './js/Slider'
import { apiKey } from './key'
import { LoadMore, loadMoreListener } from './js/LoadMore'



const cartObj = JSON.parse(localStorage.getItem('cart')) ? JSON.parse(localStorage.getItem('cart')) : { 'cart': [] }
const cart = cartObj['cart']

const categoriesData = ['Architecture', 'Art & Fashion', 'Biography', 'Business', 'Crafts & Hobbies', 'Drama', 'Fiction', 'Food & Drink', 'Health & Wellbeing', 'History & Politics', 'Humor', 'Poetry', 'Psychology', 'Science', 'Technology', 'Travel & Maps']
const activeCategory = categoriesData[0]

const categoryList = document.querySelector('.books__categories')
categoryList.insertAdjacentHTML('afterbegin', Categories(categoriesData, activeCategory))
categoryListener(cart)

let startIndex = 0
let maxResults = 6

const url = `https://www.googleapis.com/books/v1/volumes?q="subject:${activeCategory}"&key=${apiKey.key}&printType=books&startIndex=${startIndex}&maxResults=${maxResults}&langRestrict=en`
const bookSection = document.querySelector('.books')

fetch(url)
    .then(data => data.json())
    .then(data => {
        const books = data.items
        const booksList = bookSection.querySelector('.books__info')
        books.map(book => {
            booksList.insertAdjacentHTML('beforeend', Card(book))
        })
        cardBtnListener(cart)
        bookSection.insertAdjacentHTML('beforeend', LoadMore())
        loadMoreListener(startIndex, maxResults, cart)
    })
    .catch(() => alert('Ошибка получения данных с сервера'))





