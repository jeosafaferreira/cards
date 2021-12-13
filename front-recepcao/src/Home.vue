<template>
	<div>
		<div class="section container">
			<div class="row">
				<div class="input-field col s6">
					<input id="search" type="text" class="validate" autocomplete="off" />
					<label for="search">Pesquisar</label>
				</div>
			</div>
		</div>
		<div class="container">
			<table class="highlight">
				<thead>
					<tr>
						<th>ID</th>
						<th>Nome</th>
						<th>Empresa</th>
						<th>Data Final</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(employee) in employees.data" :key="employee.id">
						<td>{{employee.id}}</td>
						<td>{{employee.name}}</td>
						<td>{{employee.company}}</td>
						<td>{{employee.expires_on}}</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			employees: [],
		};
	},
	mounted() {
		const axios = require("axios");
		axios.defaults.baseURL = "http://localhost:4000";
		axios
			.get("/employee")
			.then((res) => ((this.employees = res), console.log(res)))
			.catch((error) => console.log(error));
	},
};
</script>

<style>
</style>