<template>
	<div>
		<div class="section container">
			<!-- <h5>Cadastrar Visitante</h5> -->
		</div>
		<div class="section container col s6">
			<div class="row">
				<div class="input-field col s4">
					<i class="material-icons prefix">account_circle</i>
					<input v-model="employee.name" id="nome" type="text" class="validate" autocomplete="off" />
					<label for="nome">Nome completo</label>
				</div>
				<div class="input-field col s4">
					<i class="material-icons prefix">fingerprint</i>
					<input
						v-model="employee.document"
						id="documento"
						type="text"
						class="validate"
						autocomplete="off"
					/>
					<label for="documento">Documento</label>
					<span class="helper-text">(RG ou CPF)</span>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s4">
					<i class="material-icons prefix">credit_card</i>
					<input
						id="matricula"
						v-model="employee.registration"
						type="text"
						class="validate"
						autocomplete="off"
					/>
					<label for="matricula">Matrícula</label>
				</div>

				<div class="input-field col s4">
					<i class="material-icons prefix">business</i>
					<input v-model="employee.company" id="empresa" type="text" class="validate" autocomplete="off" />
					<label for="empresa">Empresa</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s4">
					<i class="material-icons prefix">lock_open</i>
					<select multiple id="salas">
						<option value="1">Biomol - Sala 1</option>
						<option value="2">Biomol - Sala 2</option>
						<option value="3">Biomol - Sala 3</option>
					</select>
					<label>Sala(s) a ser(em) visitada(s):</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s4">
					<i class="material-icons prefix">date_range</i>
					<input type="text" id="data" class="datepicker" />
					<label for="data">Data final</label>
				</div>
			</div>
			<div class="row">
				<div class="input-field col s4">
					<a @click="save()" class="waves-effect waves-light btn">
						<i class="material-icons left">check_circle</i>Salvar
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Cadastro",
	data() {
		return {
			employee: [""],
		};
	},
	methods: {
		save() {
			console.log("---- Cadastro.vue ---- Salvando");
			const axios = require("axios");
			axios.defaults.baseURL = "http://localhost:4000";

			axios
				.post("/employee", this.employee)
				.then((res) => {
					console.log(res);
				})
				.catch((error) => {
					console.log(error);
				});
		},
	},
};
</script>

<style>
</style>