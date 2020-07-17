Vue instance structure: 
{
    el: '#app',
    data: {
        variables
    },
    methods:{
        functions
    },
    computed: {
        title(){
            return this.brand + " " + this.product;
        }
    },

}

Attribute Binding: 
"V-bind:" shorthand ":"
:id
:class
:alt
:href
:title
:style
:disabled

Two-way data binding:
v-model="variable"


v-on directive:
v-on:click
v-on:submit
v-if="statement"
v-else-if="statement"
vi-else


v-on shorthand "@"
@click
@submit
@mouseover
