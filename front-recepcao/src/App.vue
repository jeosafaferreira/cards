<template>
	<div>
		<Top></Top>
		<router-view></router-view>
	</div>
</template>
<script>
import Top from "@/components/Top";

export default {
	components: {
		Top,
	},
};
</script>
<style>
table.highlight tbody tr:hover {
	background-color: #eee !important;
}
</style>