<script lang="ts">
  import data from '../../data.json'
  import Item from '../Item.svelte'
  import type { Product } from '../../types'

  const items: Product[] = data
</script>

<div>
  {#each items as item}
    <Item {item} />
  {/each}
</div>
