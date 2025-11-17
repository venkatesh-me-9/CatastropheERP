<script>
	let { data, tableInfo, queryInfo } = $props();
</script>

<div class="h-full w-full overflow-x-auto">
	<table class="able-pin-rows table-pin-cols table">
		<thead>
			<tr>
				{#each tableInfo.readCol as colName}
					<td>{tableInfo.labelCol[colName] ?? colName}</td>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data as row (row.id)}
				<tr class="hover:bg-base-300">
					{#each tableInfo.readCol as colName}
						<td>{row[colName]}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
