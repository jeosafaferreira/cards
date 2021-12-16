<template>
	<div>
		<Top></Top>
		<router-view></router-view>
	</div>
</template>
<script>
import Top from "@/components/Top";
import M from "materialize-css";
export default {
	components: {
		Top,
	},
	mounted() {
		M.AutoInit();
	},
};
</script>
<style>
table.highlight tbody tr:hover {
	background-color: #eee !important;
}
</style>