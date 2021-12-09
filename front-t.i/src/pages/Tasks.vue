<template>
	<div class="content">
		<div class="md-layout">
			<div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
				<md-card>
					<md-card-header data-background-color="green">
						<h4 class="title">Tarefas Cadastradas</h4>
					</md-card-header>
					<md-card-content>
						<div>
							<md-table ref="table" v-model="tarefas" table-header-color="green">
								<md-table-row slot="md-table-row" slot-scope="{ item }">
									<md-table-cell md-label="ID">{{ item.id }}</md-table-cell>
									<md-table-cell md-label="TAREFA">{{ item.tarefa }}</md-table-cell>
									<md-table-cell md-label="DESCRIÇÃO">{{ item.descricao }}</md-table-cell>
									<md-table-cell md-label="RESPONSÁVEL">{{ item.responsavel }}</md-table-cell>
									<md-table-cell md-label="AÇÕES">
										<router-link :to="'/taskEdit/'+item.id">
											<button>
												<md-icon>preview</md-icon>
											</button>
										</router-link>&nbsp;
										<button v-on:click="deletar(item.id)">
											<md-icon>delete</md-icon>
										</button>
									</md-table-cell>
								</md-table-row>
							</md-table>
						</div>
					</md-card-content>
				</md-card>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tarefas: [],
		};
	},
	methods: {
		listar() {
			console.log("epa");
			this.axios.get("listar").then((res) => {
				this.tarefas = res.data;
			});
		},
		deletar(id) {
			this.axios.delete("tarefa/" + id).then((resp) => {
				this.listar();
			});
		},
	},
	mounted() {
		this.listar();
	},
};
</script>
