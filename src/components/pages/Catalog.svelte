<script>
  import data from '../../data.json'
  import Item from '../Item.svelte'
</script>

<div class="">
  {#each data as item}
    <Item {item} />
  {/each}
</div>
