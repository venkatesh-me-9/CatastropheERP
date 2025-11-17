<script>
	let { data, tableInfo, queryInfo } = $props();

	function cellAlign(type) {
		const right = ['number'];
		const center = ['serialNumber'];

		if (right.includes(type)) return 'right';
		else if (center.includes(type)) return 'center';
		else return 'left';
	}
</script>

<div class="h-full w-90 overflow-x-auto">
	<table class="table-pin-rows table-pin-cols table">
		<thead>
			<tr>
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
			{#each data as row (row.id)}
				<tr class="group">
					{#each tableInfo.readCol as colName}
						<svelte:element
							this={tableInfo.pinCol.includes(colName) ? 'th' : 'td'}
							class="text-{cellAlign(tableInfo.typeCol[colName])} group-hover:bg-red-600"
							>{row[colName]}</svelte:element
						>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
