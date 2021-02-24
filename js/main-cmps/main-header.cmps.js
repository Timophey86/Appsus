export default {
    template: `
   <header class="app-header">
       <section class="main-header-container main-container">
       <div class="logo">
           <h1>Appsus</h1>
       </div>
       <nav>
           <router-link active-class="active-link" to="/" exact>Home</router-link> 
           <router-link active-class="active-link" to="/" exact>Keep</router-link> 
           <router-link active-class="active-link" to="/" exact>Mail</router-link> 
           <router-link active-class="active-link" to="/book" exact>Book</router-link> 
       </nav>
</section>
    </header>
    `,

}
