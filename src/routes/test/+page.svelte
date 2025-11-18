<script>
	import { invalidateAll } from '$app/navigation';
	import Table from '$lib/client/ui_components/Table.svelte';
	let { data } = $props();

	function sort(colName, ctrl = false) {
		const { sortOrder, sortDirection } = data.queryInfo;
		sortOrder.includes(colName) ? null : sortOrder.push(colName);
		sortDirection[colName] = sortDirection[colName] === 'asc' ? 'dsc' : 'asc';

		let queryParam = `sortOrder=${sortOrder.join(',')}&sortDirection=${JSON.stringify(sortDirection).slice(1, -1).replaceAll('"', '')}`;
		invalidateAll();
	}
</script>

<div class="h-screen w-screen">
	<Table
		data={data.data}
		queryInfo={data.queryInfo}
		tableInfo={data.tableInfo}
		showSerialNumbers={true}
		{sort}
	/>
</div>
