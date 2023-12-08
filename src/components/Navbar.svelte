<script>
  import { Router, Link } from 'svelte-routing'
</script>

<div class="w-full h-16 shadow flex items-center justify-between px-8 sticky">
  <h1 class="font-title text-readable text-xl">Function()</h1>
  <div class="flex flex-row space-x-10 font-nav">
    <Router>
      <Link class="font-nav text-unfocus hover:text-readable" to="/">Home</Link>
      <Link class="font-nav text-unfocus hover:text-readable" to="/catalog"
        >Catalog</Link
      >
      <Link class="font-nav text-unfocus hover:text-readable" to="/support"
        >Support</Link
      >
    </Router>
  </div>
  <div class="flex flex-row font-nav">
    <nav>
      <!-- change to link later -->
      <div class="font-nav text-unfocus hover:text-readable">Log in</div>
    </nav>
  </div>
</div>
