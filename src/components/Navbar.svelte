<script>
  import { Router, Link } from 'svelte-routing'
</script>

<div class="w-full h-16 shadow flex items-center justify-between px-8 sticky">
  <h1 class="text-xl">Function</h1>
  <div class="flex flex-row space-x-10">
    <Router>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/support">Support</Link>
    </Router>
  </div>
  <div class="flex flex-row">
    <nav>
      <!-- change to link later -->
      <div>Log in</div>
    </nav>
  </div>
</div>
