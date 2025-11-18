<script>
	import Table from '$lib/client/ui_components/Table.svelte';

	let { data } = $props();
</script>

<div class="h-screen w-screen">
	<Table
		data={data.data}
		queryInfo={data.queryInfo}
		tableInfo={data.tableInfo}
		showSerialNumbers={true}
	/>
</div>
