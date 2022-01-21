
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
	mounted() {
		M.AutoInit();
	},
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