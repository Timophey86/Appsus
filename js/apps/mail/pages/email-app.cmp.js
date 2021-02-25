export default {
  template: `
    <div class="mail-app-main-container">
    <div class="mail-side-actions">
    <table class=buttons>
    <tr>
        <td><router-link :to="'/mail-app/compose'"><button>compose</button></router-link> </tr>
      <tr> <td><router-link :to="'/mail-app/inbox'"><button>inbox</button></router-link> </tr> 
       <tr><td><router-link :to="'/mail-app/sent'"><button>sent</button></router-link> </tr> 
</table>
                <!-- <router-link :to="'/mail-app/compose'"><button>compose</button></router-link> 
                <router-link :to="'/mail-app/inbox'"><button>inbox</button></router-link> 
                <router-link :to="'/mail-app/sent'"><button>sent</button></router-link>  -->
            </div>
     <router-view />
     </div>
    `,
};
