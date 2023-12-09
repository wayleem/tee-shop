<script lang="ts">
  import { addToCart } from '../store'
  import type { Product } from '../types'

  export let item: Product

  function handleAddToCart(): void {
    addToCart(item)
  }
</script>

<div>
  <img class="w-[400px] h-[300px]" src={item.imageURL} alt={item.name} />
  <h3>{item.name}</h3>
  <p>{item.description}</p>
  <p>${item.price}</p>
  <button on:click={handleAddToCart}>Add to Cart</button>
</div>
