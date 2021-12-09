<template>
	<div>
		<div>
			<nav class="black">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo right">Logo</a>
					<ul id="nav-mobile" class="left hide-on-med-and-down">
						<li>
							<a href="sass.html">Sass</a>
						</li>
						<li>
							<a href="badges.html">Components</a>
						</li>
						<li>
							<a href="collapsible.html">JavaScript</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="divider"></div>
		<div class="section container">
			<div class="row">
				<div class="input-field col s6">
					<input id="search" type="text" class="validate" autocomplete="off" />
					<label for="search">Pesquisar ...</label>
				</div>
			</div>
		</div>
		<div class="container">
			<table class="highlight">
				<thead>
					<tr>
						<th>Nome</th>
						<th>Empresa</th>
						<th>Cartão</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(employee) in employees.data" :key="employee.id">
						<td>{{employee.id}}</td>
						<td>{{employee.name}}</td>
						<td>{{employee.company}}</td>
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
			.get("/list")
			.then((res) => ((this.employees = res), console.log(res)))
			.catch((error) => console.log(error));
	},
};
</script>
<style>
table.highlight tbody tr:hover {
	background-color: #eee !important;
}
</style>