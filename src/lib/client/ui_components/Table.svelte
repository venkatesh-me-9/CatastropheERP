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

<div class="h-full w-full overflow-x-auto">
	<table class="able-pin-rows table-pin-cols table">
		<thead>
			<tr>
				{#each tableInfo.readCol as colName}
					<td class="text-{cellAlign(tableInfo.typeCol[colName])}"
						>{tableInfo.labelCol[colName] ?? colName}</td
					>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row (row.id)}
				<tr class="hover:bg-base-300">
					{#each tableInfo.readCol as colName}
						<td class="text-{cellAlign(tableInfo.typeCol[colName])}">{row[colName]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
