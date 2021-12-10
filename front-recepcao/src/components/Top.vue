<template>
	<div>
		<div>
			<nav class="black">
				<div class="nav-wrapper">
					<a href="#" class="brand-logo right">teste</a>
					<ul id="nav-mobile" class="left hide-on-med-and-down">
						<li>
							<router-link to="/">Home</router-link>
						</li>
						<li>
							<router-link to="cadastro">Cadastrar Visitante</router-link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
		<div class="divider"></div>
	</div>
</template>


<script>
export default {
	name: "Top",
};
</script>

<style>
</style>