<template>
	<form>
		<md-card>
			<md-card-header :data-background-color="dataBackgroundColor">
				<h4 class="title">Adicionar Tarefas</h4>
			</md-card-header>

			<md-card-content>
				<div class="md-layout">
					<div class="md-layout-item md-small-size-100 md-size-50">
						<md-field>
							<label>Tarefa</label>
							<md-input v-model="tarefa.tarefa" type="text"></md-input>
						</md-field>
					</div>

					<div class="md-layout-item md-small-size-100 md-size-50">
						<md-field>
							<label>Responsável</label>
							<md-input v-model="tarefa.responsavel" type="text"></md-input>
						</md-field>
					</div>

					<div class="md-layout-item md-small-size-100 md-size-50">
						<md-field>
							<label>Descrição</label>
							<md-input v-model="tarefa.descricao" type="email"></md-input>
						</md-field>
					</div>
					<div class="md-layout-item md-size-100 text-right">
						<md-button class="md-raised md-success" v-on:click="cadastrar()">Cadastrar</md-button>
					</div>
				</div>
			</md-card-content>
		</md-card>
	</form>
</template>
<script>
export default {
	name: "edit-profile-form",
	props: {
		dataBackgroundColor: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			tarefa: {
				tarefa: null,
				responsavel: null,
				descricao: null,
			},
			type: ["", "info", "success", "warning", "danger"],
			notifications: {
				topCenter: false,
			},
		};
	},
	methods: {
		carrega() {
			const id = this.$route.params.id;
			console.log(id);
			if (id > 0) {
				console.log("caiu");
				this.axios.get("tarefa/" + id).then((res) => {
					this.tarefa = res.data[0];
					console.log(this.tarefa);
				});
			}
		},

		cadastrar() {
			console.log("cadastrar");
			this.axios.post("novaTarefa", this.tarefa).then((res) => {
				this.notifyVue("top", "center");
				this.$router.push("tasks");
			});
		},

		notifyVue(verticalAlign, horizontalAlign) {
			var color = 2;
			this.$notify({
				message: "Tarefa adicionada com sucesso!",
				icon: "add_alert",
				horizontalAlign: horizontalAlign,
				verticalAlign: verticalAlign,
				type: this.type[color],
			});
		},
	},
	mounted() {
		this.carrega();
	},
};
</script>
<style></style>
