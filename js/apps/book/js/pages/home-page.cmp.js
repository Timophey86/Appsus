export default {
    template: `
    <section class="home-page">
        <h1>Welcome to THEE Book Store</h1>
        <img src="js/apps/book/books.jpg">
        <router-link active-class="active-link" to="/book/book-app" exact>ENTER</router-link> 
        <router-view></router-view>
     </section>
    `
}