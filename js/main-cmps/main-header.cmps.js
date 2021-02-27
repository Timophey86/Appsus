export default {
  template: `
   <header class="app-header">
       <section class="main-header-container main-container">
       <div class="logo">
           <h1>Appsus</h1>
       </div>
       <div class="menu" @click="toggleMenu"><i class="fab fa-elementor"></i></div>
       <nav :class="menuClass">
           <router-link active-class="active-link" to="/" exact>Home</router-link> 
           <router-link active-class="active-link" to="/keep" exact>Keep</router-link> 
           <router-link active-class="active-link" to="/mail-app" exact>Mail</router-link> 
           <router-link active-class="active-link" to="/book" exact>Book</router-link> 
       </nav>
</section>
    </header>
    `,
  data() {
    return {
      menuClass: "closeMenu",
    };
  },
  methods: {
    toggleMenu() {
      if (this.menuClass === "openMenu") {
        this.menuClass = "closeMenu";
      } else {
        this.menuClass = "openMenu";
      }
    },
  },
};
