<script>
	let { data, tableInfo, queryInfo, showSerialNumbers } = $props();

	function cellAlign(type) {
		const right = ['number'];
		const center = ['serialNumber'];

		if (right.includes(type)) return 'right';
		else if (center.includes(type)) return 'center';
		else return 'left';
	}

	console.log(queryInfo);
</script>

<div class="h-full w-full overflow-x-auto">
	<table class="table-pin-rows table-pin-cols table">
		<thead>
			<tr>
				{#if showSerialNumbers}
					<td class="text-center">#</td>
				{/if}
				{#each tableInfo.readCol as colName}
					<svelte:element
						this={tableInfo.pinCol.includes(colName) ? 'th' : 'td'}
						class="text-{cellAlign(tableInfo.typeCol[colName])}"
					>
						{tableInfo.labelCol[colName] ?? colName}
					</svelte:element>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row, i (row.id)}
				<tr class="group">
					{#if showSerialNumbers}
						<td
							class="text-center group-hover:bg-base-300
						">{queryInfo.currentPage * queryInfo.limit + 1 + i}</td
						>
					{/if}
					{#each tableInfo.readCol as colName}
						<svelte:element
							this={tableInfo.pinCol.includes(colName) ? 'th' : 'td'}
							class="text-{cellAlign(tableInfo.typeCol[colName])} group-hover:bg-base-300"
						>
							{row[colName]}
						</svelte:element>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
