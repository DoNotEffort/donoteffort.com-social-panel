<template>
	<a class="social-button" :href="url">
		<github-icon fill="white" width="20"/>
		Github
	</a>
</template>
<script>
import GithubIcon from '@/static/assets/icons/social/github.svg?inline'
export default {
	components: {
		GithubIcon
	},
	props: {
		url: {
			type: String,
			required: true
		}
	}
}
</script>
<style scoped>
svg{
	margin-right: 5px;
}
</style>
<style>
.social-button{
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0.5rem 1rem;
	border-radius: 0.5rem;
	background-color: #24292e;
	color: #fff;
	cursor: pointer;
	width: fit-content;
	text-decoration: none;
}
</style>