<script lang="ts">
  import Checkout from '../pages/Checkout.svelte'
  import { cart, removeFromCart, updateQuantity } from '../../store'
  import type { CartItem } from '../../types'

  function changeQuantity(item: CartItem, newQuantity: number): void {
    if (newQuantity < 1) {
      removeFromCart(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  $: totalCost = $cart.reduce(
    (acc: number, item: CartItem) => acc + item.price * item.quantity,
    0,
  )

  let showCheckout = false
</script>

<div>
  {#each $cart as item (item.id)}
    <div class="cart-item">
      <h4>{item.name}</h4>
      <p>Price: ${item.price}</p>
      <input
        type="number"
        min="1"
        bind:value={item.quantity}
        on:input={() => changeQuantity(item, item.quantity)}
      />
      <button on:click={() => removeFromCart(item.id)}>Remove</button>
    </div>
  {/each}
  <div>Total Cost: ${totalCost.toFixed(2)}</div>

  <button on:click={() => (showCheckout = true)}>Proceed to Checkout</button>

  {#if showCheckout}
    <Checkout />
  {/if}
</div>
