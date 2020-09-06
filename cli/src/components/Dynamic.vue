<template>
	<div>
		<h1>Dynamic Route Component</h1>
		<p>This is dynamic route for child components with id = <span class="text-danger">{{id}}</span></p>
	</div>
</template>

<script type="text/javascript">
	export default {
		props: ['id']
	}
</script>

<style type="text/css">
	
</style>