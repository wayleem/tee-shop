<script>
  export let item
  // Function to handle adding to cart
  function addToCart() {
    // Implement cart logic
  }
</script>

<div class="">
  <img class="w-[400px] h-[300px]" src={item.imageURL} alt={item.name} />
  <h3>{item.name}</h3>
  <p>{item.description}</p>
  <p>${item.price}</p>
  <button on:click={addToCart}>Add to Cart</button>
</div>
