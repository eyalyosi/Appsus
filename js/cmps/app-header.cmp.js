export default {
    template:`
        <header class="app-header">
            <div class="main-header flex space align main-layout">
            <div class="logo">
                <h2>Appsus</h2>
            </div>

            <div class="filter-container">

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