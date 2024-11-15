const {createApp,ref}  = Vue;
//變成陣列
createApp({
    data() {
        return{
            Services:[
                {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
                {icon: "fa-lock", heading:"Web Security", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
            ]
        }
    }
}).mount("#services");

createApp({
    data() {
        return{
            Portfolio:[
                {heading:"Round Icons",photo:"", text:"Graphic Design",icon:"fa-plus"},
                {heading:"Startup Framework",photo:"",text:"Website Design",icon:"fa-plus"},
                {heading:"Treehouse",photo:"", text:"Website Design",icon:"fa-plus"},
                {heading:"Golden",photo:"", text:"Website Design",icon:"fa-plus"},
                {heading:"Escape",photo:"", text:"Website Design",icon:"fa-plus"},
                {heading:"Dreams",photo:"", text:"Website Design",icon:"fa-plus"}
            ]
        }
    }
}).mount("#portfolio")