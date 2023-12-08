<script>
  import { Router, Route, Link } from 'svelte-routing'
  import Navbar from './components/Navbar.svelte'
  import Home from './components/pages/Home.svelte'
  import Catalog from './components/pages/Catalog.svelte'
  import Support from './components/pages/Support.svelte'
</script>

<main>
  <div class="flex flex-col">
    <Navbar />
    <Router>
      <Route path="/" component={Home} />
      <Route path="/catalog" component={Catalog} />
      <Route path="/support" component={Support} />
    </Router>
  </div>
</main>
