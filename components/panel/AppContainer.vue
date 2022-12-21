<template>
	<div class="panel">
		<panel-app-header class="background-color"/>
		<panel-app-content class="background-color"/>
	</div>
</template>
<style scoped>
.panel{
	width: 95vw;
	height: 95vh;
	margin-top: 2.5vh;
	margin-left: 2.5vw;
	display: flex;
}



.panel-content,
.panel-header{
	color: black;
}

@media only screen and (max-width: 768px) {
	.panel{
		width: 100vw;
		height: 100vh;
		margin-top: 0;
		margin-left: 0;
		flex-direction: column;
	}

}

</style>