let app = new Vue({
    el: '#app',
    data: {
        product : 'Socks',
        selectedVariant: 0,
        details:['80% cotton', '20% polyester', 'Gender-neutral'],
        brand: 'Nikidas',
        variants: [
            {
                variantId: 123,
                variantColor: 'red',
                variantImg: './src/socks-red-blue.png',
                variantQuantity: 0,
            },
            {
                variantId: 124,
                variantColor: 'green',
                variantImg: './src/socks-green-yellow.png',
                variantQuantity: 200,
            },

        ],
        cart: 0,
    },
    methods: {
        addToCart: function() {
            this.cart+=1;
        },
        // updateProduct: function(variantImg) {
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index)
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
    },
})