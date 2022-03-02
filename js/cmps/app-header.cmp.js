export default {
    template:`
        <header class="app-header">
            <div class="main-header flex space align">
            <div class="logo">
                <h3>Appsus</h3>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link> |
                <router-link to="/note">Note</router-link> |
                <router-link to="/mail">E-mail</router-link>
            </nav>
            </div>
        </header>
    
    `
}