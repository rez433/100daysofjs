Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    `
})

Vue.component('product-review', {
    template: `
        <form class="review-form" @submit.prevent="onSubmit">
            <p>
                <label for="name">Name: </label>
                <input id="name" v-model="name">
            </p>
            <p>
                <label for="review">Review: </label>
                <textarea id="review" v-model="review"></textarea>
            </p>
            
            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>
                <input type="submit" value="submit">
            </p>
        </form>
    `,
    data() {
        return {
            name:null,
            review: null,
            rating: null
        }
    },
    methods: {
        onSubmit() {
            let productReview = {
                
                name: this.name,
                review: this.review,
                rating: this.rating
            }
            this.$emit('review-submitted', productReview)
            this.name = null
            this.review = null
            this.rating = null
        }
    }
})

Vue.component('product', {
    props: {
        premium: {
            type: Boolean, 
            required: true
        },
    },
    template: 
    `
    <div class="prod-rev">
        <div class="product">
            <div class="prod-img">
            <img v-bind:src="img" alt="">
            </div>
            <div class="prod-info">
                <h2>{{title}}</h2>
                <p v-if="inventory >= 100">In Stock</p>
                <p v-else-if="inventory < 10 && inventory >0">Almost sold out</p>
                <p v-else>Out of Stock</p>
                <p> Shipping: {{ shipping }}</p>

                <product-details :details="details"></product-details>
                    
                <div v-for="(variant,index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{backgroundColor: variant.variantColor}"
                    @mouseover="updateProduct(index)">
                </div>

            </div>
        </div>
        <div>
            <!-- <button @click="cart++">Add to Cart</button> -->
            <button @click="addToCart"
            :disabled="!inventory"
            :class="{ disabledBtn: !inventory}" >
                Add to Cart
            </button>
        </div>

        <div>
            <h2>Reviews:</h2>
            <p v-if="!reviews.length">Thera are no reviews yet.</p>
            <ul>
                <li v-for="review in reviews">
                    <p>{{review.name}}</p>
                    <p>{{review.review}}</p>
                    <p>{{review.rating}}</p>
                    
                </li>
            </ul>

        </div>
        <product-review @review-submitted="addReview"></product-review>
    </div>
    
    `,
    data(){
        return {
            product : 'Socks',
            selectedVariant: 0,
            details:['80% cotton', '20% polyester', 'Gender-neutral'],
            brand: 'Nikidas',
            variants: [
                {
                    variantId: 123,
                    variantColor: 'red',
                    variantImg: './src/socks-red-blue.png',
                    variantQuantity: 5,
                },
                {
                    variantId: 124,
                    variantColor: 'green',
                    variantImg: './src/socks-green-yellow.png',
                    variantQuantity: 200,
                },
    
            ],
            reviews: []
        }
        
    },
    methods: {
        addToCart: function() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId )
        },
        // updateProduct: function(variantImg) {
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index)
        },
        addReview(productReview) {
            this.reviews.push(productReview)
        }
    },
    computed: {
        title(){
            return this.brand + " " + this.product;
        },
        img() {
            return this.variants[this.selectedVariant].variantImg;
        },
        inventory() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        shipping() {
            if (this.premium) {
                return "Free"
            }
            return 2.99
        }
    },
})


let app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: []
    },
    methods:{
        updateCart(id) {
            this.cart.push(id)
        }
    }
});

Vue.config.devtools = true