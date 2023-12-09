<script lang="ts">
  let name: string = ''
  let address: string = ''

  const submitOrder = (): void => {
    alert(`Order placed for ${name} at ${address}`)
  }
</script>

<form on:submit|preventDefault={submitOrder}>
  <div>
    <label for="name">Name:</label>
    <input type="text" id="name" bind:value={name} required />
  </div>
  <div>
    <label for="address">Address:</label>
    <input type="text" id="address" bind:value={address} required />
  </div>
  <button type="submit">Place Order</button>
</form>
